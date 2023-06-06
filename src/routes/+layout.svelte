<script lang="ts">
    import Analytics from "$lib/components/analytics.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import SEO from "$lib/components/SEO.svelte";
</script>

<Analytics />
<SEO />

<slot />
<Footer />