import { formatDateGroup } from './date'
import type { NewsItem, NewsDayGroup } from '@/features'

export const groupByDate = (articles: NewsItem[]): NewsDayGroup[] => {
  const groups: Record<string, NewsItem[]> = {}

  articles.forEach((item) => {
    const dateKey = formatDateGroup(item.pub_date)
    if (!groups[dateKey]) {
      groups[dateKey] = []
    }
    groups[dateKey].push(item)
  })

  return Object.entries(groups)
    .map(([date, items]) => ({ date, items }))
    .sort((a, b) => b.date.localeCompare(a.date))
}
