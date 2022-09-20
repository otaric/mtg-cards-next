import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  link: string
}

export default function LinkNew({ children, link }: Props) {
  return (
    <Link href={link}>
      <a>{children}</a>
    </Link>
  )
}
