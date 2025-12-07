<template>
    <div class="no-results">
        <h3>未找到相关文章</h3>
        <p>请尝试其他搜索关键词或标签</p>
    </div>
</template>

<script>
export default {
    name: 'NoResults'
}
</script>

<style scoped>
.no-results {
    text-align: center;
    padding: 60px 20px;
    color: #8f8f8f;
    font-size: 16px;
}

.no-results h3 {
    font-size: 20px;
    color: #13343b;
    margin-bottom: 8px;
}
</style>
