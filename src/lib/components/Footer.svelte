<footer class="footer">
    <div class="footer-content">
        <p class="copyright">
            Copyright &copy; 2022, Vision - All Rights Reserved
        </p>
        <p>
            Made by <a
                href="https://omarhosam.github.io/portfolio"
                target="_blank">Omar Hosam</a
            >
        </p>
    </div>
</footer>

<style>
    .footer {
        width: 100%;
        height: 6rem;
        background-color: #17181b;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-content {
        width: 60%;
        display: flex;
        justify-content: space-between;
        font-size: 1.6rem;
        color: #a7a7a7;
    }

    .footer-content p a {
        color: #a7a7a7;
        text-decoration: underline;
    }

    @media (max-width: 1500px) {
        .footer-content {
            width: 80%;
        }
    }

    @media (max-width: 1000px) {
        .copyright {
            order: 1;
            margin-top: 1rem;
        }

        .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
        }
    }

    @media (max-width: 700px) {
        .copyright {
            margin-top: 0;
        }
    }

    @media (max-width: 500px) {
        .footer {
            height: 5rem;
        }
    }
</style>
