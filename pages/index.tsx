import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NYC DOT Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="bg-gray-500 lg:px-56">
        <main className="flex flex-col h-screen p-8 items-center bg-white">
          <h1 className="text-3xl font-bold text-blue-800">
            Welcome to the New York City Department of Transportation
          </h1>
          <p className="mt-3 text-blue-800">
            Click on one of the links below to navigate through the website
          </p>
          <div className="flex flex-col lg:flex-row mt-8">
            <Link
              className="border bg-black text-white font-semibold mb-5 lg:mb-0 lg:mr-8"
              href="/racks"
            >
              <img
                src="/static/new-bike-rack.webp"
                alt="bike rack"
                width={600}
                height={600}
              />
              <p className="lg:w-2/3 text-center mx-auto p-2">
                Click here to see the types of bike racks found throughout the
                city
              </p>
            </Link>
            <Link
              className="border bg-black text-white font-semibold"
              href="/data"
            >
              <img
                src="/static/share-data.png"
                alt="bike rack"
                width={500}
                height={200}
              />
              <p className="lg:w-2/3 text-center mx-auto p-2">
                Click here to view data for each bike rack installed in the city
              </p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
