import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Likhit Exam App",
  description:
    "App containing all the questions you will ever need to crack the driving liscense exam",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Prepare thoroughly and confidently for your upcoming written driving license exam with Likhit Exam, a comprehensive and user-friendly application meticulously crafted to support your study journey. Designed with your success in mind, Likhit Exam offers a wealth of resources and features to help you master the necessary knowledge and skills required to pass your exam with flying colors.

          Gain access to a vast repository of practice questions, meticulously curated to cover all essential topics and scenarios you may encounter on your exam. With Likhit Exam, you can simulate real exam conditions, track your progress, and identify areas for improvement, ensuring you are fully prepared and confident on exam day.
          
          Our intuitive interface and interactive study materials make learning enjoyable and effective, whether you're studying at home, on the go, or during short study sessions. Stay organized and motivated with personalized study plans, progress trackers, and performance analytics, empowering you to stay on track and achieve your goals.
          
          Join thousands of satisfied users who have successfully passed their driving license exams with Likhit Exam. Start your journey towards success today and unlock the doors to new opportunities on the road ahead. Download Likhit Exam now and take the first step towards earning your driving license with confidence and competence."
        />
        <meta
          name="keywords"
          content="Likhit Exam, driving license, written exam, practice test, preparation, study app"
        />
        <meta name="author" content="Pukar Khanal" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="hhttps://likhitexamapp.vercel.app//" />
        <meta
          property="og:title"
          content="Likhit Exam - Prepare for Your Driving License Written Exam"
        />
        <meta
          property="og:description"
          content="Prepare for your written driving license exam with Likhit Exam, an app designed to help you study and pass with confidence."
        />
        <meta
          property="og:image"
          content="/favicon.png"
        />
        <meta
          property="og:image"
          content="https://likhitexamapp.vercel.app/favicon.ico"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://likhitexamapp.vercel.app/" />
        <meta
          property="twitter:title"
          content="Likhit Exam - Prepare for Your Driving License Written Exam"
        />
        <meta
          property="twitter:description"
          content="Prepare for your written driving license exam with Likhit Exam, an app designed to help you study and pass with confidence."
        />
        <meta
          property="twitter:image"
          content="https://likhitexamapp.vercel.app/logo.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={poppins.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
