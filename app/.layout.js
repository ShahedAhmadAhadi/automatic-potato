import { Inter } from 'next/font/google'
import './globals.css'
import { Links } from './Links'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className='flex w-full justify-between bg-white text-black'>
        <div>
          Logo
        </div>
        <div className='flex'>
          <div className='flex'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>More</div>
          </div>
          <div>
            <button>login</button>
          </div>
        </div>
      </nav>
      <Links />
        {children}</body>
    </html>
  )
}