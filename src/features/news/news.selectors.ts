import { RootState } from '@/app/store'

export const selectNewsData = (state: RootState) => state.news.data
export const selectNewsLoading = (state: RootState) => state.news.isLoading
export const selectNewsLatestDate = (state: RootState) => state.news.latestDate
