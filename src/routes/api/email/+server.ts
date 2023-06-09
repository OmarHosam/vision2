import { json } from '@sveltejs/kit'
import { createTransport } from 'nodemailer';
import googlelibphonenumber from 'google-libphonenumber'
import { HCATPCHA_SECRET_KEY, SMTP_HOST, SMTP_USER, SMTP_PASS } from '$env/static/private';

const captcha_api = 'hcaptcha.com/siteverify';

async function sendMail(message: string, name: string, email: string, phone: string) {
    console.log(SMTP_HOST, SMTP_USER, SMTP_PASS)
    const transporter = createTransport({
        host: SMTP_HOST,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        }
    });

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    const mailData = {
        from: email,
        to: SMTP_USER,
        subject: "New Submition from " + email,
        text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        `,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

}

async function verify(token: string, secret_key: string = HCATPCHA_SECRET_KEY) {
    const response = await fetch(`https://${captcha_api}?secret=${secret_key}&response=${token}`);
    const data = await response.json();
    return data;
}

export async function POST(event: { request: { json: () => any; }; }) {
    const data = await event.request.json();
    // for testing purposes
    // let secret_key = "0x0000000000000000000000000000000000000000";
    let pnu = googlelibphonenumber.PhoneNumberUtil.getInstance();
    console.log(data)

    // await new Promise(r => setTimeout(r, 5000));

    try {
        const number = pnu.parseAndKeepRawInput(data.number, '');
        if (pnu.isValidNumber(number)) {
            console.log("Valid number")
            if (data.didCaptcha === true) {
                const verification = await verify(data.token, HCATPCHA_SECRET_KEY);
                if (verification.success) {
                    console.log("did captcha")
                    // now we finally send an email to our domain email
                    await sendMail(data.message, data.name, data.email, data.number);
                    return json({ success: true, didEverythingRight: true });
                } else {
                    console.log("didnt do captcha in")
                    return json({ success: false, error: "ERR_CAPTCHA" })
                }
            } else {
                console.log("didnt do captcha out")
                return json({ success: false, error: "ERR_CAPTCHA" })
            }
        } else {
            console.log("invalid number in")
            return json({ success: false, error: "ERR_NUMBER" })
        }
    } catch (err) {
        console.log("invalid number out")
        return json({ success: false, error: "ERR_NUMBER" })
    }

    // it's common to return JSON, so SvelteKit has a helper
    return json({ success: true })
}
