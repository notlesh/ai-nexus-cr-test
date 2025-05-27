mport Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Travel Blog</title>
        <meta name="description" content="A personal travel blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my travel blog!</h1>
      </main>

      <footer>
        <p>Created by Me</p>
      </footer>
    </div>
  )
}
