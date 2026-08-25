/**
 * 将基础URL、路径和额外查询参数组合成完整的URL
 * @param {string} baseUrl - 基础URL，如 'https://api.example.com'
 * @param {string} pathWithQuery - 路径和可能包含的查询参数，如 '/users?id=123'
 * @param {Object} extraQuery - 额外的查询参数对象，如 { page: 1, size: 10 }
 * @returns {string} 完整的URL字符串
 * @example
 * buildUrl('https://api.example.com', '/users', { page: 1, size: 10 })
 * // 返回 'https://api.example.com/users?page=1&size=10'
 *
 * buildUrl('https://api.example.com', '/users?id=123', { active: true })
 * // 返回 'https://api.example.com/users?id=123&active=true'
 */
export function buildUrl(baseUrl, pathWithQuery, extraQuery = {}) {
    const url = new URL(pathWithQuery, baseUrl)
    Object.entries(extraQuery).forEach(([k, v]) => {
        url.searchParams.set(k, v)
    })
    return url.toString()
}