import { NewsItem } from '@/features'
import { formatDateFull } from '@/shared/lib'
import './NewsCard.css'

interface Props {
  item: NewsItem
  date: string
}

export const NewsCard = ({ item }: Props) => {
  const imageUrl = item.multimedia?.[0]?.url
    ? `https://static01.nyt.com/${item.multimedia[0].url}`
    : null

  return (
    <div
      className="news-card"
      onClick={() => window.open(item.web_url, '_blank')}
    >
      {imageUrl && <img src={imageUrl} alt="preview" className="news-image" />}
      <div className="news-content">
        <div className="news-source">{item.source}</div>
        <div className="news-title">{item.abstract}</div>
        <div className="news-date">{formatDateFull(item.pub_date)}</div>
      </div>
    </div>
  )
}
