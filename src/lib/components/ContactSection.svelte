<script>
    import ContactForm from "$lib/components/ContactForm.svelte";
</script>

<section class="contact" id="contact">
    <div class="contact-wrapper">
        <div class="contact-left">
            <iframe
                title="Head Office"
                id="headOffice"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.73495403336676!2d31.19930253415428!3d30.040310912060967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846cb7e4db82b%3A0x13342fc7df827872!2s21%20El-Hussein%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate%203751043!5e0!3m2!1sen!2seg!4v1661033132678!5m2!1sen!2seg"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                style="border: 0px;"
                data-ruffle-polyfilled=""
            />
            <span class="map-label" id="first-label">Head Office</span>
            <iframe
                title="Haram Branch"
                id="haramBranch"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.93211896980694!2d31.200060543209784!3d30.010628461536506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847a13cb84c25%3A0xe4f4aab851284de8!2z2KrYqtiq!5e0!3m2!1sen!2seg!4v1660859899178!5m2!1sen!2seg"
                frameborder="0"
                style="border: 0px;"
                data-ruffle-polyfilled=""
            />
            <span class="map-label" id="second-label">Haram Branch</span>
        </div>
        <div class="contact-right">
            <h1 class="contact-heading">Contact</h1>
            <div class="contact-info">
                <ContactForm />
            </div>
        </div>
    </div>
</section>

<style>
    .contact {
        width: 100%;
        min-height: 100vh;
        padding: 10rem 0;
        background-color: #272727;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-wrapper {
        width: 60%;
        height: 75rem;
        display: flex;
        box-shadow: 0 3rem 7rem rgba(0, 0, 0, 0.5);
    }

    .contact-left {
        width: 35%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .contact-left iframe {
        width: 100%;
        height: 50%;
    }

    .contact-right {
        width: 65%;
        height: 100%;
        background-color: #eee;
        padding: 3rem 5rem 3rem 5rem;
    }

    .contact-heading {
        font-size: 6rem;
        font-weight: 300;
        color: #272727;
        margin-bottom: 5rem;
        text-align: center;
    }

    .map-label {
        position: absolute;
        font-size: 3rem;
        color: var(--color-primary);
        filter: drop-shadow(0 0 0.75rem white);
    }

    #first-label {
        left: 60%;
        right: 0;
    }

    #second-label {
        left: 60%;
        right: 0;
        top: 49.9%;
        bottom: 0;
    }

    @media (max-width: 1500px) {
        .contact-wrapper {
            width: 80%;
            height: 65rem;
        }
    }

    @media (max-width: 1300px) {
        .contact-wrapper {
            width: 90%;
            height: 90%;
        }

        .contact-heading {
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 1000px) {
        .contact-right {
            padding: 1.5rem 5rem 1.5rem 5rem;
        }

        .contact-left {
            flex-direction: row;
            width: 100%;
            height: 100%;
        }

        .contact-left iframe {
            width: 50%;
            height: 100%;
        }

        .contact-wrapper {
            flex-direction: column;
        }

        .contact-right {
            width: 100%;
            height: 100%;
        }

        .contact-heading {
            margin-bottom: 1rem;
            font-size: 4rem;
        }

        #first-label {
            left: 1.2%;
            right: 0;
            bottom: 0;
            top: 25%;
        }

        #second-label {
            left: 51.5%;
            right: 0;
            bottom: 0;
            top: 25%;
        }
    }

    @media (max-width: 500px) {
        .contact {
            min-height: 100%;
            width: 100%;
            height: 100%;
            padding: 0;
        }

        .contact-wrapper {
            width: 100%;
            height: 100%;
        }

        .contact-left #haramBranch,
        #second-label {
            display: none;
        }

        .contact-left iframe {
            width: 100%;
        }

        #first-label {
            bottom: 0;
            top: 20%;
        }

        #second-label {
            bottom: 0;
            top: 20%;
        }
    }
</style>
