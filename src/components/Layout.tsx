import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-fit overflow-hidden flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
}
