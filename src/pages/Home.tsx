import Header from '@/components/Header'
import CategoryChips from '@/components/CategoryChips'
import BannerCarousel from '@/components/BannerCarousel'
import VideoCard from '@/components/VideoCard'
import { MOCK_BANNERS, MOCK_CATEGORIES, MOCK_VIDEOS } from '@/lib/mock/home'

const Home = () => {
  const handleCategorySelect = (slug: string) => {
    // TODO: [Dev] 对接真实API，按分类筛选
    console.log('选择分类:', slug)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryChips categories={MOCK_CATEGORIES} onSelect={handleCategorySelect} />
      
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {/* 轮播 + 推荐位 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <BannerCarousel banners={MOCK_BANNERS} />
          </div>
          <div className="space-y-4">
            {/* 右侧推荐位 - 可扩展 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">今日推荐</h3>
              <div className="space-y-3">
                {MOCK_VIDEOS.slice(0, 3).map((video) => (
                  <div key={video.id} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-16 h-10 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{video.author.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 热门视频 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">热门视频</h2>
            <a href="/ranking" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
              查看更多 →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MOCK_VIDEOS.slice(0, 12).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* 最新发布 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">最新发布</h2>
            <a href="/latest" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
              查看更多 →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MOCK_VIDEOS.slice(12, 24).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home