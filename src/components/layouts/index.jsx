
import { Navbar } from "./navbar";
import Footer from "@/components/fragments/Footer";
import { Toaster } from 'react-hot-toast';

export default function Layout({paddingCondition=true, children }) {
  return (
    <div className="grid overflow-x-hidden min-h-screen">
      <div className="w-full fixed top-0 z-50 border-b h-12">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="">
          <Navbar/>
        </div>
      </div>
      {paddingCondition ? (
        <main className="m-3  mt-30 w-full max-w-[95%] relative">{children}</main>
      ):(
        <main className="relative w-full">{children}</main>
      )}
      
      <Footer />
    </div>
  );
}
