'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname + (searchParams.toString() ? `?${searchParams}` : ''),
      })
    }
  }, [pathname, searchParams])

  return null
}
