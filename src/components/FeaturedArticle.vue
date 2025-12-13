<template>
    <section class="featured-section">
        <div class="featured-card">
            <router-link :to="`/article/${featuredData.articleId}`" class="featured-image-link">
                <div class="featured-image" ref="imageContainer">
                    <img 
                        :src="getAssetPath(featuredData.image)" 
                        alt="Featured Article"
                        @load="onImageLoad"
                        ref="imageElement"
                    />
                </div>
            </router-link>
            <div class="featured-content">
                <router-link :to="`/article/${featuredData.articleId}`" class="featured-title-link">
                    <h2 class="featured-title" v-html="formatTitle(featuredData.title)"></h2>
                </router-link>
                <p class="featured-description"></p>
                <router-link :to="`/article/${featuredData.articleId}`" class="read-more-btn">READ MORE</router-link>
                <div class="featured-tags">
                    <span v-for="tag in featuredData.tags" :key="tag" class="featured-tag">{{ tag }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getAssetPath } from '../utils/path.js'

// Blog Post 页面的 Featured Article 数据
export const blogPostFeaturedData = {
    id: 'featured',
    title: 'Figma+Cursor生成个人网页<br>并使用Github Pages部署<br>全流程纯干货分享',
    image: '/Figma-Cursor-个人网页.png',
    tags: ['AI Methodology', 'Figma', 'Cursor', 'MCP', 'Github Pages'],
    articleId: 'featured'
}

// Learning Resources 页面的 Featured Article 数据
export const learningResourceFeaturedData = {
    id: 'featured',
    title: 'Learning Resources Featured Article',
    image: '/general.png',
    tags: ['Learning', 'Resources'],
    articleId: 'featured'
}

export default {
    name: 'FeaturedArticle',
    props: {
        featuredData: {
            type: Object,
            required: true,
            default: () => blogPostFeaturedData
        }
    },
    data() {
        return {
            imageLoaded: false
        }
    },
    mounted() {
        // 处理图片已缓存的情况
        this.$nextTick(() => {
            const img = this.$refs.imageElement
            if (img && img.complete && img.naturalHeight > 0) {
                // 延迟一下确保容器宽度已计算
                setTimeout(() => {
                    this.onImageLoad({ target: img })
                }, 0)
            }
        })
        
        // 监听窗口大小改变
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        getAssetPath,
        formatTitle(title) {
            // 如果title包含<br>标签，直接返回，否则按原样返回
            return title
        },
        calculateContainerHeight() {
            const img = this.$refs.imageElement
            const container = this.$refs.imageContainer
            if (img && container) {
                // 获取图片的自然尺寸
                const naturalWidth = img.naturalWidth
                const naturalHeight = img.naturalHeight
                
                if (naturalWidth > 0 && naturalHeight > 0) {
                    // 获取容器的实际宽度
                    const containerWidth = container.offsetWidth || 1021
                    
                    // 根据图片比例计算容器高度
                    const aspectRatio = naturalHeight / naturalWidth
                    const containerHeight = containerWidth * aspectRatio
                    
                    // 设置容器高度，确保精确匹配
                    container.style.height = `${containerHeight}px`
                    this.imageLoaded = true
                }
            }
        },
        onImageLoad(event) {
            // 使用 requestAnimationFrame 确保在下一帧计算，此时容器宽度已确定
            requestAnimationFrame(() => {
                this.calculateContainerHeight()
            })
        },
        handleResize() {
            if (this.imageLoaded) {
                // 窗口大小改变时重新计算
                this.calculateContainerHeight()
            }
        }
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
    display: flex;
    width: 1021px;
    flex-shrink: 0;
    text-decoration: none;
    cursor: pointer;
    align-self: flex-start;
}

.featured-image {
    width: 100%;
    min-height: 300px;
    border-radius: 8px 0 0 8px;
    overflow: hidden;
    background-color: #f0f0f0;
    position: relative;
}

.featured-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    object-position: center;
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
        align-self: flex-start;
    }

    .featured-image {
        width: 100%;
        min-height: 300px;
        border-radius: 8px 8px 0 0;
    }
    
    .featured-image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
}
</style>
