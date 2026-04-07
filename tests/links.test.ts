import { describe, it, expect } from 'vitest'
import { links } from '@/lib/data/links'

describe('Links Data', () => {
  it('should contain a link to the blog', () => {
    const blogLink = links.find(link => link.id === 'blog')
    expect(blogLink).toBeDefined()
    expect(blogLink?.label).toBe('My tech blog')
    expect(blogLink?.href).toBe('/blog')
  })

  it('should have a book icon for the blog link', () => {
    const blogLink = links.find(link => link.id === 'blog')
    expect(blogLink?.icon).toBe('book')
  })

  it('all links should have unique ids', () => {
    const ids = links.map(link => link.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })
})
