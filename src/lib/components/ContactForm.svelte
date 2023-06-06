<!-- ContactForm.svelte -->

<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { browser } from "$app/environment";

    import {
        validators,
        minLength,
        required,
        email,
        maxLength,
        useForm,
    } from "svelte-use-form";
    import { goto } from "$app/navigation";

    var form = useForm();
    var HCAPTCHA_SITE_KEY = "30000000-ffff-ffff-ffff-000000000003";

    let state = {
        email: "",
        name: "",
        number: "",
        message: "",
        token: "",
        didCaptcha: false,
    };

    let error = "";
    let message = "";
    let loading = false;

    async function handleSubmit() {
        message = "";
        error = "";
        loading = true;

        if (state.didCaptcha) {
            let res = await fetch("/api/email", {
                method: "POST",
                body: JSON.stringify({
                    ...state,
                }),
            });

            let result = await res.json();

            console.log(result);

            if (result.success === true) {
                goto("/thank-contact-us");
            } else {
                if (result.error === "ERR_NUMBER") {
                    error = "Invalid number, maybe not international?";
                    loading = false;
                } else if (result.error === "ERR_CAPTCHA") {
                    error = "Something went wrong with the captcha, please refresh if you think this is an issue";
                    loading = false;
                }
            }
        } else {
            error =
                "Please do the captcha, if there is an issue with the captcha please refresh the page";
            loading = false;
        }
    }

    function onSubmitCaptcha(token) {
        state.token = token;
        state.didCaptcha = true;
        if (error.length > 0 && error === "Please do the captcha") {
            error = "";
        }
    }

    function onCaptchaExpired() {
        state.token = "";
        state.didCaptcha = false;
    }

    let hcaptcha = {
        execute: async (_a, _b) => ({ response: "" }),
        render: (_a, _b) => {},
    };

    onMount(() => {
        if (browser) {
            window.onSubmitCaptcha = onSubmitCaptcha;
            window.onCaptchaExpired = onCaptchaExpired;
            hcaptcha = window.hcaptcha;
            if (hcaptcha.render) {
                hcaptcha.render("hcaptcha", {
                    sitekey: HCAPTCHA_SITE_KEY,
                    size: "normal",
                });
            }
        }
    });

    onDestroy(() => {
        if (browser) {
            hcaptcha = {
                execute: async () => ({ response: "" }),
                render: () => {},
            };
        }
    });
</script>

<svelte:head>
    <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<form use:form on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label>
    <input
        type="text"
        id="name"
        name="name"
        use:validators={[minLength(3), required]}
        bind:value={state.name}
        disabled={loading}
        required
    />

    <label for="email">Email:</label>
    <input
        type="email"
        id="email"
        name="email"
        use:validators={[required, email]}
        bind:value={state.email}
        disabled={loading}
        required
    />

    <label for="phone">Phone number: <sup>international</sup></label>
    <input
        type="text"
        id="phone"
        name="phone"
        bind:value={state.number}
        use:validators={[required]}
        disabled={loading}
        required
    />

    <label for="message">Message:</label>
    <textarea
        id="message"
        name="message"
        use:validators={[required, minLength(5), maxLength(4000)]}
        bind:value={state.message}
        disabled={loading}
        required
    />

    <div
        id="hcaptcha"
        class="h-captcha"
        data-sitekey={HCAPTCHA_SITE_KEY}
        data-size="normal"
        data-callback="onSubmitCaptcha"
        data-expired-callback="onCaptchaExpired"
    />

    <input type="submit" value="Send" disabled={!$form.valid || loading} />

    <p style="color: red;">{error.length > 0 ? error : ""}</p>
    <p>{message.length > 0 ? message : ""}</p>
</form>

<style>
    form {
        width: 100%;
        margin: 0 auto;
        font-size: 16px;
        line-height: 1.5;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="email"],
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 15px;
    }

    input:disabled {
        background: #dddddd;
    }

    input[type="submit"] {
        background-color: #4caf50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #3e8e41;
    }

    input[type="submit"]:disabled {
        background-color: #7ee281;
        cursor: not-allowed;
    }
</style>
