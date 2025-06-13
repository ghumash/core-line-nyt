import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchNYTNews } from '@/shared/api'
import { groupByDate } from '@/shared/lib'
import type { NewsDayGroup } from './news.types'

export const fetchNewsByMonth = createAsyncThunk<
  NewsDayGroup[],
  { year: number; month: number }
>('news/fetchByMonth', async ({ year, month }) => {
  const rawData = await fetchNYTNews(year, month)
  return groupByDate(rawData)
})

export const fetchLatestNewsSince = createAsyncThunk<
  NewsDayGroup[],
  string
>('news/fetchLatestNewsSince', async (sinceDate) => {
  const now = new Date()
  const rawData = await fetchNYTNews(now.getFullYear(), now.getMonth() + 1)

  const filtered = rawData.filter((item) => {
    const pub = new Date(item.pub_date)
    return pub > new Date(sinceDate)
  })

  return groupByDate(filtered)
})
