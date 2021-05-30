import Head from 'next/head'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>I am (H.O.O.D) Helping Others Obtain Destiny</title>
        <link rel='icon' href='/favicon.png' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Our Church is a premium HTML5 Church Website Template with Responsive design. Church Template includes many pages like Bulletin, Programs, events, sermons, ministries, working church contact form etc..'
        />
        <meta
          name='keywords'
          content='Church, Hood, Programs, Events, Helping Others Obtain Destiny, Charity, Non Profit'
        />
        <meta name='author' content='MMGThemes' />
      </Head>
      <Content />
    </div>
  )
}
