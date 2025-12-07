// 获取正确的资源路径（适配 GitHub Pages base 路径）
export function getAssetPath(path) {
    // 如果路径已经是完整 URL，直接返回
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path
    }
    // 移除开头的斜杠（如果有），然后添加 base URL
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${import.meta.env.BASE_URL}${cleanPath}`
}

