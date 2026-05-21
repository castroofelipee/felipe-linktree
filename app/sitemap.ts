import type { MetadataRoute } from 'next'
import { getAllPostsMetadata } from '@/lib/posts'
import { getAllTags } from '@/lib/tags'

const siteUrl = 'https://wwwfelipecastro.site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const posts = getAllPostsMetadata()
  const tags = getAllTags()

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const tagEntries: MetadataRoute.Sitemap = tags.map(({ slug }) => ({
    url: `${siteUrl}/blog/tags/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.4,
  }))

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/uses`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/blog/tags`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...postEntries,
    ...tagEntries,
  ]
}
