import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
  width?: 'auto' | 'full'
  children: ReactNode
  asChild?: boolean
}

export function Button({ asChild, children, width = 'auto' }: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded text-black font-semibold font-sans text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        {
          'w-auto': width === 'auto',
          'w-full': width === 'full',
        },
      )}
    >
      {children}
    </Component>
  )
}
