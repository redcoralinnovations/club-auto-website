import { useEffect, useMemo, useState } from 'react'
import { Button } from './Button'
import { Container } from './Container'
import { cx } from '../utils/cx'
import { brand } from '../data/brand'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
]

function Wordmark() {
  const [logoFailed, setLogoFailed] = useState(false)

  const showImage = useMemo(() => {
    return Boolean(brand.logoSrc) && !logoFailed
  }, [logoFailed])

  return (
    <a href="#" className="inline-flex items-center gap-2">
      <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
        {showImage ? (
          <img
            src={brand.logoSrc}
            alt=""
            className="h-full w-full object-contain p-1"
            loading="eager"
            decoding="async"
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
              setLogoFailed(true)
            }}
          />
        ) : (
          <span className="h-4 w-4 rounded-sm bg-red-500" />
        )}
        <span className="sr-only">{brand.productName}</span>
      </span>

      <span className="text-sm font-extrabold tracking-tight text-white">{brand.productName}</span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Wordmark />

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#features">
              <Button variant="secondary">See it in action</Button>
            </a>
            <a href="#modules">
              <Button variant="primary">Get a demo</Button>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      <div
        className={cx(
          'md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="border-t border-white/10 bg-black/80 backdrop-blur">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-3">
                <a href="#features" onClick={() => setOpen(false)}>
                  <Button variant="secondary" className="w-full">
                    See it
                  </Button>
                </a>
                <a href="#modules" onClick={() => setOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Demo
                  </Button>
                </a>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  )
}
