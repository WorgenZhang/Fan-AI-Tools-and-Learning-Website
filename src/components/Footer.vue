<template>
    <footer class="footer">
        <div class="footer-divider"></div>
        <div class="footer-container">
            <div class="footer-nav">
                <div class="footer-column">
                    <h3>COMPANY</h3>
                    <a href="#">Careers</a>
                    <a href="#">Press Inquires</a>
                    <a href="#">Brand Guidelines</a>
                    <a href="#">Supply Store</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Security</a>
                    <a href="#">Terms & Conditions</a>
                </div>

                <div class="footer-column">
                    <h3>PRODUCT</h3>
                    <a href="#">Comet Browser</a>
                    <a href="#">Desktop App</a>
                    <a href="#">iPhone App</a>
                    <a href="#">Android App</a>
                    <a href="#">Email Assistant</a>
                </div>

                <div class="footer-column">
                    <h3>RESOURCES</h3>
                    <a href="#">Getting Started</a>
                    <a href="#">Help Center</a>
                    <a href="#">Changelog</a>
                    <a href="#">Give Feedback</a>
                </div>

                <div class="footer-column">
                    <h3>API PLATFORM</h3>
                    <a href="#">API Overview</a>
                    <a href="#">API Models</a>
                    <a href="#">API Documentation</a>
                    <a href="#">API FAQs</a>
                    <a href="#">API Terms of Service</a>
                </div>

                <div class="footer-column">
                    <h3>FOLLOW US</h3>
                    <a href="#">X (Twitter)</a>
                    <a href="#">Discord</a>
                    <a href="#">Instagram</a>
                    <a href="#">Threads</a>
                    <a href="#">Linkedin</a>
                    <a href="#">YouTube</a>
                </div>

                <div class="footer-column">
                    <div class="app-store-badges">
                        <div class="app-badge"></div>
                        <div class="app-badge"></div>
                    </div>
                </div>
            </div>

            <div class="footer-branding">
                <div class="footer-logo"></div>
                <p class="footer-copyright">© Copyright 2025 Perplexity — Where Knowledge Begins</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer-divider {
    height: 2px;
    background-color: #091717;
    margin: 48px 0 0 0;
}

.footer {
    background-color: #fbfaf4;
    padding: 48px 0;
}

.footer-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 32px;
}

.footer-nav {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 40px;
    margin-bottom: 40px;
}

.footer-column h3 {
    font-size: 13.3px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.16px;
    color: #13343b;
    margin-bottom: 8px;
}

.footer-column a {
    display: block;
    color: #13343b;
    text-decoration: none;
    font-size: 11px;
    font-weight: 300;
    line-height: 16.5px;
    margin-bottom: 4px;
}

.footer-branding {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    border-top: 1px solid #c9c8bb;
}

.footer-logo {
    width: 35px;
    height: 40px;
    background-color: #13343b;
    border-radius: 4px;
}

.footer-copyright {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    color: #13343b;
}

.app-store-badges {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.app-badge {
    width: 150px;
    height: 50px;
    background-color: #000;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .footer-nav {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
