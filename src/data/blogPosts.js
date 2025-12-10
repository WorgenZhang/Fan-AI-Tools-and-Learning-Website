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
        title: 'Figma+Cursor生成个人网页并使用Github Pages部署全流程纯干货分享',
        author: '不讲道理的瞬间',
        date: 'Dec 7, 2025',
        image: '/Figma-Cursor-个人网页.png',
        videoUrl: 'https://www.xiaohongshu.com/explore/693580de000000001e002a92?xsec_token=ABSJg4X_EWdCnih4dlvPBFEtQn4yS-EV5AgQBv4re9v70=&xsec_source=pc_user',
        videoCover: '/Figma-Cursor-个人网页-Video.png',
        content: [
            {
                title: '1. 产生想法',
                paragraphs: [
                    '把自己内化的或者认为好用的AI工具以可视化方式记录下来，随时更新'
                ]
            },
            {
                title: '2. 寻找好的前端交互模板或范例',
                paragraphs: [
                    'best blog websites examples -> https://www.sitebuilderreport.com/inspiration/blog-examples',
                    'https://www.perplexity.ai/hub'
                ]
            },
            {
                title: '3. 将Html网页通过插件导入到Figma',
                paragraphs: [
                ]
            },
            {
                title: '4. Cursor中配置Talk to Figma MCP',
                paragraphs: [
                    'git clone repo cursor-talk-to-figma-mcp',
                    'cursor-talk-to-figma-mcp目录中install bun & 执行bun socket',
                    'Cursor中配置MCP Server',
                    'Figma App中安装Cursor MCP Plugin'
                ]
            },
            {
                title: '5. Cursor构建html文件，可以在本地浏览器运行并不断修改调试',
                paragraphs: [
                ]
            },
            {
                title: '6. 根据Html构建工程文件',
                paragraphs: [
                    'Prompt: 根据index.html这个页面，构建一个工程文件，基于VUE，一定要保持和这个页面的设计一模一样，可以在本地浏览器运行',
                    '安装依赖 npm install',
                    '启动开发服务器 npm run dev'
                ]
            },
            {
                title: '7. 利用Cursor完成网页制作',
                paragraphs: [
                    '将个人内容填充进网页中',
                    '符合自己审美Taste',
                    'Patience is All Your Need'
                ]
            },
            {
                title: '8. 将代码上传自己的Github Repo仓库',
                paragraphs: [
                    'https://jcnxsec3j5sb.feishu.cn/wiki/HXWCwdm3aiqJlXkkfaicrDeKnMe?from=from_copylink'
                ]
            },
            {
                title: '9. 基于Github Repo部署自己的网站',
                paragraphs: [
                    'Github Pages (大陆地区不友好)',
                    'Tencent EdgeOne (海外+大陆地区 但需要实名认证+自定义域名)'
                ]
            },
        ]
    },
