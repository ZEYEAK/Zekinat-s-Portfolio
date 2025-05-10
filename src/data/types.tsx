type ProjectData = {
  title: string
  description: string
  timeline: string
  role: string
  tools: string[]
  heroMedia?: ProjectMedia
  sections: ProjectSection[]
  links: ProjectLink[]
  mediaGallery?: ProjectMedia[]
  slug?: string
  testimonial?: {
    quote: string
    author: string
    role?: string
  }
}

type ProjectSection = {
  title: string
  content: string | React.ReactNode
}

type ProjectLink = {
  label: string
  href: string
}

type ProjectMedia = {
  type: 'image' | 'video' | 'figma'
  src: string
  caption?: string
}

export type { ProjectData, ProjectSection, ProjectLink, ProjectMedia }
