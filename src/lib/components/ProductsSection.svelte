<script>
    import "$lib/styles/LandingSections.css";
</script>

<section class="section" id="products">
    <div class="section-header">
        <h1 class="section-heading">Products</h1>
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
                Get premium quality paper for long-lasting, excellent prints.
                Choose from our wide variety of sizes at competitive price
                points. <a href="/products">See more.</a>
            </p>
        </div>
        <div class="service">
            <div class="service-header">
                <i class="fas fa-compact-disc" />
                <h3>Accessories</h3>
            </div>
            <p class="service-text">
                Achieve the perfect print with our printing accessories! Our
                range of high-quality accessories are designed to meet all your
                printing needs. From printer cartridges to paper, we’ve got you
                covered. Discover our variety of options at competitive prices
                and take printing to the next level! <a href="/products"
                    >See more.</a
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
                right place! Our team of experts are specialised in providing
                outstanding services for all your needs. Count on us for fast
                and cost-effective solutions. <a href="/products">See more.</a>
            </p>
        </div>
        <div class="service">
            <div class="service-header">
                <i class="fas fa-print" />
                <h3>Used copiers and printers</h3>
            </div>
            <p class="service-text">
                Upgrade your office with affordable high-quality used copiers.
                Find unbeatable pricing options.
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
                long-lasting print options. <a href="/products">See more.</a>
            </p>
        </div>
        <div class="products-img-wrapper">
            <img src="/images/logo.png" alt="Vision for printing solutions" />
        </div>
    </div>
</section>

<style>
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

    .products-img-wrapper {
        grid-column: 7 / 11;
        grid-row: 2 / 6;
        width: 100%;
    }

    .products-img-wrapper img {
        width: 280px;
        object-fit: cover;
        opacity: 0.8;
    }

    @media (max-width: 1500px) {
        .products-img-wrapper {
            grid-row: 3 / -1;
        }
    }

    @media (max-width: 1400px) {
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

    @media (max-width: 1000px) {
        .services {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .service {
            width: 40rem;
            margin-bottom: 6rem;
        }

        .products-img-wrapper {
            display: none;
        }
    }

    @media (max-width: 500px) {
        .service {
            width: 30rem;
        }
    }
</style>
