import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cx } from '../utils/cx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
  }
>

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-red-500 text-white hover:bg-red-400 active:bg-red-500/90',
    secondary:
      'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/12 active:bg-white/10',
    ghost:
      'text-white/80 hover:text-white hover:bg-white/5',
  }

  return (
    <button className={cx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
