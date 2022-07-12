import http from '../request'
import { IRequestRss, IRequestLookup } from '@/types/home'
const BASE_URL = 'https://itunes.apple.com'

/**
 * 获取推荐列表
 * @param limit
 * @returns {Promise<*>}
 */
export const fetchRecommends = (limit: number) => {
  return http<IRequestRss>(`${BASE_URL}/hk/rss/topgrossingapplications/limit=${limit}/json`)
}

/**
 * 获取下载量最多的免费app列表
 * @param limit
 * @returns  {Promise<*>}
 */
export const fetchFreeapplications = (limit: number) => {
  return http<IRequestRss>(`${BASE_URL}/hk/rss/topfreeapplications/limit=${limit}/json`)
}

/**
 * 根据id获取app的其他信息
 * @param id app id
 * @returns {Promise<*>}
 */
export const fetchLookup = (id: string | null) => {
  return http<IRequestLookup>(`${BASE_URL}/hk/lookup?id=${id}`, 'POST')
}
