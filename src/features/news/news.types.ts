export interface NewsItem {
  abstract: string
  web_url: string
  pub_date: string
  source: string
  multimedia: {
    url: string
  }[]
}

export interface NewsDayGroup {
  date: string
  items: NewsItem[]
}

export interface NewsState {
  data: NewsDayGroup[]
  isLoading: boolean
  error: string | null
  latestDate: string | null
}
