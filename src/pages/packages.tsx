import Layout from "@/components/Layout";
import Image from "next/image";

export default function Index() {
  const data: {
    title: string;
    content: string;
    link: string;
  }[] = [
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi inventore eius temporibus voluptas facilis maiores. Laboriosam eius cupiditate ad reiciendis voluptate iusto eveniet tempora commodi sequi, quae dolore dolorum!",
      link: "/images/home/1.JPG",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi inventore eius temporibus voluptas facilis maiores. Laboriosam eius cupiditate ad reiciendis voluptate iusto eveniet tempora commodi sequi, quae dolore dolorum!",
      link: "/images/home/1.JPG",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi inventore eius temporibus voluptas facilis maiores. Laboriosam eius cupiditate ad reiciendis voluptate iusto eveniet tempora commodi sequi, quae dolore dolorum!",
      link: "/images/home/1.JPG",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi inventore eius temporibus voluptas facilis maiores. Laboriosam eius cupiditate ad reiciendis voluptate iusto eveniet tempora commodi sequi, quae dolore dolorum!",
      link: "/images/home/1.JPG",
    },
  ];
  return (
    <Layout>
      <div className="w-full min-h-screen h-fit mt-20 p-4 md:p-10 overflow-y-auto flex flex-col space-y-5 pb-10">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold text-5xl md:text-7xl">Packages</h1>
          <h1 className="text-2xl text-center">
            Choose from the various packages we offer below!
          </h1>
        </div>
        <div className="w-full flex flex-col space-y-10">
          <div className="w-full flex flex-col items-center">
            <div className="w-full lg:max-w-3/4 flex flex-col items-center">
              <div className="w-full flex justify-start">
                <h1 className="font-bold text-3xl">Family Packages</h1>
              </div>
              <div className="flex flex-col lg:flex lg:flex-row justify-between w-full gap-4 mt-4">
                {data.map((item) => {
                  return (
                    <div
                      className="p-4 max-w-80 rounded-md shadow-2xl border-3 border-black"
                      key={item.link}
                    >
                      <div>
                        <Image
                          src={item.link}
                          alt=""
                          width={1000}
                          height={1000}
                          className="w-full h-full rounded-md pb-2"
                        />
                      </div>
                      <div>
                        <h1 className="font-bold text-2xl">{item.title}</h1>
                      </div>
                      <div>
                        <h1>{item.content}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full lg:max-w-3/4 flex flex-col items-center">
              <div className="w-full flex justify-start">
                <h1 className="font-bold text-3xl">Group Packages</h1>
              </div>
              <div className="flex flex-col lg:flex lg:flex-row justify-between w-full gap-4 mt-4">
                {data.map((item) => {
                  return (
                    <div
                      className="p-4 max-w-80 rounded-md shadow-2xl border-3 border-black"
                      key={item.link}
                    >
                      <div>
                        <Image
                          src={item.link}
                          alt=""
                          width={1000}
                          height={1000}
                          className="w-full h-full rounded-md pb-2"
                        />
                      </div>
                      <div>
                        <h1 className="font-bold text-2xl">{item.title}</h1>
                      </div>
                      <div>
                        <h1>{item.content}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full lg:max-w-3/4 flex flex-col items-center">
              <div className="w-full flex justify-start">
                <h1 className="font-bold text-3xl">Student Packages</h1>
              </div>
              <div className="flex flex-col lg:flex lg:flex-row justify-between w-full gap-4 mt-4">
                {data.map((item) => {
                  return (
                    <div
                      className="p-4 max-w-80 rounded-md shadow-2xl border-3 border-black"
                      key={item.link}
                    >
                      <div>
                        <Image
                          src={item.link}
                          alt=""
                          width={1000}
                          height={1000}
                          className="w-full h-full rounded-md pb-2"
                        />
                      </div>
                      <div>
                        <h1 className="font-bold text-2xl">{item.title}</h1>
                      </div>
                      <div>
                        <h1>{item.content}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
