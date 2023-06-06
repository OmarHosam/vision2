<script>

    import { page } from "$app/stores";
    import logo from "$lib/assets/logo.png";

</script>
<svelte:head>
    <meta property="og:url" content={"https://visionpcl.com" + $page.url.pathname}>
    <meta http-equiv="Content-Language" content="en">
    <meta name="Language" content="English">
    <meta name="lang" content="en">
    <meta name="geo.region" content="EG">
    <meta name="geo.placename" content="Egypt">
    <meta name="geo.position" content="26.8206;30.8025">
    <meta name="ICBM" content="26.8206, 30.8025">
    <meta property="og:image" content={"https://visionpcl.com" + logo}>
    <link rel="canonical" href={"https://visionpcl.com" + $page.url.pathname}>
</svelte:head>