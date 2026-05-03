'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

type UmamiWindow = Window & {
  umami?: {
    track: (event?: string, data?: Record<string, unknown>) => void
  }
}

export function UmamiAnalytics({
  src,
  websiteId,
}: {
  src: string
  websiteId: string
}) {
  const pathname = usePathname()

  useEffect(() => {
    const win = window as UmamiWindow
    if (!win.umami?.track) return

    win.umami.track(`${window.location.pathname}${window.location.search}`)
  }, [pathname])

  return (
    <Script
      src={src}
      data-website-id={websiteId}
      data-auto-track="true"
      strategy="afterInteractive"
      defer
    />
  )
}
