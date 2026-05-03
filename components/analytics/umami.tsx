'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
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
  const searchParams = useSearchParams()

  useEffect(() => {
    const win = window as UmamiWindow
    if (!win.umami?.track) return

    const url = searchParams?.size
      ? `${pathname}?${searchParams.toString()}`
      : pathname

    win.umami.track(url)
  }, [pathname, searchParams])

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
