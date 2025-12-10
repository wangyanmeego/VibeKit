import { Play, MessageCircle } from 'lucide-react'
import type { Video } from '@/types/video'

interface VideoCardProps {
  video: Video
}

const formatNumber = (num: number): string => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
  return num.toString()
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
      {/* 缩略图 */}
      <div className="relative aspect-video rounded-t-lg overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
            <Play size={20} className="text-white ml-1" fill="white" />
          </div>
        </div>
      </div>

      {/* 信息区 */}
      <div className="p-3">
        {/* 标题 */}
        <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {video.title}
        </h3>

        {/* 作者 */}
        <div className="flex items-center space-x-2 mb-2">
          <img
            src={video.author.avatar}
            alt={video.author.name}
            className="w-5 h-5 rounded-full"
          />
          <span className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer">
            {video.author.name}
          </span>
        </div>

        {/* 统计 */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-3">
            <span>{formatNumber(video.views)} 播放</span>
            <span className="flex items-center space-x-1">
              <MessageCircle size={12} />
              <span>{formatNumber(video.danmaku)}</span>
            </span>
          </div>
          <span className="text-gray-400">
            {new Date(video.created_at).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}
          </span>
        </div>

        {/* 标签 */}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {video.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoCard