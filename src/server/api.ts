
import instance from './intercept';
import type { News, User } from './models';

export async function getNews(): Promise<News[]> {
    // TODO 修改url
    const response = await instance.get(`/news`)
    return response.data
}