<template>
    <div class="home">
        <Header />
        <main class="container">
            <FeaturedArticle :featured-data="featuredData" />
            <SearchSection 
                :search-query="searchQuery"
                :active-tags="activeTags"
                @update:search-query="updateSearchQuery"
                @toggle-tag="toggleTag"
                @remove-tag="removeTag"
                @clear-search="clearSearch"
            />
            <BlogGrid 
                :posts="filteredPosts"
                :active-tags="activeTags"
                @toggle-tag="toggleTag"
            />
            <NoResults v-if="filteredPosts.length === 0" />
        </main>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import Header from '../components/Header.vue'
import FeaturedArticle from '../components/FeaturedArticle.vue'
import SearchSection from '../components/SearchSection.vue'
import BlogGrid from '../components/BlogGrid.vue'
import NoResults from '../components/NoResults.vue'
import { learningResourcesPosts } from '../data/learningResources.js'
import { learningResourceFeaturedData } from '../components/FeaturedArticle.vue'

export default {
    name: 'LearningResources',
    components: {
        Header,
        FeaturedArticle,
        SearchSection,
        BlogGrid,
        NoResults
    },
    setup() {
        // 设置来源页面标识
        onMounted(() => {
            sessionStorage.setItem('articleSource', 'learningResources')
        })
        const searchQuery = ref('')
        const activeTags = ref([])
        const featuredData = ref(learningResourceFeaturedData)

        const filteredPosts = computed(() => {
            return learningResourcesPosts.filter(post => {
                // 标签过滤
                if (activeTags.value.length > 0) {
                    const postTags = post.tags.map(t => t.toLowerCase())
                    const hasActiveTag = activeTags.value.some(activeTag => 
                        postTags.includes(activeTag.toLowerCase())
                    )
                    if (!hasActiveTag) return false
                }

                // 搜索过滤
                if (searchQuery.value) {
                    const query = searchQuery.value.toLowerCase()
                    const titleMatch = post.title.toLowerCase().includes(query)
                    const tagMatch = post.tags.some(tag => 
                        tag.toLowerCase().includes(query)
                    )
                    if (!titleMatch && !tagMatch) return false
                }

                return true
            })
        })

        const updateSearchQuery = (query) => {
            searchQuery.value = query
        }

        const toggleTag = (tag) => {
            const index = activeTags.value.indexOf(tag)
            if (index > -1) {
                activeTags.value.splice(index, 1)
            } else {
                activeTags.value.push(tag)
            }
        }

        const removeTag = (tag) => {
            const index = activeTags.value.indexOf(tag)
            if (index > -1) {
                activeTags.value.splice(index, 1)
            }
        }

        const clearSearch = () => {
            searchQuery.value = ''
        }

        return {
            searchQuery,
            activeTags,
            filteredPosts,
            featuredData,
            updateSearchQuery,
            toggleTag,
            removeTag,
            clearSearch
        }
    }
}
</script>

<style scoped>
.home {
    min-height: 100vh;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 32px;
}
</style>

