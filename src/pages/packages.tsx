import Layout from "@/components/Layout";
import Image from "next/image";

export default function Index() {
  const familyPackages = [
    {
      title: "Family Getaway - Hills",
      content:
        "Escape to the serene hill stations with our all-inclusive family package. Includes 3 nights stay, meals, and guided tours.",
      link: "https://images.unsplash.com/photo-1471443290059-92acdee54040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Beachside Bonding",
      content:
        "Enjoy sun, sand, and surf with your loved ones. Includes beachfront resort stay, water activities, and evening bonfires.",
      link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cultural Heritage Trail",
      content:
        "Explore historical sites and cultural hotspots with your family. Includes transport, accommodations, and local experiences.",
      link: "https://images.unsplash.com/photo-1718325826822-dd7fa3ab227c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const groupPackages = [
    {
      title: "Adventure Trek Pack",
      content:
        "Designed for thrill-seeking groups—includes guided treks, camping gear, and meals in the mountains.",
      link: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Corporate Team Retreat",
      content:
        "Perfect for company offsites with team-building activities, workshops, and relaxation. Fully customizable.",
      link: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Friends’ Road Trip",
      content:
        "A curated road trip experience for friend groups—includes vehicle rental, route map, and stays along the way.",
      link: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const studentPackages = [
    {
      title: "Campus to Hills",
      content:
        "A budget-friendly adventure package for college students. Includes hiking, campfire nights, and student discounts.",
      link: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Study Tour Special",
      content:
        "Blend education with exploration—ideal for school/college trips. Includes academic site visits and guided experiences.",
      link: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Internship Abroad Program",
      content:
        "Travel and learn with our international internship program for students. Includes visa assistance and accommodation.",
      link: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const renderSection = (title: string, packages: typeof familyPackages) => (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-screen-xl flex flex-col items-center">
        <div className="w-full flex justify-start mb-4">
          <h1 className="font-bold text-3xl">{title}</h1>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-6">
          {packages.map((item, index) => (
            <div
              className="p-4 w-full sm:w-[300px] rounded-md shadow-2xl border border-black"
              key={`${item.title}-${index}`}
            >
              <Image
                src={item.link}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h1 className="font-bold text-xl mb-1">{item.title}</h1>
              <p className="text-sm text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="w-full min-h-screen mt-20 p-4 md:p-10 overflow-y-auto flex flex-col space-y-16 pb-20">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold text-5xl md:text-7xl">Packages</h1>
          <h2 className="text-2xl text-center">
            Choose from the various packages we offer below!
          </h2>
        </div>
        {renderSection("Family Packages", familyPackages)}
        {renderSection("Group Packages", groupPackages)}
        {renderSection("Student Packages", studentPackages)}
      </div>
    </Layout>
  );
}
