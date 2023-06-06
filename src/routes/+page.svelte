<script>
    import ContactForm from "$lib/components/ContactForm.svelte";

    var change = false;
</script>

<title
    >Vision | Buy used copier, used printers, high quality ink, accessories and
    a lot more</title
>
<div class={change ? "container change" : "container"}>
    <div
        class="hamburger-menu"
        on:click={() => {
            change = !change;
        }}
        on:keydown={() => {
            change = !change
        }}
    >
        <div class={change ? "line line-1 change" : "line line-1"} />
        <div class={change ? "line line-2 change" : "line line-2"} />
        <div class={change ? "line line-3 change" : "line line-3"} />
    </div>
    <header class="header" id="home">
        <div class="img-wrapper">
            <img src="$lib/assets/bg.jpg" alt="Background" />
        </div>
        <div class="banner">
            <h1>Vision</h1>
            <h1 class="full">for printing solutions</h1>
            <p>
                Experience the best high quality printing with our essentials.
            </p>
            <a href="#about-us"><button>About us</button></a>
        </div>
    </header>

    <section class="sidebar">
        <ul class="menu">
            <li class="menu-item">
                <a
                    href="#home"
                    on:click={() => {
                        change = !change
                    }}
                    class="menu-link"
                    data-content="Home">Home</a
                >
            </li>
            <li class="menu-item">
                <a
                    href="#about-us"
                    on:click={() => {
                        change = !change
                    }}
                    class="menu-link"
                    data-content="About Us">About Us</a
                >
            </li>
            <li class="menu-item">
                <a
                    href="/products"
                    on:click={() => {
                        change = !change
                    }}
                    class="menu-link"
                    data-content="Products">Products</a
                >
            </li>
            <li class="menu-item">
                <a
                    href="#contact"
                    on:click={() => {
                        change = !change
                    }}
                    class="menu-link"
                    data-content="Contact">Contact</a
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

    <section class="about-us" id="about-us">
        <div class="section-header">
            <h1 class="section-heading">About Us</h1>
            <div class="underline" />
        </div>
        <div class="services">
            <div class="service">
                <div class="service-header">
                    <i class="fas fa-fill" />
                    <h3>Ink</h3>
                </div>
                <p class="service-text">
                    Our ink cartridges ensure a seamless printing experience.
                    Outstanding durability and reliable, affordable quality.
                    Discover the best print quality. <a href="/products"
                        >See more.</a
                    >
                </p>
            </div>
            <div class="service">
                <div class="service-header">
                    <i class="fas fa-scroll" />
                    <h3>Paper</h3>
                </div>
                <p class="service-text">
                    Get premium quality paper for long-lasting, excellent
                    prints. Choose from our wide variety of sizes at competitive
                    price points. <a href="/products">See more.</a>
                </p>
            </div>
            <div class="service">
                <div class="service-header">
                    <i class="fas fa-compact-disc" />
                    <h3>Accessories</h3>
                </div>
                <p class="service-text">
                    Achieve the perfect print with our printing accessories! Our
                    range of high-quality accessories are designed to meet all
                    your printing needs. From printer cartridges to paper, we’ve
                    got you covered. Discover our variety of options at
                    competitive prices and take printing to the next level! <a
                        href="/products">See more.</a
                    >
                </p>
            </div>
            <div class="service">
                <div class="service-header">
                    <i class="fa fa-cogs" />
                    <h3>Services</h3>
                </div>
                <p class="service-text">
                    Need reliable and professional services? You’ve come to the
                    right place! Our team of experts are specialised in
                    providing outstanding services for all your needs. Count on
                    us for fast and cost-effective solutions. <a
                        href="/products">See more.</a
                    >
                </p>
            </div>
            <div class="service">
                <div class="service-header">
                    <i class="fas fa-print" />
                    <h3>Used copiers and printers</h3>
                </div>
                <p class="service-text">
                    Upgrade your office with affordable high-quality used
                    copiers. Find unbeatable pricing options.
                    <a href="/products">See more.</a>
                </p>
            </div>
            <div class="service">
                <div class="service-header">
                    <i class="fas fa-paint-brush" />
                    <h3>UV & Eco solvent</h3>
                </div>
                <p class="service-text">
                    Experience high-quality prints with our UV & Eco solvent
                    technology. Our advanced printing technology offers vibrant,
                    long-lasting print options. <a href="/products">See more.</a
                    >
                </p>
            </div>
            <div class="about-us-img-wrapper">
                <img
                    src="$lib/assets/logo.png"
                    alt="Vision for printing solutions"
                />
            </div>
        </div>
    </section>

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

    <a href="#top" class="scroll-btn">
        <i class="fas fa-arrow-up" />
    </a>
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
        text-align: center;
    }

    .menu-link {
        font-size: 4rem;
        color: var(--color-primary);
        position: relative;
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

    .about-us {
        width: 100%;
        background-color: #f5f5f5;
        padding-bottom: 15rem;
    }

    .section-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 7rem 0 10rem 0;
    }

    .section-heading {
        font-size: 5rem;
        font-weight: 300;
        color: #4b4b4b;
        margin-bottom: 6rem;
    }

    .underline {
        width: 12rem;
        height: 0.3rem;
        background-color: var(--color-accent);
    }

    .services {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(6, 6rem);
        grid-row-gap: 4rem;
    }

    .service {
        width: 100%;
        margin-bottom: 2rem;
    }

    .service:nth-child(1) {
        grid-column: 4 / 7;
        grid-row: 1 / 3;
    }

    .service:nth-child(2) {
        grid-column: 3 / 6;
        grid-row: 3 / 5;
    }

    .service:nth-child(3) {
        grid-column: 4 / 7;
        grid-row: 5 / -1;
    }

    .service:nth-child(4) {
        grid-column: 11 / 14;
        grid-row: 1 / 3;
    }

    .service:nth-child(5) {
        grid-column: 12 / 15;
        grid-row: 3 / 5;
    }

    .service:nth-child(6) {
        grid-column: 11 / 14;
        grid-row: 5 / -1;
    }

    .service-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .service-header i {
        font-size: 4rem;
        color: #4b4b4b;
        margin-right: 2rem;
    }

    .service-header h3 {
        font-size: 2.6rem;
        line-height: 2.6rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }

    .service-text {
        font-size: 1.6rem;
        text-align: justify;
    }

    .service-text a {
        color: var(--color-primary);
        text-decoration: underline;
    }

    .about-us-img-wrapper {
        grid-column: 7 / 11;
        grid-row: 2 / 6;
        width: 100%;
    }

    .about-us-img-wrapper img {
        width: 280px;
        object-fit: cover;
        opacity: 0.8;
    }

    .scroll-btn {
        position: fixed;
        right: 5rem;
        bottom: 5rem;
        width: 4.5rem;
        height: 4.5rem;
        background-color: var(--color-accent);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: #fff;
        box-shadow: 0 0.1rem 0.6rem rgba(0, 0, 0, 0.2);
        border-radius: 0.3rem;
    }

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
        .about-us-img-wrapper {
            grid-row: 3 / -1;
        }

        .contact-wrapper {
            width: 80%;
            height: 65rem;
        }
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

        .service:nth-child(1) {
            grid-column: 3 / 7;
        }

        .service:nth-child(2) {
            grid-column: 2 / 6;
        }

        .service:nth-child(3) {
            grid-column: 3 / 7;
        }

        .service:nth-child(4) {
            grid-column: 11 / 15;
        }

        .service:nth-child(5) {
            grid-column: 12 / 16;
        }

        .service:nth-child(6) {
            grid-column: 11 / 15;
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

        .contact-right {
            padding: 1.5rem 5rem 1.5rem 5rem;
        }

        .services {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .service {
            width: 40rem;
            margin-bottom: 6rem;
        }

        .about-us-img-wrapper {
            display: none;
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

        .service {
            width: 30rem;
        }

        .contact {
            width: 100%;
            height: 100%;
        }

        .contact-wrapper {
            width: 100%;
            height: 100%;
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
