import { useState } from 'react'
import { Search, Bell, Heart, Clock, Star, Upload, User } from 'lucide-react'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold tracking-wider">
              bilibili
            </div>
            
            {/* 主导航 */}
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <a href="/" className="hover:text-blue-200 transition-colors">首页</a>
              <a href="/timeline" className="hover:text-blue-200 transition-colors">动态</a>
              <a href="/ranking" className="hover:text-blue-200 transition-colors">排行</a>
              <a href="/shop" className="hover:text-blue-200 transition-colors">会员购</a>
              <a href="/manga" className="hover:text-blue-200 transition-colors">漫画</a>
              <a href="/download" className="hover:text-blue-200 transition-colors">下载客户端</a>
            </nav>
          </div>

          {/* 搜索框 */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="搜索视频、番剧、up主"
                className="w-full px-4 py-2 rounded-full border border-blue-600 bg-white/10 backdrop-blur-sm placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && searchValue.trim()) {
                    // TODO: [Dev] 对接真实搜索API
                    window.location.href = `/search?q=${encodeURIComponent(searchValue)}`
                  }
                }}
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white transition-colors"
                onClick={() => {
                  if (searchValue.trim()) {
                    // TODO: [Dev] 对接真实搜索API
                    window.location.href = `/search?q=${encodeURIComponent(searchValue)}`
                  }
                }}
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* 右侧用户区 */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="消息">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="动态">
              <Heart size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="历史">
              <Clock size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="收藏">
              <Star size={20} />
            </button>
            <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-sm font-medium transition-colors">
              投稿
            </button>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-blue-400 hover:bg-blue-700 rounded-full text-sm transition-colors">
                登录
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm transition-colors">
                注册
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header