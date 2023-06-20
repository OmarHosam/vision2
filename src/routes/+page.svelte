<script>
    import ScrollToTopButton from "$lib/components/ScrollToTopButton.svelte";
    import ProductsSection from "$lib/components/ProductsSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import { slide } from "svelte/transition";

    var change = false;
    var submenu_expand = false;

    function handleAnchorClick(event) {
        event.preventDefault();
        const link = event.currentTarget;
        const anchorId = new URL(link.href).hash.replace("#", "");
        const anchor = document.getElementById(anchorId);
        window.scrollTo({
            top: anchor.offsetTop,
            behavior: "smooth",
        });
    }
</script>

<svelte:head>
    <title
        >Vision Company.</title
    >
</svelte:head>

<div class={change ? "container change" : "container"}>
    <div
        class="hamburger-menu"
        on:click={() => {
            change = !change;
        }}
        on:keydown={() => {
            change = !change;
        }}
    >
        <div class={change ? "line line-1 change" : "line line-1"} />
        <div class={change ? "line line-2 change" : "line line-2"} />
        <div class={change ? "line line-3 change" : "line line-3"} />
    </div>
    <header class="header" id="home">
        <div class="img-wrapper">
            <img src="/images/bg.jpg" alt="Background" />
        </div>
        <div class="banner">
            <h1>Vision</h1>
            <h1 class="full">for printing solutions</h1>
            <p>
                Experience the best high quality printing with our essentials.
            </p>
            <a href="#about-us" on:click={handleAnchorClick}
                ><button>About us</button></a
            >
        </div>
    </header>

    <section class="sidebar">
        <ul class="menu">
            <li class="menu-item">
                <a
                    href="#home"
                    on:click={() => {
                        change = !change;
                    }}
                    class="menu-link"
                    data-content="Home">Home</a
                >
            </li>
            <li class="menu-item">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                    class="menu-link"
                    on:keydown
                    on:click={() => (submenu_expand = !submenu_expand)}
                    data-content="Products">Products</a
                >
                {#if submenu_expand}
                    <div class="dropdown" transition:slide>
                        <ul class="menu">
                            <li class="menu-item">
                                <a
                                    class="menu-link"
                                    href="/products?category=ink"
                                    data-content="Ink">Ink</a
                                >
                            </li>
                            <li class="menu-item">
                                <a
                                    class="menu-link"
                                    href="/products?category=paper"
                                    data-content="Paper">Paper</a
                                >
                            </li>
                        </ul>
                    </div>
                {/if}
            </li>
            <li class="menu-item">
                <a
                    href="#about-us"
                    on:click={() => {
                        change = !change;
                    }}
                    class="menu-link"
                    data-content="About us">About us</a
                >
            </li>
        </ul>
        <div class="social-media">
            <a href="https://www.facebook.com/visionpcl" target="_blank"
                ><i class="fab fa-facebook" /></a
            >
            <a href="tel:+201100887786" target="_blank"
                ><i class="fas fa-phone" /></a
            >
            <a href="tel:+201100887753" target="_blank"
                ><i class="fas fa-phone" /></a
            >
            <a href="mailto:info@visionpcl.com" target="_blank"
                ><i class="fas fa-envelope" /></a
            >
        </div>
    </section>

    <ProductsSection />
    <AboutSection />
    <ScrollToTopButton />
</div>

<style>
    .hamburger-menu {
        width: 3rem;
        height: 3rem;
        position: fixed;
        top: 5rem;
        right: 5rem;
        z-index: 200;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        cursor: pointer;
        transition: right 0.7s;
        z-index: 9999;
    }

    .change .hamburger-menu {
        right: 33rem;
    }

    .line {
        width: 100%;
        height: 0.2rem;
        background-color: #fff;
        box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
    }

    .change .line {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .change .line-1 {
        transform: rotate(45deg) translate(0.3rem, 0.8rem);
    }

    .change .line-2 {
        opacity: 0;
        visibility: hidden;
    }

    .change .line-3 {
        transform: rotate(-45deg) translate(0.3rem, -0.8rem);
    }

    .header {
        width: 100%;
        height: 100vh;
        position: relative;
        perspective: 100rem;
        overflow: hidden;
    }

    .img-wrapper {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        overflow: hidden;
    }

    .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
        animation: scale 25s;
    }

    @keyframes scale {
        0% {
            transform: scale(1.3);
        }

        100% {
            transform: scale(1);
        }
    }

    .banner {
        position: absolute;
        top: 30%;
        left: 15%;
    }

    .banner h1 {
        font-size: 8rem;
        font-weight: 300;
        color: #fff;
        width: 50%;
        line-height: 9rem;
        letter-spacing: 0.2rem;
        text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.4);
        opacity: 0;
        animation: moveBanner 1s 0.5s forwards;
    }

    .banner h1.full {
        width: 100%;
    }

    .banner p {
        font-size: 4rem;
        color: #fff;
        width: 70%;
        letter-spacing: 0.1rem;
        margin-bottom: 3rem;
        text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.4);
        opacity: 0;
        animation: moveBanner 1s 0.7s forwards;
    }

    .banner button {
        width: 25rem;
        height: 7rem;
        background-color: var(--color-accent);
        border: none;
        font-size: 2rem;
        text-transform: uppercase;
        color: var(--color-secondary);
        border-radius: 5px;
        text-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
        box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.4);
        cursor: pointer;
        opacity: 0;
        animation: moveBanner 1s 0.9s forwards;
    }

    @keyframes moveBanner {
        0% {
            transform: translateY(40rem) rotateY(-20deg);
        }

        100% {
            transform: translateY(0) rotateY(0);
            opacity: 1;
        }
    }

    .sidebar {
        width: 40rem;
        height: 100vh;
        position: fixed;
        top: 0;
        right: -40rem;
        background-color: #fff;
        transition: right 0.5s;
        z-index: 100;
    }

    .change .sidebar {
        right: 0;
    }

    .menu {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .menu-item {
        text-align: left;
        position: relative;
    }

    .menu-item .dropdown {
        display: block;
    }

    .menu-item .menu {
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translate(15%, 0);
    }

    .menu-item .dropdown .menu-link::before {
        display: block;
    }

    .menu-link {
        font-size: 4rem;
        color: var(--color-primary);
        position: relative;
        cursor: pointer;
    }

    .menu-link::before {
        content: attr(data-content);
        position: absolute;
        top: 0;
        left: 0;
        color: var(--color-accent);
        width: 0;
        overflow: hidden;
        white-space: nowrap;
        transition: width 0.3s ease-in-out;
    }

    .menu-link:hover::before {
        width: 100%;
    }

    .social-media {
        position: absolute;
        bottom: 3rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .social-media i {
        font-size: 2.2rem;
        margin: 3rem;
        width: 4.5rem;
        height: 4.5rem;
        background-color: #777;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: background-color 0.3s;
    }

    .social-media i:hover {
        background-color: var(--color-primary);
    }

    @media (max-width: 1400px) {
        .banner h1 {
            font-size: 6rem;
            line-height: 7rem;
        }

        .banner p {
            font-size: 3rem;
        }

        .banner button {
            width: 20rem;
            height: 5rem;
            font-size: 1.6rem;
        }

        .menu-link {
            font-size: 3rem;
        }
    }

    @media (max-width: 1000px) {
        .banner h1 {
            font-size: 5rem;
            line-height: 6rem;
        }

        .banner p {
            font-size: 2.5rem;
        }

        .banner button {
            width: 18rem;
            height: 4rem;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 700px) {
        .banner h1 {
            font-size: 4rem;
            line-height: 5rem;
        }

        .banner p {
            font-size: 2rem;
        }
    }

    @media (max-width: 500px) {
        .sidebar {
            width: 100%;
            right: -100%;
        }

        .change .hamburger-menu {
            right: 38rem;
        }
    }
</style>
