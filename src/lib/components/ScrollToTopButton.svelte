<script>
    // @ts-ignore
    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
</script>

<a href="#top" on:click={scrollToTop} class="scroll-btn">
    <i class="fas fa-arrow-up" />
</a>

<style>
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
</style>
