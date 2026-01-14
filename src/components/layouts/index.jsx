
import { Navbar } from "./navbar";
import Footer from "@/components/fragments/Footer";

export default function Layout({paddingCondition=true, children }) {
  return (
    <div className="grid min-h-screen">
      <div className="w-full fixed top-0 z-50 border-b h-12">
        <div className="">
          <Navbar/>
        </div>
      </div>
      {paddingCondition ? (
        <main className="m-3  mt-30 w-full max-w-[95%]">{children}</main>
      ):(
        <main className="  w-full">{children}</main>
      )}
      
      <Footer />
    </div>
  );
}
