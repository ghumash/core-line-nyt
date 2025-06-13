import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/store'
import {
  fetchNewsByMonth,
  selectNewsData,
  selectNewsLoading,
  selectNewsLatestDate,
} from '@/features'
import { useInView } from 'react-intersection-observer'
import { fetchLatestNewsSince } from "./news.thunks";

export const usePaginatedNews = () => {
  const dispatch = useAppDispatch()
  const PAGE_SIZE = 1


  const news = useAppSelector(selectNewsData)
  const loading = useAppSelector(selectNewsLoading)
  const latestDate = useAppSelector(selectNewsLatestDate)

  const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState(() => new Date().getMonth() + 1)
  const [loadedKeys, setLoadedKeys] = useState<Set<string>>(new Set())
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const { ref: bottomRef, inView } = useInView()

  // month
  useEffect(() => {
    const key = `${currentYear}-${currentMonth}`
    if (!loadedKeys.has(key)) {
      dispatch(fetchNewsByMonth({ year: currentYear, month: currentMonth }))
      setLoadedKeys((prev) => new Set(prev).add(key))
    }
  }, [dispatch, currentYear, currentMonth, loadedKeys])

  // 30 sec
  useEffect(() => {
    if (!latestDate) return

    let isMounted = true
    const interval = setInterval(() => {
      if (isMounted) {
        dispatch(fetchLatestNewsSince(latestDate))
      }
    }, 30_000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [dispatch, latestDate])

  // scroll
  useEffect(() => {
    if (!inView || loading) return

    const totalNews = news.reduce((acc, group) => acc + group.items.length, 0)

    if (visibleCount < totalNews) {
      setVisibleCount((prev) => prev + PAGE_SIZE)
    } else {
      setCurrentMonth((prev) => {
        if (prev > 1) return prev - 1
        setCurrentYear((y) => y - 1)
        return 12
      })
      setVisibleCount(PAGE_SIZE)
    }
  }, [inView, loading, news, visibleCount])

  return {
    news,
    loading,
    bottomRef,
    visibleCount,
  }
}
