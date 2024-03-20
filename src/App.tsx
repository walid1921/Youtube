import { useState } from 'react'
import Categories from './components/Categories.tsx'
import { categories, videos } from './data/home.ts'
import { HeaderPage } from './layouts/HeaderPage.tsx'
import VideoItem from './components/VideoItem.tsx'
import { Sidebar } from './layouts/Sidebar.tsx'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="max-h-screen flex flex-col ">
      <HeaderPage />

      <div className="grid grid-cols-[auto,1fr] flex-grow-1 ">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4 overflow-auto">
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => (
              <VideoItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
