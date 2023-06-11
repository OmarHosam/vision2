<script>
    import "$lib/styles/LandingSections.css";
</script>

<section class="section" id="about-us">
    <div class="section-header">
        <h1 class="section-heading">About us</h1>
        <div class="underline" />
    </div>

    <div class="about-section">
        <div class="about-text">
            <p>
                The company is a leading supplier of all types of printing
                supplies. They specialize in importing the best printing
                machines, inks, and papers, and always ensure that all products
                are compatible with the highest globally recommended quality
                standards. <a href="/about">Read more.</a>
            </p>
        </div>
    </div>
</section>

<style>
    section {
        background: var(--color-primary);
        position: relative;
        overflow: hidden;
        background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/images/bg2-upres.jpg");
        background-size: cover;
    }

    .section-heading {
        color: var(--color-secondary);
        position: relative;
    }

    .about-section {
        color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .about-text {
        font-size: 3rem;
        width: 80%;
        position: relative;
    }

    .about-text p {
        line-height: 5rem;
    }

    .about-text a {
        text-decoration: underline;
        color: var(--color-secondary)
    }
</style>
