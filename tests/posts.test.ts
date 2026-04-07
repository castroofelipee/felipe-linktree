import { describe, it, expect } from 'vitest'
import { getAllPostsMetadata, getPostBySlug } from '@/lib/posts'

describe('Posts Library', () => {
  it('should return at least one post metadata', () => {
    const posts = getAllPostsMetadata()
    expect(posts.length).toBeGreaterThan(0)
    expect(posts[0]).toHaveProperty('slug')
    expect(posts[0]).toHaveProperty('title')
  })

  it('should return the correct post content by slug', () => {
    const posts = getAllPostsMetadata()
    const firstPost = posts[0]
    const post = getPostBySlug(firstPost.slug)
    
    expect(post).not.toBeNull()
    expect(post?.slug).toBe(firstPost.slug)
    expect(post?.content).toBeDefined()
  })

  it('should return null for non-existent slug', () => {
    const post = getPostBySlug('this-slug-does-not-exist')
    expect(post).toBeNull()
  })
})
