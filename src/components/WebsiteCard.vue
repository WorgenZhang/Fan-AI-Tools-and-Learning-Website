<template>
    <a 
        :href="website.url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="website-card"
    >
        <div class="website-image">
            <img 
                v-if="website.coverImage" 
                :src="getAssetPath(website.coverImage)" 
                :alt="website.title" 
            />
            <div v-else class="website-placeholder">
                <span>{{ website.title.charAt(0) }}</span>
            </div>
        </div>
        <div class="website-info">
            <h3 class="website-title">{{ website.title }}</h3>
            <p class="website-description">{{ website.description }}</p>
            <div class="website-tags" v-if="website.tags && website.tags.length > 0">
                <span 
                    v-for="tag in website.tags" 
                    :key="tag"
                    class="website-tag"
                    :class="{ active: activeTags && activeTags.includes(tag) }"
                    @click.stop.prevent="handleTagClick(tag)"
                >
                    {{ tag }}
                </span>
            </div>
        </div>
    </a>
</template>

<script>
import { getAssetPath } from '../utils/path.js'

export default {
    name: 'WebsiteCard',
    props: {
        website: {
            type: Object,
            required: true
        },
        activeTags: {
            type: Array,
            default: () => []
        }
    },
    emits: ['toggle-tag'],
    methods: {
        getAssetPath,
        handleTagClick(tag) {
            this.$emit('toggle-tag', tag)
        }
    }
}
</script>

<style scoped>
.website-card {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #c9c8bb;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    height: 100%;
}

.website-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.website-image {
    width: 100%;
    aspect-ratio: 1;
    background-color: #f0f0f0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    line-height: 0;
}

.website-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.website-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    font-size: 48px;
    font-weight: 700;
}

.website-info {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.website-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #13343b;
    margin: 0 0 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.website-description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #8f8f8f;
    margin: 0 0 12px 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.website-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: auto;
}

.website-tag {
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

.website-tag:hover {
    background-color: rgba(19, 52, 59, 0.2);
    border-color: #13343b;
}

.website-tag.active {
    background-color: #20808d;
    color: #ffffff;
    border-color: #20808d;
}
</style>


