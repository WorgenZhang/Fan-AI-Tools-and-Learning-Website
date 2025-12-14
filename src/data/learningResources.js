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
        title: '推荐一位小红书AI方面宝藏Up主张咋啦',
        author: '不讲道理的瞬间',
        date: 'Nov 2, 2025',
        image: '/张咋啦.webp',
        videoUrl: 'https://www.xiaohongshu.com/explore/690734700000000007037ac0?xsec_token=ABcbad2SZsHHv6xklECjTh0s2yLUXqq3W1nJkznR3GTl0=&xsec_source=pc_user',
        videoCover: '/张咋啦-Video.webp',
        content: [
            {
                title: 'Introduction',
                paragraphs: [
                    '1. 如何高效做视频',
                    '2. 所有AI学习资源做成了一个网站',
                    '3. 如何把X变成AI学习平台',
                    '4. 发布第一个AI产品'
                ]
            },
        ]
    },
    '1': {
        id: '1',
        title: '分享我最喜欢的三个小宇宙AI播客频道',
        author: '不讲道理的瞬间',
        date: 'Oct 14, 2025',
        image: '/三个小宇宙播客.webp',
        videoUrl: 'https://www.xiaohongshu.com/explore/68ee4660000000000700d807?xsec_token=AB-WPBvwiXQ4IODbMlWQTGDOTLp9aZ0VfHtCrB_GeBqFk=&xsec_source=pc_user',
        videoCover: '/三个小宇宙播客-Video.webp',
        content: [
            {
                title: 'Introduction',
                paragraphs: [
                    '1. 张小珺商业访谈录',
                    '2. 十字路口Crossing',
                    '3. WhyNotTV Podcast',
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
    { 
        id: '1',
        title: "分享我最喜欢的三个小宇宙AI播客频道", 
        date: "Oct 14, 2025", 
        tags: ["小宇宙播客", "宝藏频道"],
        coverImage: '/三个小宇宙播客.webp'
    },
]
