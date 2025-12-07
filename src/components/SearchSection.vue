<template>
    <section class="search-section">
        <div class="search-container">
            <div class="search-icon"></div>
            <input 
                type="text" 
                class="search-input" 
                placeholder="搜索文章标题或标签..."
                :value="searchQuery"
                @input="handleSearch"
            >
        </div>
        <div class="active-filters" v-if="(activeTags && activeTags.size > 0) || searchQuery">
            <span class="active-filters-label" v-if="activeTags && activeTags.size > 0">活动筛选:</span>
            <span 
                v-for="tag in (activeTags ? Array.from(activeTags) : [])" 
                :key="tag"
                class="filter-tag"
            >
                {{ tag }}
                <span class="filter-tag-remove" @click="handleRemoveTag(tag)">×</span>
            </span>
            <span v-if="searchQuery" class="filter-tag">
                搜索: "{{ searchQuery }}"
                <span class="filter-tag-remove" @click="handleClearSearch">×</span>
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SearchSection',
    props: {
        searchQuery: {
            type: String,
            default: ''
        },
        activeTags: {
            type: [Set, Object],
            default: () => new Set()
        }
    },
    emits: ['update:searchQuery', 'toggle-tag', 'remove-tag', 'clear-search'],
    methods: {
        handleSearch(e) {
            this.$emit('update:searchQuery', e.target.value.trim())
        },
        handleRemoveTag(tag) {
            this.$emit('remove-tag', tag)
        },
        handleClearSearch() {
            this.$emit('clear-search')
        }
    }
}
</script>

<style scoped>
.search-section {
    margin-top: 32px;
    margin-bottom: 24px;
}

.search-container {
    position: relative;
    max-width: 600px;
}

.search-input {
    width: 100%;
    padding: 12px 16px 12px 44px;
    border: 1px solid #c9c8bb;
    border-radius: 24px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    color: #13343b;
    background-color: #ffffff;
    outline: none;
    transition: border-color 0.2s ease;
}

.search-input:focus {
    border-color: #20808d;
}

.search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    pointer-events: none;
}

.search-icon::before {
    content: '🔍';
    font-size: 18px;
}

.active-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
    align-items: center;
}

.active-filters-label {
    font-size: 13px;
    color: #8f8f8f;
    font-weight: 400;
}

.filter-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background-color: #20808d;
    color: #ffffff;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 400;
}

.filter-tag-remove {
    cursor: pointer;
    font-weight: 700;
    line-height: 1;
}

.filter-tag-remove:hover {
    opacity: 0.8;
}
</style>
