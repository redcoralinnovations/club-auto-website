import { brand } from '../data/brand'
import { Container } from './Container'

const footerLinks = [
  { label: 'Tour', href: '#screenshots' },
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Demo', href: '#demo' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-extrabold tracking-tight text-white">{brand.productName}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {year} {brand.companyName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
