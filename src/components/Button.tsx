import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex items-center gap-2 rounded-md px-4 py-2 font-semibold outline-none shadow-sm text-sm transition-colors',
  ],

  variants: {
    variant: {
      primary: 'bg-green-300 text-gray-100 hover:bg-green-400',
      ghost: 'rounded-md px-2 shadow-none text-green-00',
      outline:
        'border border-green-200 text-green-200 hover:bg-green-300 hover:text-zinc-900',
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, ...rest }: ButtonProps) {
  return <button className={button({ variant })} {...rest} />
}
