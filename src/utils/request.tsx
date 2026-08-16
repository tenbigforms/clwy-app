import urlcat from 'urlcat'

/**
 * 基础请求函数
 * @param {string} url - API 请求路径（如 '/articles'）
 * @param {object} [options] - 请求配置项
 * @param {string} [options.method='GET'] - HTTP 方法
 * @param {object} [options.params] - URL 查询参数（如 { page: 1, limit: 10 }）
 * @param {object} [options.body] - 请求体数据
 * @returns {Promise<object>} 返回解析后的JSON数据
 *
 * @example
 * // 基础调用示例
 * request('/articles').then(data => console.log(data))
 *
 * @example
 * // 带查询参数的 GET 请求
 * request('/articles', {
 *   params: { page: 1, limit: 10 }
 * })
 *
 * @example
 * // POST 请求
 * // 提交表单数据
 * request('/auth/sign_in', {
 *   method: 'POST',
 *   body: { login: 'user', password: '123123' }
 * })
 */
const request = async (url, { method = 'GET', params, body } = {}) => {
  // 完整的接口地址
  const apiUrl = process.env.EXPO_PUBLIC_API_URL
  const requestUrl = urlcat(apiUrl, url, params)

  // 请求头
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 待完成：传递 token
  }

  const config = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  }

  const response = await fetch(requestUrl, config)

  if (!response.ok) {
    // 待完成：登录超时处理

    const { message, errors } = await response.json().catch(() => null)
    const error = new Error(message)
    error.status = response.status
    error.errors = errors
    throw error
  }

  return await response.json()
}

export default request

/**
 * GET 请求
 * @param {string} url - 请求地址
 * @param {object} [params] - 查询参数
 * @returns {Promise<any>} 返回解析后的JSON数据
 *
 * @example
 * // 基本 GET 请求
 * get('/articles').then(data => console.log(data))
 *
 * @example
 * // 带查询参数的 GET 请求
 * get('/articles', { page: 1, limit: 10 })
 */
export const get = (url, params) => request(url, { method: 'GET', params })

/**
 * POST 请求
 * @param {string} url - 请求地址
 * @param {object} body - 请求体数据
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 提交表单数据
 * post('/auth/sign_in', { login: 'user', password: '123123' })
 */
export const post = (url, body) => request(url, { method: 'POST', body })

/**
 * PUT 请求
 * @param {string} url - 请求地址
 * @param {object} body - 请求体数据
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 更新数据
 * put('/users/info', { nickname: 'clwy', company: '长乐未央公司' })
 */
export const put = (url, body) => request(url, { method: 'PUT', body })

/**
 * PATCH 请求
 * @param {string} url - 请求地址
 * @param {object} body - 请求体数据
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 部分更新数据
 * 注意：本项目无任何接口使用 PATCH
 */
export const patch = (url, body) => request(url, { method: 'PATCH', body })

/**
 * DELETE 请求
 * @param {string} url - 请求地址
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 注销用户
 * del('/users/me')
 */
export const del = (url) => request(url, { method: 'DELETE' })