'12': {
        id: '12',
        title: '我结合AI工具阅读论文的四个阶段',
        author: '不讲道理的瞬间',
        date: 'Dec 1, 2025',
        image: '/黑白水墨画.png',
        videoUrl: 'https://www.xiaohongshu.com/explore/692bedbb000000001d03bd18?xsec_token=ABKKn7k_AoJIVFMKFqyVr6YeaoBlDdp6xpiLsqUClfJ3k%3D&xsec_source=pc_user',
        videoCover: '/AI工具阅读论文-Video.png',
        content: [
            {
                title: '阶段一：可视化理解',
                paragraphs: [
                    '1. Google Gemini 3.0 Pro(快速总结) + Gemini Canvas(高度可视化概要)',
                    '2. NotebookLM - 信息图、演示文稿'
                ]
            },
            {
                title: '阶段二：多模态理解',
                paragraphs: [
                    '1. NotebookLM - 音频、视频',
                    '2. B站 - 视频'
                ]
            },
            {
                title: '阶段三：追问理解',
                paragraphs: [
                    '1. 学习辅导or直接提问 - Gemini or NotebookLM',
                    '2. 根据论文脉络理解 - NotebookLM思维导图 + 对具体问题追问',
                    '3. 理解论文中所有图表 - ReadPaper + NotebookLM追问',
                    '4. 知识点差缺补漏 - NotebookLM测验、闪卡'
                ]
            },
            {
                title: '阶段四：整篇论文精读',
                paragraphs: [
                    '1. ReadPaper(读论文做笔记) + NotebookLM(关联论文和其它素材回答) + Gemini(通用问题)'
                ]
            }
        ]
    },
    '11': {
        id: '11',
        title: '分享Vibe Coding的一些心得体会',
        author: '不讲道理的瞬间',
        date: 'Nov 29, 2025',
        image: '/Vibe-Coding.png',
        videoUrl: 'https://www.xiaohongshu.com/explore/692a87c9000000001d03f0ab?xsec_token=ABF-mgAhj-9yXWSReEBC4yeiOdSj5rsmJ48qlHMZd_hcU=&xsec_source=pc_user',
        videoCover: '/Vibe-Coding-Video.png',
        content: [
            {
                title: '1. Idea',
                paragraphs: [
                    '一个好的想法 or 一个你真正需要一个工具去帮你解决一个实际问题'
                ]
            },
            {
                title: '2. Model',
                paragraphs: [
                    '选择一个好的编程模型很重要,能让你事半功倍'
                ]
            },
            {
                title: '3. Coding Agent',
                paragraphs: [
                    'Coding IDE (Cursor) or CLI (Claude Code)'
                ]
            },
            {
                title: '4. Quickly From 0 to 1',
                paragraphs: [
                    '很多人都停留在想法这步, 其实一旦开始做起来, 后续迭代反而没那么难了'
                ]
            },
            {
                title: '5. Good Technology Sense is Better?',
                paragraphs: [
                    '如果没有特别强的技术能力，从技术的实现上，尽量让模型去以一个最简化的一个最小实现去完成它，而不是说一上来就去设计一个特别复杂的技术架构，这样你无法掌控它。如果基于这个复杂的技术架构成功实现了还好，如果遇到棘手问题尝试无果就不好办了'
                ]
            },
            {
                title: '6. Patience is All You Need',
                paragraphs: [
                    '要有足够的耐心，你在这个过程中肯定是几十次上百次的尝试'
                ]
            },
        ]
    },
    '10': {
        id: '10',
        title: "'大一统'大模型时代下对于AI工具的迭代法则",
        author: '不讲道理的瞬间',
        date: 'Nov 22, 2025',
        image: "/AI工具的迭代法则.png",
        videoUrl: 'https://www.xiaohongshu.com/explore/692102c7000000001e0096a0?xsec_token=ABzYZVC5PemWisvuaB02SJcQBRiWfyzPMvF5DiJ9a3RWo=&xsec_source=pc_user',
        videoCover: '/AI工具的迭代法则-Video.png',
        content: [
            {
                title: '1. 维度统一',
                paragraphs: [
                    '这波儿AI大模型浪潮跟上一波儿深度学习的AI浪潮最大的不同呢，就是这波儿呢，是把无论是你的AI的研究者，AI的从业人员，甚至是普通的民众，都拉到了一个一个大的维度上，那就是基于transformer架构的大模型。',
                ]
            },
            {
                title: '2. 百花齐放',
                paragraphs: [
	                '那在之前的深度学习时代，可能有很多的领域推荐学习算法NLP。甚至CV领域，然后在不同领域里还有各个子场景，他们用的是不同的模型，是百花齐放，那现在呢，在大模型时代呢，就是基于这个统一的架构，可能会有不同的上创新大家但是，但大家在大的维度上是统一的。',
                ]
            },
            {
                title: '3. 军备竞赛',
                paragraphs: [
	                '那这种统一呢，就导致了各家大模型公司呢，无论是国外的还是国内的，都掀起了一场宏大的军备竞赛。各家模型公司之间会比拼模型的泛化性、表达能力、生成能力，甚至成本等因素，都在这个统一的这个模型架构上去对比'
                ]
            },

        ]
    },
    '9': {
        id: '9',
        title: '分享四种使用最新Gemini3.0大模型方式',
        author: '不讲道理的瞬间',
        date: 'Nov 25, 2025',
        image: '/Gemini3.0使用方式.png',
        videoUrl: 'https://www.xiaohongshu.com/explore/691dca6a000000001e006c2f?xsec_token=ABX6gZRUzO9_dBgHSYhAZu6A15AL-k8ekkC1JuSpDjyGs=&xsec_source=pc_user',
        videoCover: '/Gemini3.0使用方式-Video.png',
        content: [
            {
                title: '1. Gemini网页端',
                paragraphs: [
                    'https://gemini.google.com/'
                ]
            },
            {
                title: '2. Google AI Studio',
                paragraphs: [
                    'https://aistudio.google.com/prompts/new_chat?model=gemini-3-pro-preview'
                ]
            },
            {
                title: '3. Gemini CLI',
                paragraphs: [
                    'https://github.com/google-gemini/gemini-cli/blob/release/v0.16.0-preview.5/docs/get-started/gemini-3.md'
                ]
            },
            {
                title: '4. Google IDE',
                paragraphs: [
                    'https://antigravity.google/download'
                ]
            },
        ]
    },
    '8': {
        id: '8',
        title: '大模型时代可能大家都需要具备模型付费思维',
        author: '不讲道理的瞬间',
        date: 'Nov 19, 2025',
        image: '/付费时代.png',
        videoUrl: 'https://www.xiaohongshu.com/explore/691dcdc9000000001e017057?xsec_token=ABX6gZRUzO9_dBgHSYhAZu6PaaZzb8vLtP6vZ8-jE5k7U=&xsec_source=pc_user',
        videoCover: '/付费时代-Video.png',
        content: [
            {
                title: '1. 付费意识',
                paragraphs: [
                    '大模型时代，所有人都要接受一个一个常识或者习惯，就是你要为大模型服务去付费'
                ]
            },
            {
                title: '2. 订阅制或套餐制付费',
                paragraphs: [
                    '目前的所有的Gemini、Chatgpt、Claude, 还有国内的Minimax、ChatGLM、Kimi, 它都是有这种订阅制的，或者说这种套餐制的，或者说你通过充值去付费KPI'
                ]
            },
            {
                title: '3. 复杂问题最好付费一个能力强大的模型',
                paragraphs: [
                    '如果日常生活中，可能大家会使用豆包，或者用腾讯的元宝，或者说DeepSeek，然后他们都是免费的，你在网页上就能用。但是真正到一些更复杂的问题，比如说文本写作、代码编写或者说一些可视化的交互等等，可能甚至论文的阅读，这些可能你就需要去购买一个或者订阅一个更强，有更强大那个能力的大模型，比如说Gemini或者ChatGPT5等等'
                ]
            }
        ]
    }
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

