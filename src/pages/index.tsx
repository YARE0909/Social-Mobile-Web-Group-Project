import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full overflow-y-auto flex flex-col space-y-5 pb-10">
        <div>
          <Carousel>
            {/* Slide 1 */}
            <div className="relative h-fit">
              <img
                src="https://images.unsplash.com/photo-1575380591643-b2c92368dc6d?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 1"
                className="w-full  h-[700px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <h2 className="text-white text-3xl font-bold">
                  Explore Timeless Cities
                </h2>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative h-fit">
              <img
                src="https://images.unsplash.com/photo-1472017053394-b29fded587cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 2"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <h2 className="text-white text-3xl font-bold">
                  Chase Sunsets, Not Deadlines
                </h2>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="relative h-fit">
              <img
                src="https://images.unsplash.com/photo-1577609060534-4254158ea447?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 3"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <h2 className="text-white text-3xl font-bold">
                  Create Stories Worth Telling
                </h2>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="flex flex-col items-center space-y-3 pt-10">
          <div>
            <h1 className="font-bold text-6xl">JomVia Around The World!</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Your story starts with a Jom</h1>
            <h1 className="text-xl">One click. Endless memories.</h1>
          </div>

          <div className="md:max-w-[60vw] w-full px-4 flex flex-col space-y-10 mt-14">
            <div className="flex flex-col gap-8 lg:flex lg:flex-row">
              <Image
                src="https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tropical Adventure"
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl">Dive into Paradise</h1>
                <h1>
                  Bask under golden sunsets, sip cocktails by turquoise beaches,
                  and rediscover yourself in the world’s most exotic
                  destinations. Whether it’s Bali or the Maldives — if it’s
                  paradise, we’ll take you there.
                </h1>
              </div>
            </div>

            <div className="flex flex-col lg:flex lg:flex-row-reverse gap-8">
              <Image
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cultural Exploration"
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl text-right">
                  Walk Through Living History
                </h1>
                <h1 className="text-right">
                  From Rome’s Colosseum to Kyoto’s shrines, experience a world
                  where ancient stories meet modern charm. Let JomVia craft your
                  cultural escape.
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:flex lg:flex-row">
              <Image
                src="https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mountain Trekking"
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl">Conquer the Peaks</h1>
                <h1>
                  Adventure awaits above the clouds. Embark on treks across the
                  Himalayas, Andes, or Alps — curated for thrill-seekers and
                  nature lovers alike.
                </h1>
              </div>
            </div>

            <div className="flex flex-col lg:flex lg:flex-row-reverse gap-8">
              <Image
                src="/images/home/4.JPG"
                alt="Luxury Travel"
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl text-right">
                  Travel in Style
                </h1>
                <h1 className="text-right">
                  Experience the world without compromise — five-star stays,
                  seamless itineraries, and tailored experiences that redefine
                  luxury travel.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
