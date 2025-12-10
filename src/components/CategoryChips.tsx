import { useState } from 'react'
import type { Category } from '@/types/video'

interface CategoryChipsProps {
  categories: Category[]
  onSelect?: (slug: string) => void
}

const CategoryChips = ({ categories, onSelect }: CategoryChipsProps) => {
  const [active, setActive] = useState('all')

  return (
    <div className="bg-white border-b">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center space-x-2 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActive(cat.slug)
                onSelect?.(cat.slug)
              }}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${active === cat.slug
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryChips