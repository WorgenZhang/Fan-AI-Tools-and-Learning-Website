<template>
    <section class="blog-grid">
        <div 
            v-for="post in posts" 
            :key="post.id || post.title"
            class="blog-card"
        >
            <router-link :to="`/article/${post.id || 'featured'}`" class="blog-image-link">
                <div class="blog-image" :class="{ 'has-image': post.coverImage }">
                    <img v-if="post.coverImage" :src="getAssetPath(post.coverImage)" :alt="post.title" />
                </div>
            </router-link>
            <div class="blog-post">
                <router-link :to="`/article/${post.id || 'featured'}`" class="blog-title-link">
                    <h3 class="blog-title">{{ post.title }}</h3>
                </router-link>
                <p class="blog-date">{{ post.date }}</p>
                <div class="blog-tags">
                    <span 
                        v-for="tag in post.tags" 
                        :key="tag"
                        class="blog-tag"
                        :class="{ active: activeTags && activeTags.includes(tag) }"
                        @click.stop.prevent="handleTagClick(tag)"
                    >
                        {{ tag }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getAssetPath } from '../utils/path.js'

export default {
    name: 'BlogGrid',
    props: {
        posts: {
            type: Array,
            required: true
        },
        activeTags: {
            type: Array,
            default: () => []
        }
    },
    emits: ['toggle-tag'],
    methods: {
        handleTagClick(tag) {
            this.$emit('toggle-tag', tag)
        },
        getAssetPath
    }
}
</script>

<style scoped>
.blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 24px;
    margin-bottom: 48px;
}

.blog-card {
    background-color: #fbfaf4;
    border-radius: 8px;
    overflow: hidden;
    color: inherit;
    display: block;
    transition: transform 0.2s ease;
}

.blog-card:hover {
    transform: translateY(-2px);
}

.blog-image-link {
    display: block;
    text-decoration: none;
    cursor: pointer;
}

.blog-title-link {
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;
}

.blog-image {
    width: 100%;
    aspect-ratio: 1376 / 900; /* 固定比例，与详情页封面图保持一致 */
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.blog-image.has-image {
    background: transparent;
}

.blog-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover; /* 使用 cover 确保图片填充整个容器，保持统一尺寸 */
}

.blog-post {
    padding: 0;
}

.blog-title {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.54px;
    color: #091717;
    margin-bottom: 8px;
}

.blog-date {
    font-size: 13.7px;
    font-weight: 400;
    line-height: 25.2px;
    color: #8f8f8f;
    margin-bottom: 12px;
}

.blog-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
}

.blog-tag {
    display: inline-block;
    padding: 4px 10px;
    background-color: rgba(19, 52, 59, 0.1);
    color: #13343b;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.blog-tag:hover {
    background-color: rgba(19, 52, 59, 0.2);
    border-color: #13343b;
}

.blog-tag.active {
    background-color: #20808d;
    color: #ffffff;
    border-color: #20808d;
}

@media (max-width: 1200px) {
    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .blog-grid {
        grid-template-columns: 1fr;
    }
}
</style>
