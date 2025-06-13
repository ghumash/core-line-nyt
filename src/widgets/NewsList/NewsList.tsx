import { NewsDayGroup } from '@/features'
import { NewsCard } from './NewsCard'
import './NewsList.css'

interface Props {
  data: NewsDayGroup[]
  visibleCount: number
}

export const NewsList = ({ data, visibleCount }: Props) => {
  const items = data
    .flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        groupDate: group.date,
      })),
    )
    .slice(0, visibleCount)

  return (
    <div className="news-list">
      {items.map((item, index) => {
        const showDateHeading =
          index === 0 || item.groupDate !== items[index - 1].groupDate

        return (
          <div key={index} className="news-day-group">
            {showDateHeading && (
              <div className="news-date-heading">News for {item.groupDate}</div>
            )}
            <NewsCard item={item} date={item.groupDate} />
          </div>
        )
      })}
    </div>
  )
}
