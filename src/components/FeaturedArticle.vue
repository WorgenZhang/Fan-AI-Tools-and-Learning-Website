<template>
    <section class="featured-section">
        <div class="featured-card">
            <router-link to="/article/featured" class="featured-image-link">
                <div class="featured-image">
                    <img :src="getAssetPath('/黑白水墨画.png')" alt="Featured Article" />
                </div>
            </router-link>
            <div class="featured-content">
                <router-link to="/article/featured" class="featured-title-link">
                    <h2 class="featured-title">我结合AI工具<br>阅读论文的<br>四个阶段</h2>
                </router-link>
                <p class="featured-description">可视化理解->多模态理解->追问理解->整篇论文精读</p>
                <router-link to="/article/featured" class="read-more-btn">READ MORE</router-link>
                <div class="featured-tags">
                    <span class="featured-tag">AI Methodology</span>
                    <span class="featured-tag">Gemini3.0</span>
                    <span class="featured-tag">NotebookLM</span>
                    <span class="featured-tag">ReadPaper</span>
                    <span class="featured-tag">Paper</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getAssetPath } from '../utils/path.js'

export default {
    name: 'FeaturedArticle',
    methods: {
        getAssetPath
    }
}
</script>

<style scoped>
.featured-section {
    margin-top: 74px;
    margin-bottom: 32px;
}

.featured-card {
    background-color: #ffffff;
    border: 1px solid #c9c8bb;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
    max-width: 1376px;
    align-items: stretch;
}

.featured-image-link {
    display: block;
    width: 1021px;
    flex-shrink: 0;
    text-decoration: none;
    cursor: pointer;
}

.featured-image {
    width: 100%;
    border-radius: 8px 0 0 8px;
    overflow: hidden;
    background-color: #f0f0f0;
    display: flex;
    align-items: flex-start;
}

.featured-image img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}

.featured-content {
    padding: 174px 40px 40px 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 345px;
}

.featured-title-link {
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;
}

.featured-title {
    font-size: 35.4px;
    font-weight: 400;
    line-height: 40.7px;
    letter-spacing: -0.37px;
    color: #13343b;
    margin-bottom: 20px;
}

.featured-description {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.18px;
    color: rgba(19, 51, 59, 0.8);
    margin-bottom: 24px;
}

.read-more-btn {
    background-color: #fbfaf4;
    border: 1px solid #8f8f8f;
    border-radius: 24px;
    padding: 3px 15px;
    color: #13343b;
    text-decoration: none;
    font-size: 14.9px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.16px;
    display: inline-block;
    width: fit-content;
    margin-bottom: 16px;
}

.featured-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
}

.featured-tag {
    display: inline-block;
    padding: 4px 10px;
    background-color: rgba(19, 52, 59, 0.1);
    color: #13343b;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
}

@media (max-width: 768px) {
    .featured-card {
        flex-direction: column;
    }

    .featured-image-link {
        width: 100%;
    }

    .featured-image {
        width: 100%;
        border-radius: 8px 8px 0 0;
    }
    
    .featured-image img {
        width: 100%;
        height: auto;
    }
}
</style>
