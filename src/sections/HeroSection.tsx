import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { brand } from '../data/brand'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(239,68,68,0.25),transparent_60%),radial-gradient(700px_circle_at_90%_10%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Built for modern sports clubs
            </div>

            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Club management,
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"> sharpened</span>{' '}
              for martial arts.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              {brand.productName} brings registrations, gradings, attendance, scheduling, and payments into
              one clean platform — designed for the pace and professionalism of busy clubs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#features">
                <Button variant="primary" className="w-full sm:w-auto">
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
                </Button>
              </a>

              <a href="#modules">
                <Button variant="secondary" className="w-full sm:w-auto">
                  View modules
                </Button>
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:max-w-xl">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Built for admin
                </dt>
                <dd className="mt-2 text-sm text-white/80">
                  Fast workflows with clarity-first screens.
                </dd>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <dt className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Club-ready
                </dt>
                <dd className="mt-2 text-sm text-white/80">
                  Designed for real martial arts operations.
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative animate-floaty">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-red-500/20 via-white/5 to-transparent blur-2xl" />

            <div className="relative rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <div className="rounded-xl bg-black/60 p-6 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs font-semibold text-white/60">In-app preview</span>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">Tonight’s classes</p>
                      <span className="text-xs text-white/60">6:00–8:00pm</span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      {['Kids', 'Teens', 'Adults'].map((label) => (
                        <div
                          key={label}
                          className="rounded-md bg-black/40 px-3 py-2 text-center text-xs font-semibold text-white/75 ring-1 ring-white/10"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-xs font-semibold text-white/60">Attendance</p>
                      <p className="mt-2 text-2xl font-extrabold text-white">92%</p>
                      <p className="mt-1 text-xs text-white/60">Last 7 days</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-xs font-semibold text-white/60">Next grading</p>
                      <p className="mt-2 text-2xl font-extrabold text-white">14 days</p>
                      <p className="mt-1 text-xs text-white/60">Eligibility tracked</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gradient-to-r from-red-500/15 via-white/5 to-transparent p-4 ring-1 ring-white/10">
                    <p className="text-sm font-semibold text-white">Automation that feels effortless</p>
                    <p className="mt-1 text-sm text-white/70">
                      Fewer spreadsheets. More time on the mats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -top-12 -right-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  )
}
