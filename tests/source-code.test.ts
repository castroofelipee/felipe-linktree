import { describe, expect, it } from 'vitest'
import { sourceCodeLink } from '@/lib/data/source-code'

describe('sourceCodeLink', () => {
  it('points to the repository', () => {
    expect(sourceCodeLink.label).toBe('Source code')
    expect(sourceCodeLink.href).toBe('https://github.com/castroofelipee/felipe-linktree')
    expect(sourceCodeLink.icon).toBe('github')
  })
})
