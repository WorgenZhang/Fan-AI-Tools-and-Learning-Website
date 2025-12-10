<template>
    <div class="article-detail">
        <div class="detail-container">
            <!-- 返回按钮 -->
            <button @click="goBack" class="back-button">
                ← Back
            </button>

            <!-- 封面图片（横向卡片布局，参考 Featured Article） -->
            <div class="detail-cover" v-if="article.image">
                <div class="cover-image">
                    <img :src="getAssetPath(article.image)" :alt="article.title" />
                </div>
            </div>

            <!-- Written By + Published on + 小红书Icon -->
            <div class="article-meta">
                <div class="meta-left">
                    <span class="meta-item">
                        <span class="meta-label">Written by</span>
                        <span class="meta-value">{{ article.author }}</span>
                    </span>
                    <span class="meta-item">
                        <span class="meta-label">Published on</span>
                        <span class="meta-value">{{ article.date }}</span>
                    </span>
                </div>
                <div class="meta-right">
                    <a :href="article.videoUrl" target="_blank" class="xiaohongshu-icon" v-if="article.videoUrl" title="查看原视频">
                        <img :src="getAssetPath('/icon.jpg')" alt="小红书" />
                    </a>
                </div>
            </div>

            <!-- 横线分隔 -->
            <div class="divider"></div>

            <!-- 主标题 -->
            <h1 class="detail-title">{{ article.title }}</h1>

            <!-- 视频播放区域 -->
            <div class="video-section" v-if="article.videoUrl">
                <div class="video-container" :style="{ maxHeight: videoHeight + 'px' }" @click="openVideo">
                    <img v-if="article.videoCover" :src="getAssetPath(article.videoCover)" alt="视频封面" class="video-cover" />
                    <div class="video-overlay">
                        <div class="play-button-large">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="rgba(255, 36, 66, 0.9)"/>
                                <path d="M10 8l6 4-6 4V8z" fill="#ffffff"/>
                            </svg>
                        </div>
                        <p class="video-hint">点击播放视频</p>
                        <p class="video-source">来自小红书</p>
                    </div>
                    <div class="resize-handle" @mousedown="startResize" @click.stop></div>
                </div>
            </div>

            <!-- 文章内容 -->
            <div class="detail-content">
                <div class="content-section" v-for="(section, index) in article.content" :key="index">
                    <h2 v-if="section.title" class="content-title">{{ section.title }}</h2>
                    <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex" class="content-paragraph">
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { getArticleDetail as getBlogArticleDetail } from '../data/blogPosts.js'
import { getArticleDetail as getLearningResourceDetail } from '../data/learningResources.js'
import { getAssetPath } from '../utils/path.js'

export default {
    name: 'ArticleDetail',
    setup() {
        const route = useRoute()
        const router = useRouter()

        // 根据路由参数获取文章数据
        const article = computed(() => {
            const articleId = route.params.id || 'featured'
            // 从 sessionStorage 获取来源页面标识，如果没有则默认使用 blogPosts
            const articleSource = sessionStorage.getItem('articleSource') || 'blogPosts'
            const isFromLearningResources = articleSource === 'learningResources'
            
            // 如果是 featured 文章，根据来源页面决定使用哪个数据源
            if (articleId === 'featured') {
                if (isFromLearningResources) {
                    return getLearningResourceDetail('featured')
                } else {
                    return getBlogArticleDetail('featured')
                }
            }
            
            // 对于其他文章，先尝试从 blogPosts 获取（主要数据源）
            let articleData = getBlogArticleDetail(articleId)
            if (!articleData) {
                // 如果 blogPosts 中没有，再尝试从 learningResources 获取
                articleData = getLearningResourceDetail(articleId)
            }
            
            // 如果都没有找到，根据来源页面返回对应的 featured 文章
            if (!articleData) {
                if (isFromLearningResources) {
                    return getLearningResourceDetail('featured')
                } else {
                    return getBlogArticleDetail('featured')
                }
            }
            
            return articleData
        })

        const goBack = () => {
            // 根据来源页面决定返回哪里
            const articleSource = sessionStorage.getItem('articleSource') || 'blogPosts'
            if (articleSource === 'learningResources') {
                router.push('/learning-resources')
            } else {
                router.push('/')
            }
        }

        // 打开视频链接
        const openVideo = () => {
            if (article.value.videoUrl) {
                window.open(article.value.videoUrl, '_blank')
            }
        }

        // 视频高度控制
        const videoHeight = ref(600) // 默认高度
        const isResizing = ref(false)
        const startY = ref(0)
        const startHeight = ref(0)

        // 调整高度
        const adjustHeight = (delta) => {
            videoHeight.value = Math.max(300, Math.min(1200, videoHeight.value + delta))
        }

        // 重置高度
        const resetHeight = () => {
            videoHeight.value = 600
        }

        // 开始调整大小
        const startResize = (e) => {
            e.preventDefault()
            e.stopPropagation()
            isResizing.value = true
            startY.value = e.clientY
            startHeight.value = videoHeight.value
            
            document.addEventListener('mousemove', handleResize)
            document.addEventListener('mouseup', stopResize)
        }

        // 处理调整大小
        const handleResize = (e) => {
            if (!isResizing.value) return
            const deltaY = e.clientY - startY.value
            videoHeight.value = Math.max(300, Math.min(1200, startHeight.value + deltaY))
        }

        // 停止调整大小
        const stopResize = () => {
            isResizing.value = false
            document.removeEventListener('mousemove', handleResize)
            document.removeEventListener('mouseup', stopResize)
        }

        return {
            article,
            goBack,
            openVideo,
            videoHeight,
            adjustHeight,
            resetHeight,
            startResize,
            getAssetPath
        }
    }
}
</script>

