import { useState } from 'react'
import { Container } from '../components/Container'
import { screenshots } from '../data/screenshots'
import { cx } from '../utils/cx'

type ScreenshotCardProps = {
  title: string
  description: string
  src: string
}

function ScreenshotCard({ title, description, src }: ScreenshotCardProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-red-500/15 blur-2xl" />
      </div>

      <div className="relative">
        <div className="p-5">
          <h3 className="text-sm font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
        </div>

        <div className="px-5 pb-5">
          <div className="relative overflow-hidden rounded-xl bg-black/50 ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative aspect-[16/10] w-full">
              {!failed ? (
                <>
                  <img
                    src={src}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover object-top saturate-90 brightness-95"
                    loading="lazy"
                    decoding="async"
                    onError={() => setFailed(true)}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <span className="h-4 w-4 rounded-sm bg-red-500" />
                    </div>
                    <p className="mt-3 text-xs font-semibold text-white/70">Add screenshot</p>
                    <p className="mt-1 text-xs text-white/50">{src}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_90%_20%,rgba(239,68,68,0.12),transparent_60%)]" />

      <Container className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-red-400">Inside ClubAuto</p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A quick product tour.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
              A premium UI designed for fast admin workflows — clear, modern, and built to scale across
              different sports clubs.
            </p>
          </div>

          <a
            href="#features"
            className={cx(
              'inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white',
              'self-start sm:self-auto',
            )}
          >
            Explore features
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {screenshots.map((shot) => (
            <ScreenshotCard
              key={shot.src}
              title={shot.title}
              description={shot.description}
              src={shot.src}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
