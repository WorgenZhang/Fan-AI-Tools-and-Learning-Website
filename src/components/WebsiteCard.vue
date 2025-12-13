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
        }
    },
    methods: {
        getAssetPath
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
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

