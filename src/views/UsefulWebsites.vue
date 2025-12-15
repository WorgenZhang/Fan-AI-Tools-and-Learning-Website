<template>
    <div class="useful-websites">
        <Header />
        <main class="container">
            <SearchSection 
                :search-query="searchQuery"
                :active-tags="activeTags"
                @update:search-query="updateSearchQuery"
                @toggle-tag="toggleTag"
                @remove-tag="removeTag"
                @clear-search="clearSearch"
            />
            <div class="websites-grid">
                <WebsiteCard 
                    v-for="website in filteredWebsites" 
                    :key="website.id"
                    :website="website"
                    :active-tags="activeTags"
                    @toggle-tag="toggleTag"
                />
            </div>
            <NoResults v-if="filteredWebsites.length === 0" />
        </main>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import Header from '../components/Header.vue'
import SearchSection from '../components/SearchSection.vue'
import WebsiteCard from '../components/WebsiteCard.vue'
import NoResults from '../components/NoResults.vue'
import { usefulWebsites } from '../data/usefulWebsites.js'

export default {
    name: 'UsefulWebsites',
    components: {
        Header,
        SearchSection,
        WebsiteCard,
        NoResults
    },
    setup() {
        // 设置来源页面标识（虽然这个页面不需要跳转到文章详情，但保持一致性）
        onMounted(() => {
            sessionStorage.setItem('articleSource', 'usefulWebsites')
        })

        const searchQuery = ref('')
        const activeTags = ref([])

        const filteredWebsites = computed(() => {
            return usefulWebsites.filter(website => {
                // 标签过滤
                if (activeTags.value.length > 0) {
                    const websiteTags = website.tags ? website.tags.map(t => t.toLowerCase()) : []
                    const hasActiveTag = activeTags.value.some(activeTag => 
                        websiteTags.includes(activeTag.toLowerCase())
                    )
                    if (!hasActiveTag) return false
                }

                // 搜索过滤（支持标题和标签）
                if (searchQuery.value) {
                    const query = searchQuery.value.toLowerCase()
                    const titleMatch = website.title.toLowerCase().includes(query)
                    const tagMatch = website.tags ? website.tags.some(tag => 
                        tag.toLowerCase().includes(query)
                    ) : false
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
            filteredWebsites,
            updateSearchQuery,
            toggleTag,
            removeTag,
            clearSearch
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
    margin-top: 24px;
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


