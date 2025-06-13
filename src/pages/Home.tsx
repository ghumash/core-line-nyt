import { useState } from 'react'
import { usePaginatedNews } from '@/features'
import { NewsList, Header, Sidebar, Footer } from '@/widgets'
import { Loader } from '@/shared/ui'
import './Home.css'

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const {
    news,
    loading,
    bottomRef,
    visibleCount,
  } = usePaginatedNews()

  const handleMenuClick = () => setIsSidebarOpen(true)
  const handleSidebarClose = () => setIsSidebarOpen(false)

  return (
    <div className="page">
      <Header onMenuClick={handleMenuClick} />
      <Sidebar open={isSidebarOpen} onClose={handleSidebarClose} />

      <NewsList data={news} visibleCount={visibleCount} />
      <div ref={bottomRef} style={{ height: 1 }} />
      {loading && <Loader />}
      <Footer />
    </div>
  )
}
