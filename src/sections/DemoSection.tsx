import { Button } from '../components/Button'
import { Container } from '../components/Container'

const demoEmail = 'hello@redcoralinnovations.com'

export function DemoSection() {
  return (
    <section id="demo" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_30%,rgba(239,68,68,0.14),transparent_60%)]" />

      <Container className="relative">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-white/8 via-white/5 to-white/0 p-[1px]">
          <div className="rounded-3xl bg-black/60 p-8 ring-1 ring-white/10 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-red-400">Request a demo</p>
                <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  See ClubAuto for your club.
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
                  Email us and we’ll schedule a short walkthrough tailored to your workflows.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 ring-1 ring-white/10">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="m4 4 8 8 8-8" />
                  </svg>
                  <a
                    href={`mailto:${demoEmail}`}
                    className="font-semibold text-white underline-offset-4 hover:underline"
                  >
                    {demoEmail}
                  </a>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href={`mailto:${demoEmail}?subject=ClubAuto%20demo%20request`} className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Email for a demo
                  </Button>
                </a>
                <a href="#features" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Explore features
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
