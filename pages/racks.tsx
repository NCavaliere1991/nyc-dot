import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const BikeRacksPage = () => {
  return (
    <>
      <Head>
        <title>NYC DOT Bike Rack Types</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-gray-500 lg:px-32">
        <div className="p-8 lg:px-28 bg-white">
          <div className="lg:w-1/2 text-lg text-center mx-auto">
            <h1 className="font-semibold text-blue-800">
              New York City provides free bicycle parking on sidewalks
              throughout the five boroughs. There are four types of racks and
              they are as follows:
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-5 border rounded-lg border-black p-8 bg-green-800">
            <p className="font-bold text-2xl text-white lg:mr-16">
              Small Hoop:{' '}
              <img
                src="https://ncavaliere1991.github.io/nyc-dot/small-hoop.webp"
                width={500}
                height={500}
                alt="small hoop"
                className="mt-2 border rounded-md"
              />
            </p>
            <div className="flex flex-col mt-5 lg:mt-0">
              <h1 className="text-2xl text-white">Description</h1>
              <hr className="border border-white" />
              <p className="mt-2 text-white">
                18&quot;-diameter, cast-metal circle installed on retired
                parking meter poles.
              </p>
              <h1 className="text-2xl text-white mt-3">Siting:</h1>
              <ul className="list-disc text-white ml-5">
                <li>On existing, retired parking meter poles</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-5 border rounded-lg border-black p-8 bg-green-800">
            <p className="font-bold text-2xl text-white lg:mr-16">
              Large Hoop:{' '}
              <img
                src="https://ncavaliere1991.github.io/nyc-dot/large-hoop.webp"
                width={500}
                height={500}
                alt="large hoop"
                className="mt-2 border rounded-md"
              />
            </p>
            <div className="flex flex-col mt-5 lg:mt-0">
              <h1 className="text-2xl text-white">Description</h1>
              <hr className="border border-white" />
              <p className="mt-2 text-white">
                33.7&quot;-diameter, cast-metal circle with a horizontal bar
                across the center meter poles.
              </p>
              <h1 className="text-2xl text-white mt-3">Siting:</h1>
              <ul className="list-disc text-white ml-5">
                <li>Must be installed on city-owned property</li>
                <li>12-foot minimum sidewalk width</li>
                <li>
                  Away from pedestrian flow, usually at the curb, and always
                  away from crosswalks
                </li>
                <li>
                  If installed at the curb, clearance from the curb must be a
                  minimum of 18 inches
                </li>
                <li>Can only be installed on concrete</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-5 border rounded-lg border-black p-8 bg-green-800">
            <p className="font-bold text-2xl text-white lg:mr-16">
              U-Rack:{' '}
              <img
                src="https://ncavaliere1991.github.io/nyc-dot/u-rack.jpeg"
                width={500}
                height={500}
                alt="u-rack"
                className="mt-2 border rounded-md"
              />
            </p>
            <div className="flex flex-col mt-5 lg:mt-0">
              <h1 className="text-2xl text-white">Description</h1>
              <hr className="border border-white" />
              <p className="mt-2 text-white">
                A single arch rack that parks 2 bikes and maintains a slim
                profile when not in use.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-5 border rounded-lg border-black p-8 bg-green-800">
            <p className="font-bold text-2xl text-white lg:mr-16">
              Wave Rack:{' '}
              <img
                src="https://ncavaliere1991.github.io/nyc-dot/wave-rack.webp"
                width={500}
                height={500}
                alt="small hoop"
                className="mt-2 border rounded-md"
              />
            </p>
            <div className="flex flex-col mt-5 lg:mt-0">
              <h1 className="text-2xl text-white">Description</h1>
              <hr className="border border-white" />
              <p className="mt-2 text-white">
                A triple arch rack that can fit up to five bicycles at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BikeRacksPage
