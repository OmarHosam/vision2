<script>
    import logo from "$lib/assets/logo.png";
</script>

<div class="wrapper">
    <div class="container">
        <img src={logo} alt="Vision" />
        <h1>Our site is under construction</h1>
        <p>We're still developing the website, check back soon! <a href="/">Go back.</a></p>
    </div>
</div>

<style>
    .wrapper {
        min-height: calc(100vh - 60px);
        width: 100%;
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 50px;
        text-align: center;
    }

    h1 {
        font-size: 48px;
        margin-bottom: 20px;
    }

    a {
        color: black;
        text-decoration: underline;
    }

    p {
        font-size: 24px;
        line-height: 1.5;
    }

    img {
        height: 100%;
        width: 200px;
    }

    @media (max-width: 768px) {
        .container {
            padding: 30px;
        }

        h1 {
            font-size: 36px;
        }

        p {
            font-size: 18px;
        }

        img {
            width: 170px;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 20px;
        }

        h1 {
            font-size: 32px;
        }

        p {
            font-size: 16px;
        }

        img {
            width: 100px;
        }
    }

    @media (max-width: 500px) {
        .wrapper {
            min-height: calc(100vh - 36px);
        }
    }
</style>
