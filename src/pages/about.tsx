import Layout from "@/components/Layout";
import Image from "next/image";

export default function Index() {
  return (
    <Layout>
      <div className="w-full min-h-screen h-fit pt-30 p-10 overflow-y-auto flex flex-col space-y-5 pb-10">
        <div className="w-full flex flex-col lg:flex lg:flex-row justify-between">
          <div className="flex flex-col items-start md:max-w-1/3">
            <h1 className="font-bold text-5xl md:text-7xl">About Us</h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsa at atque perferendis illum, possimus delectus magnam, nulla
              ducimus accusamus fugiat incidunt maxime eius distinctio corrupti
              itaque esse ullam odit?
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsa at atque perferendis illum, possimus delectus magnam, nulla
              ducimus accusamus fugiat incidunt maxime eius distinctio corrupti
              itaque esse ullam odit?
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsa at atque perferendis illum, possimus delectus magnam, nulla
              ducimus accusamus fugiat incidunt maxime eius distinctio corrupti
              itaque esse ullam odit?
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsa at atque perferendis illum, possimus delectus magnam, nulla
              ducimus accusamus fugiat incidunt maxime eius distinctio corrupti
              itaque esse ullam odit?
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsa at atque perferendis illum, possimus delectus magnam, nulla
              ducimus accusamus fugiat incidunt maxime eius distinctio corrupti
              itaque esse ullam odit?
            </h1>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col justify-between gap-2">
              <Image
                src="/images/home/1.JPG"
                alt=""
                width={500}
                height={500}
                className="border-4 border-black rounded-md"
              />
              <Image
                src="/images/home/2.JPG"
                alt=""
                width={500}
                height={500}
                className="border-4 border-black rounded-md"
              />
              <Image
                src="/images/home/4.JPG"
                alt=""
                width={500}
                height={500}
                className="border-4 border-black rounded-md"
              />
            </div>
            <div>
              <Image
                src="/images/home/3.JPG"
                alt=""
                width={500}
                height={500}
                className="border-4 border-black rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
