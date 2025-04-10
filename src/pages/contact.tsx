import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      <div className="w-full min-h-screen h-fit mt-20 p-4 md:p-10 overflow-y-auto flex flex-col space-y-5 pb-10">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold text-5xl md:text-7xl">Contact Us</h1>
          <div>
            <h1 className="text-2xl text-center">Want to know more?</h1>
            <h1 className="text-2xl text-center">
              Reach out to us anytime you want!
            </h1>
          </div>
        </div>
        {/* Vibrant Contact Form */}
        <div className="max-w-5xl w-full mx-auto p-8 bg-white rounded-xl border-4 border-black">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                className="w-full h-[400px] p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
