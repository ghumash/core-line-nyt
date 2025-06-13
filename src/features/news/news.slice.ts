import { createSlice } from '@reduxjs/toolkit'
import type { NewsState } from './news.types'
import {fetchLatestNewsSince, fetchNewsByMonth} from './news.thunks'

const initialState: NewsState = {
  data: [],
  isLoading: false,
  error: null,
  latestDate: null,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNews: (state) => {
      state.data = []
      state.error = null
      state.latestDate = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByMonth.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchNewsByMonth.fulfilled, (state, action) => {
        state.isLoading = false

        const newData = action.payload

        newData.forEach((group) => {
          const exists = state.data.find((d) => d.date === group.date)
          if (!exists) {
            state.data.push(group)
          }
        })

        if (state.data.length > 0) {
          const allDates = state.data.map((d) => d.date)
          state.latestDate = allDates.sort().reverse()[0]
        }
      })
      .addCase(fetchNewsByMonth.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Failed to fetch news'
      })

      .addCase(fetchLatestNewsSince.fulfilled, (state, action) => {
        const newGroups = action.payload

        newGroups.forEach((group) => {
          const existing = state.data.find((d) => d.date === group.date)
          if (existing) {
            const urls = new Set(existing.items.map((i) => i.web_url))
            const freshItems = group.items.filter((i) => !urls.has(i.web_url))
            existing.items.push(...freshItems)
          } else {
            state.data.push(group)
          }
        })

        if (state.data.length > 0) {
          const allDates = state.data.map((d) => d.date)
          state.latestDate = allDates.sort().reverse()[0]
        }
      })
  },
})

export const { clearNews } = newsSlice.actions
export default newsSlice.reducer
