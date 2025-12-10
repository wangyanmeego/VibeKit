import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Banner } from '@/types/video'

interface BannerCarouselProps {
  banners: Banner[]
}

const BannerCarousel = ({ banners }: BannerCarouselProps) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  const next = () => setCurrent((prev) => (prev + 1) % banners.length)

  if (!banners.length) return null

  return (
    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
      {/* 图片 */}
      <div className="relative w-full h-full">
        <img
          src={banners[current].image}
          alt={banners[current].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* 文字叠加 */}
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
            {banners[current].title}
          </h2>
          {banners[current].subtitle && (
            <p className="text-sm md:text-base opacity-90 drop-shadow-md">
              {banners[current].subtitle}
            </p>
          )}
        </div>
      </div>

      {/* 左右箭头 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerCarousel