import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/blog.css'
import '../styles/subscribe.css'
import '../styles/services.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>I am (H.O.O.D) Helping Others Obtain Destiny</title>
        <link rel='icon' href='/favicon.png' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='I am (H.O.O.D) Helping Others Obtain Destiny is a non-profit that is devoted to changing the lives of the youth. Kids are more comfortable joining a gang, than reading a book and Helping Others Obtain Destiny wants to reverse the cycle. We are all over Chicago southside and westside making a difference.'
        />
        <meta
          name='keywords'
          content='Church, Hood, Programs, Events, Helping Others Obtain Destiny, Charity, Non Profit'
        />
        <meta name='author' content='MMGThemes' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;1,200;1,300;1,400&display=swap'
          rel='stylesheet'
        />
        <script
          async
          defer
          src='https://dailyverses.net/get/verse.js?language=kjv'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
