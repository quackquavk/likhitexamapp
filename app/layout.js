import './globals.css'
import Header from '@/components/Header'

// import { Poppins } from 'next/font'

// // Subsets are really important. CHECK BELOW FOR MORE INFO
// const poppins = Poppins({ weight:['200', '400'], style:'normal' , subsets: ['latin'] })


export const metadata = {
  title: 'Likhit Exam App',
  description: 'App containing all the questions you will ever need to crack the driving liscense exam' ,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  )
}
