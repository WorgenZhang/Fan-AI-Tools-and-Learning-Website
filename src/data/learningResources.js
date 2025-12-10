// 获取正确的资源路径（适配 GitHub Pages base 路径）
function getAssetPath(path) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path
    }
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    // 在数据文件中，我们需要在运行时获取 base URL
    // 这里返回一个函数，让组件调用时获取正确的路径
    return path
}

// 获取文章详细内容的辅助函数
// 注意：图片路径在组件中使用 getAssetPath 处理，这里保持原样
export const getArticleDetail = (id) => {
    return articleDetails[id] || articleDetails['featured']
}

// 文章详细内容
const articleDetails = {
    'featured': {
        id: 'featured',
        title: 'Learning Resources Featured Article',
        author: '不讲道理的瞬间',
        date: 'Dec 7, 2025',
        image: '/general.png',
        videoUrl: '',
        videoCover: '',
        content: [
            {
                title: 'Introduction',
                paragraphs: [
                    'This is a placeholder for the featured learning resource article. You can add your content here.'
                ]
            },
        ]
    },
}

// 处理博客列表中的图片路径
function processBlogPost(post) {
    if (!post.coverImage) return post
    const processed = { ...post }
    if (processed.coverImage && !processed.coverImage.startsWith('http')) {
        // 在组件中处理路径，这里保持原样
    }
    return processed
}

// 学习资源文章列表（用于Learning Resources页面显示）
export const learningResourcesPosts = [
    // 这里可以添加你的学习资源文章
    // 示例格式：
    // { 
    //     id: 'lr1',
    //     title: "学习资源标题", 
    //     date: "Dec 1, 2025", 
    //     tags: ["Tag1", "Tag2"],
    //     coverImage: '/image.png'
    // },
]
