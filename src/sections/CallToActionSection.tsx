import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { brand } from '../data/brand'

export function CallToActionSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_0%,rgba(239,68,68,0.18),transparent_60%)]" />

      <Container className="relative">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-white/8 via-white/5 to-white/0 p-[1px]">
          <div className="relative rounded-3xl bg-black/60 p-8 ring-1 ring-white/10 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-red-400">Ready to simplify club admin?</p>
                <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Upgrade your club operations — without losing the martial arts feel.
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
                  {brand.productName} keeps students informed, tracks progress with confidence, and
                  automates repetitive tasks so you can focus on coaching.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#features" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Explore features
                  </Button>
                </a>
                <a href="#demo" className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Request a demo
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
