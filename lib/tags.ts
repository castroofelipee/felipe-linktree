import { getAllPostsMetadata, type PostMetadata } from './posts'

export interface TagSummary {
  tag: string
  slug: string
  count: number
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function getAllTags(): TagSummary[] {
  const posts = getAllPostsMetadata()
  const counts = new Map<string, { tag: string; count: number }>()

  for (const post of posts) {
    for (const tag of post.tags ?? []) {
      const slug = slugifyTag(tag)
      const existing = counts.get(slug)
      if (existing) {
        existing.count += 1
      } else {
        counts.set(slug, { tag, count: 1 })
      }
    }
  }

  return Array.from(counts.entries())
    .map(([slug, { tag, count }]) => ({ slug, tag, count }))
    .sort((a, b) => (b.count - a.count) || a.tag.localeCompare(b.tag))
}

export function getPostsByTag(tagSlug: string): PostMetadata[] {
  return getAllPostsMetadata().filter((post) =>
    (post.tags ?? []).some((t) => slugifyTag(t) === tagSlug)
  )
}

export function findTagBySlug(tagSlug: string): TagSummary | undefined {
  return getAllTags().find((t) => t.slug === tagSlug)
}
