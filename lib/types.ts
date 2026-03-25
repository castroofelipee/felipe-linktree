export type LinkIconName = 'store' | 'darkroom' | 'camera' | 'github' | 'monitor'
export type SocialIconName = 'tiktok' | 'youtube' | 'x' | 'instagram' | 'linkedin'

export interface LinkItem {
  id: string
  label: string
  href: string
  icon: LinkIconName
}

export interface SocialItem {
  id: string
  platform: string
  href: string
  icon: SocialIconName
}

export interface ProfileData {
  name: string
  bio: string
  initials: string
  photoSrc?: string
  photoAlt: string
}

export type ExperienceType = 'full-time' | 'part-time' | 'contract' | 'freelance'
export type ProjectType = 'international' | 'opensource' | 'personal'
export type ProjectStatus = 'active' | 'completed' | 'archived'

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  location: string
  type: ExperienceType
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  href?: string
  type: ProjectType
  status: ProjectStatus
  featured?: boolean
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface UsesItem {
  name: string
  description?: string
  href?: string
}

export interface UsesGroup {
  title: string
  items: UsesItem[]
}

export interface UsesSection {
  id: string
  title: string
  groups: UsesGroup[]
}
