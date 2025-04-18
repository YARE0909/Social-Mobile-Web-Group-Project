import Layout from "@/components/Layout";
import Image from "next/image";

export default function Index() {
  return (
    <Layout>
      <div className="w-full min-h-screen h-fit pt-30 p-10 overflow-y-auto flex flex-col space-y-5 pb-10">
        <div className="w-full flex flex-col lg:flex lg:flex-row justify-between">
          <div className="flex flex-col items-start md:max-w-1/3 space-y-4">
            <h1 className="font-bold text-5xl md:text-7xl">About Us</h1>
            <h1>
              At <strong>JomVia</strong>, we believe that travel isn’t just about the destination — it’s about the journey, the stories you collect, and the people you meet along the way. We're here to turn your travel dreams into unforgettable experiences.
            </h1>
            <h1>
              Founded with a passion for exploration, JomVia helps thousands of travelers explore the world stress-free, by offering tailored experiences, curated itineraries, and around-the-clock support.
            </h1>
            <h1>
              Whether you're chasing the northern lights in Iceland, soaking in the culture of Kyoto, or wandering the alleys of Marrakech — our mission is to be your trusted companion.
            </h1>
            <h1>
              From solo backpackers to family vacations, luxury retreats to budget getaways — we cover it all. Our dedicated team ensures every journey feels seamless, personal, and above all, magical.
            </h1>
            <h1>
              Let’s make memories across continents. With JomVia, the world is just a “jom” away.
            </h1>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col justify-between gap-2">
              <Image
                src="/images/home/1.JPG"
                alt="Beach getaway"
                width={500}
                height={500}
                className="border-4 border-black rounded-md"
              />
              <Image
                src="/images/home/2.JPG"
                alt="Historic streets"
                width={500}
                height={500}
                className="border-4 border-black rounded-md"
              />
              <Image
                src="/images/home/4.JPG"
                alt="Mountain adventure"
                width={500}
                height={500}
                className="border-4 border-black rounded-md"
              />
            </div>
            <div>
              <Image
                src="/images/home/3.JPG"
                alt="City skyline"
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
