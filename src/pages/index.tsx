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
                src="https://plus.unsplash.com/premium_photo-1700955413237-5e781377e055?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 1"
                className="w-full  h-[700px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <h2 className="text-white text-3xl font-bold">Slide 1 Text</h2>
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
                <h2 className="text-white text-3xl font-bold">Slide 2 Text</h2>
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
                <h2 className="text-white text-3xl font-bold">Slide 3 Text</h2>
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
            <h1 className="text-xl">Your one stop for all your travel needs</h1>
          </div>
          <div className="md:max-w-[60vw] w-full px-4 flex flex-col space-y-10 mt-14">
            <div className="flex flex-col gap-8 lg:flex lg:flex-row">
              <Image
                src="/images/home/1.JPG"
                alt=""
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing eli
                </h1>
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  magni excepturi beatae nemo quia quisquam ipsam facere ab?
                  Voluptas, autem repellat aut corrupti aliquid provident
                  laudantium voluptatibus recusandae temporibus aperiam.
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex lg:flex-row-reverse gap-8">
              <Image
                src="/images/home/2.JPG"
                alt=""
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl text-right">
                  Lorem ipsum, dolor sit amet consectetur adipisicing eli
                </h1>
                <h1 className="text-right">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  magni excepturi beatae nemo quia quisquam ipsam facere ab?
                  Voluptas, autem repellat aut corrupti aliquid provident
                  laudantium voluptatibus recusandae temporibus aperiam.
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:flex lg:flex-row">
              <Image
                src="/images/home/6.JPG"
                alt=""
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing eli
                </h1>
                <h1 className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  magni excepturi beatae nemo quia quisquam ipsam facere ab?
                  Voluptas, autem repellat aut corrupti aliquid provident
                  laudantium voluptatibus recusandae temporibus aperiam.
                </h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex lg:flex-row-reverse gap-8">
              <Image
                src="/images/home/4.JPG"
                alt=""
                width="500"
                height="500"
                className="w-[650px] max-h-96 object-cover"
              />
              <div className="max-w-96">
                <h1 className="font-bold text-2xl text-right">
                  Lorem ipsum, dolor sit amet consectetur adipisicing eli
                </h1>
                <h1 className="text-right">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  magni excepturi beatae nemo quia quisquam ipsam facere ab?
                  Voluptas, autem repellat aut corrupti aliquid provident
                  laudantium voluptatibus recusandae temporibus aperiam.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
