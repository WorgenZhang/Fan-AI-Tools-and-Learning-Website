<template>
    <header class="header">
        <div class="header-container">
            <h1 class="site-title">Fan的AI工具和学习资源库</h1>
            <nav class="nav-links">
                <a href="#" class="nav-link">Blog</a>
                <div class="nav-divider"></div>
                <a href="#" class="nav-link">Research</a>
                <div class="nav-divider"></div>
                <a href="https://www.xiaohongshu.com/user/profile/5cf652380000000018035290" target="_blank" class="cta-button">关注我的小红书</a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.header {
    background-color: #fbfaf4;
    padding: 21px 0;
    border-bottom: 1px solid #e5e5e5;
}

.header-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.site-title {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    color: #13343b;
    margin: 0;
    letter-spacing: -0.3px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto;
}

.nav-link {
    color: #13343b;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.nav-divider {
    width: 1px;
    height: 8px;
    background-color: #e5e5e5;
}

.cta-button {
    background-color: #20808d;
    color: #ffffff;
    padding: 9px 24px;
    border-radius: 30px;
    text-decoration: none;
    font-size: 13.9px;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>
