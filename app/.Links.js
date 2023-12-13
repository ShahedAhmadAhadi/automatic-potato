'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'text-blue-600' : 'text-red-600'}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'text-blue-600' : 'text-red-600'}`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}