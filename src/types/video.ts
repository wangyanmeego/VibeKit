export interface Author {
  id: string
  name: string
  avatar: string
  followers?: number
}

export interface Video {
  id: string
  title: string
  description?: string
  video_url?: string
  thumbnail: string
  duration: string
  views: number
  danmaku: number
  likes?: number
  coins?: number
  favorites?: number
  author: Author
  tags?: string[]
  created_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  sort_order: number
}

export interface Banner {
  id: string
  title: string
  subtitle?: string
  image: string
  link?: string
}

export interface VideoListRes {
  data: Video[]
  total: number
  page: number
  limit: number
}

export interface VideoDetailRes extends Video {}