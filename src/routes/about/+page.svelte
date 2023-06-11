<script>
    import ContactSection from "$lib/components/ContactSection.svelte";
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
                standards. Their commitment to quality has made them a trusted
                name in the industry. They are dedicated to providing their
                customers with the best products and services to ensure the
                success of their printing operations. <a href="/">Go back.</a>
            </p>
        </div>
    </div>
</section>

<ContactSection />

<style>
    section {
        background: var(--color-secondary);
        position: relative;
        overflow: hidden;
        background-size: cover;
    }

    .section-heading {
        color: var(--color-primary);
        position: relative;
    }

    .about-section {
        color: var(--color-primary);
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
        color: var(--color-primary);
        text-decoration: underline;
    }
</style>
