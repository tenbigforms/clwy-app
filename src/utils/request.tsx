import urlcat from 'urlcat'


const request = async (url, { method = 'GET', params, body } = {}) => {

  const apiUrl = process.env.EXPO_PUBLIC_API_URL
  const requestUrl = urlcat(apiUrl, url, params)
  // console.log(requestUrl)


  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',

  }

  const config = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  }

  const response = await fetch(requestUrl, config)

  if (!response.ok) {


    const { message, errors } = await response.json().catch(() => null)
    const error = new Error(message)
    error.status = response.status
    error.errors = errors
    throw error
  }

  return await response.json()
}

export default request

export const get = (url, params) => request(url, { method: 'GET', params })
export const post = (url, body) => request(url, { method: 'POST', body })
export const put = (url, body) => request(url, { method: 'PUT', body })
export const patch = (url, body) => request(url, { method: 'PATCH', body })
export const del = (url) => request(url, { method: 'DELETE' })