<style scoped>
.article-detail {
    min-height: 100vh;
    background-color: #ffffff;
}

.detail-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 32px;
}

.back-button {
    background: none;
    border: none;
    color: #13343b;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    padding: 8px 0;
    margin-bottom: 32px;
    transition: opacity 0.2s ease;
}

.back-button:hover {
    opacity: 0.7;
}

/* 封面图片（横向卡片布局，参考 Featured Article） */
.detail-cover {
    width: 100%;
    margin-bottom: 24px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f0f0f0;
}

.cover-image {
    width: 100%;
    height: 0;
    padding-bottom: 33.86%; /* 466 / 1376 * 100% = 33.86%，固定比例 */
    position: relative;
    overflow: hidden;
    background-color: #f0f0f0;
}

.cover-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* 使用 cover 确保图片填充整个容器，保持统一尺寸 */
    display: block;
}

/* Written By + Published on + 小红书Icon */
.article-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
}

.meta-left {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.meta-label {
    font-size: 14px;
    font-weight: 400;
    color: #8f8f8f;
}

.meta-value {
    font-size: 14px;
    font-weight: 400;
    color: #13343b;
}

.meta-right {
    display: flex;
    align-items: center;
}

.xiaohongshu-icon {
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 6px;
    border: 1px solid #c9c8bb;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    overflow: hidden;
    background-color: #ffffff;
    padding: 0;
}

.xiaohongshu-icon:hover {
    border-color: #FF2442;
    transform: scale(1.05);
}

.xiaohongshu-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin: 0;
    padding: 0;
}

/* 横线分隔 */
.divider {
    width: 100%;
    height: 1px;
    background-color: #c9c8bb;
    margin-bottom: 32px;
}

.detail-title {
    font-size: 35px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.5px;
    color: #13343b;
    margin-bottom: 32px;
}

/* 视频播放区域 */
.video-section {
    width: 100%;
    margin-bottom: 48px;
}

.video-container {
    width: 100%;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    max-height: 600px;
    transition: max-height 0.3s ease;
}

.video-cover {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: top;
    display: block;
    position: relative;
    z-index: 0;
}

.video-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.video-overlay {
    text-align: center;
    color: #ffffff;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.video-container:hover .video-overlay {
    background: rgba(0, 0, 0, 0.2);
}

.play-button-large {
    display: inline-block;
    margin-bottom: 20px;
    transition: transform 0.2s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.video-container:hover .play-button-large {
    transform: scale(1.1);
}

.video-hint {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    margin: 0 0 8px 0;
}

.video-source {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
}

.resize-handle {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    cursor: ns-resize;
    z-index: 10;
    transition: background 0.2s ease;
}

.resize-handle:hover {
    background: rgba(255, 36, 66, 0.6);
}

.video-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
    padding: 12px;
    background: #fbfaf4;
    border-radius: 8px;
}

.height-btn {
    width: 32px;
    height: 32px;
    border: 1px solid #c9c8bb;
    background: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    color: #13343b;
    transition: all 0.2s ease;
}

.height-btn:hover {
    background: #f0f0f0;
    border-color: #8f8f8f;
}

.height-indicator {
    font-size: 14px;
    color: #13343b;
    min-width: 60px;
    text-align: center;
}

.reset-btn {
    padding: 6px 16px;
    border: 1px solid #c9c8bb;
    background: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    color: #13343b;
    transition: all 0.2s ease;
}

.reset-btn:hover {
    background: #f0f0f0;
    border-color: #8f8f8f;
}

.detail-content {
    max-width: 800px;
    margin: 0;
}

.content-section {
    margin-bottom: 48px;
}

.content-title {
    font-size: 25px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.3px;
    color: #13343b;
    margin-bottom: 5px;
}

.content-paragraph {
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.18px;
    color: rgba(19, 51, 59, 0.9);
    margin-bottom: 0px;
}

@media (max-width: 768px) {
    .detail-container {
        padding: 24px 16px;
    }

    .cover-image {
        aspect-ratio: 16 / 9; /* 移动端使用更常见的比例 */
    }

    .article-meta {
        flex-direction: column;
        align-items: flex-start;
    }

    .meta-left {
        flex-direction: column;
        gap: 12px;
    }

    .detail-title {
        font-size: 32px;
        line-height: 40px;
    }

    .content-title {
        font-size: 24px;
        line-height: 32px;
    }

    .content-paragraph {
        font-size: 16px;
        line-height: 28px;
    }
}
</style>

