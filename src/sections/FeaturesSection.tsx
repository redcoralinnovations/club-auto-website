import { Container } from '../components/Container'
import type { ProductModule } from '../data/productModules'
import { productModules } from '../data/productModules'
import { cx } from '../utils/cx'

function ModuleIcon({ icon, className }: { icon: ProductModule['icon']; className?: string }) {
  const base = 'h-5 w-5'

  switch (icon) {
    case 'user-plus':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6" />
          <path d="M22 11h-6" />
        </svg>
      )
    case 'belt':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 7c6 4 10 4 16 0" />
          <path d="M4 17c6-4 10-4 16 0" />
          <path d="M8 9v6" />
          <path d="M16 9v6" />
        </svg>
      )
    case 'calendar':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      )
    case 'check':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    case 'credit-card':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
          <path d="M6 15h3" />
        </svg>
      )
    case 'bell':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 5a2 2 0 1 1 4 0" />
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 7H3s3 0 3-7" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
      )
    case 'users':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M15 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'shield':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cx(base, className)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    default:
      return null
  }
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_10%_30%,rgba(239,68,68,0.16),transparent_60%)]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-red-400">Features</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Everything your club needs to run sharp.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
            Purpose-built modules that reduce admin load and keep students engaged — without the
            mess of spreadsheets and scattered tools.
          </p>
        </div>

        <div id="modules" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productModules.map((module) => (
            <div
              key={module.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/7"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-red-500/15 blur-2xl" />
              </div>

              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10">
                  <ModuleIcon icon={module.icon} className="text-white/90" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-white">{module.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