// 博客文章列表（用于首页显示）
export const blogPosts = [
    { 
        id: '12',
        title: "我结合AI工具阅读论文的四个阶段", 
        date: "Dec 1, 2025", 
        tags: ["AI Methodology", "Gemini3.0", "NotebookLM", "ReadPaper", "Paper"],
        coverImage: '/黑白水墨画.png'
    },
    { 
        id: '11',
        title: "分享Vibe Coding的一些心得体会", 
        date: "Nov 29, 2025", 
        tags: ["AI Methodology", "Vibe Coding", "Cursor"],
        coverImage: '/Vibe-Coding.png'
    },
    { 
        id: '10',
        title: "'大一统'大模型时代下对于AI工具的迭代法则", 
        date: "Nov 22, 2025", 
        tags: ["AI Methodology", "AI Tools Collection"],
        coverImage: "/AI工具的迭代法则.png"
    },
    { 
        id: '9',
        title: "分享四种使用最新Gemini3.0大模型方式", 
        date: "Nov 19, 2025", 
        tags: ["Gemini3.0", "Base Model"],
        coverImage: "/Gemini3.0使用方式.png"
    },
    { 
        id: '8',
        title: "大模型时代可能大家都需要具备模型付费思维", 
        date: "Nov 19, 2025", 
        tags: ["AI Methodology"],
        coverImage: "/付费时代.png"
    }
]
