import type { UsesSection } from '../types'

export const usesSections: UsesSection[] = [
  {
    id: 'hardware',
    title: 'Hardware',
    groups: [
      {
        title: 'Machines & Phone',
        items: [
          {name: 'Lenovo IdeaPad 32GB of ram, 1TB SSD from 2023, Linux Arch', description: 'Main lapto for work.'},
          { name: 'MacBook Air M1 — 8GB, 256GB SSD from 2020 (I know, its old 😭)', description: 'Usage to work and most of my personal projects' },
          {name: 'iPad Pro 12.9 2021', description: 'For reading, media consumption and some light work.'},
          { name: 'iPhone 16e' },
        ],
      },
      {
        title: 'Keyboard, Mouse & Ergonomics',
        items: [
          { name: 'Redragon Fizz Pro RGB' },
        ],
      },
    ],
  },
  {
    id: 'software',
    title: 'Software',
    groups: [
      {
        title: 'Development',
        items: [
          { name: 'Neovim', description: 'Main editor', href: 'https://neovim.io' },
          { name: 'Alacritty', description: 'Terminal emulator', href: 'https://github.com/alacritty/alacritty' },
          { name: 'Zsh', description: 'Shell', href: 'https://www.zsh.org' },
        ],
      },
      {
        title: 'Productivity',
        items: [
          { name: 'Firefox', description: 'Web browser', href: 'https://www.mozilla.org/firefox' },
          { name: 'Obsidian, most of time', description: 'Note-taking app', href: 'https://obsidian.md' },
        ],
      },
    ],
  },
]

export const usesIntro =
  "People often ask what tools I use for development and daily work. Here's a more-or-less updated list of everything in my setup."

// Coloque sua foto do setup em /public/ e atualize o caminho abaixo.
// Ex: '/setup.jpg', '/desk.png'. Deixe undefined para ocultar a imagem.
export const setupImage: { src: string; alt: string } | undefined = {
  src: '/desk.png',
  alt: 'My desk setup',
}
