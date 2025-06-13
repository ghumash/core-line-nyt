import axios from 'axios'
import { NewsItem } from '@/features'

const API_KEY = 'RqCmBJid05VzSqmalsypyUVDwGulHlUi '

export const fetchNYTNews = async (
  year: number,
  month: number
): Promise<NewsItem[]> => {
  const url = `/api/svc/archive/v1/${year}/${month}.json?api-key=${API_KEY}`

  const res = await axios.get(url)
  const articles = res.data.response.docs

  return articles
    .filter((a) => a.abstract && a.web_url && a.pub_date && a.source)
    .map((a) => ({
      abstract: a.abstract,
      web_url: a.web_url,
      pub_date: a.pub_date,
      source: a.source,
      multimedia: a.multimedia || [],
    }))
}
