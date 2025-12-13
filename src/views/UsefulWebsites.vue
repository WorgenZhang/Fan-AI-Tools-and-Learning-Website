<template>
    <div class="useful-websites">
        <Header />
        <main class="container">
            <div class="websites-grid">
                <WebsiteCard 
                    v-for="website in usefulWebsites" 
                    :key="website.id"
                    :website="website"
                />
            </div>
        </main>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import Header from '../components/Header.vue'
import WebsiteCard from '../components/WebsiteCard.vue'
import { usefulWebsites } from '../data/usefulWebsites.js'

export default {
    name: 'UsefulWebsites',
    components: {
        Header,
        WebsiteCard
    },
    setup() {
        // 设置来源页面标识（虽然这个页面不需要跳转到文章详情，但保持一致性）
        onMounted(() => {
            sessionStorage.setItem('articleSource', 'usefulWebsites')
        })

        return {
            usefulWebsites
        }
    }
}
</script>

<style scoped>
.useful-websites {
    min-height: 100vh;
    background-color: #fbfaf4;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 74px 32px 48px 32px;
}

.websites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 32px;
}

@media (max-width: 768px) {
    .websites-grid {
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
        gap: 24px;
    }
    
    .container {
        padding: 74px 16px 48px 16px;
    }
}
</style>

