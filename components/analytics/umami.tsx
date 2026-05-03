'use client'

import Script from 'next/script'

export function UmamiAnalytics({
  src,
  websiteId,
}: {
  src: string
  websiteId: string
}) {
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
