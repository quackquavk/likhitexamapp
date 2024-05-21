import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
export const metadata = {
  title: 'Likhit Exam App',
  description: 'App containing all the questions you will ever need to crack the driving liscense exam' ,
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
