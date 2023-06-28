import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Oddaj rzeczy',
  description: 'Strona dla chętnych aby oddać rzeczy w dobre ręce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
