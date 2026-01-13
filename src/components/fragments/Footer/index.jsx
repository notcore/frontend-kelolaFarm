import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Instagram, Github } from "lucide-react";
import * as Atoms from "@/components/atoms";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2">
          <Atoms.Typo Variant={"h1"}>KelolaFarm Project</Atoms.Typo>
          <Atoms.Typo className="text-sm text-white/70">
            Platform untuk memantau harga, kualitas, dan hasil tanaman Anda secara praktis.
          </Atoms.Typo>
        </div>

      <div className="flex flex-col gap-2">
  <Atoms.Typo className="font-semibold"></Atoms.Typo>
  <div className="w-auto flex flex-col gap-2">
    <Link
      to="/about"
      className="hover:text-green-500 flex items-center gap-1 transition-colors group"
    >
      about
      <ArrowUpRight
        size={20}
        className="transition-transform duration-200 group-hover:-translate-y-1"
      />
    </Link>
    <Link
      to="https://github.com/notcore/"
      className="hover:text-green-500 flex items-center gap-1 transition-colors group"
    >
      source code
      <ArrowUpRight
        size={20}
        className="transition-transform duration-200 group-hover:-translate-y-1"
      />
    </Link>
  </div>
</div>


        <div className="flex flex-col gap-2">
          <Atoms.Typo className="font-semibold">kontak</Atoms.Typo>
          <div className="flex gap-4 mt-2">
            <a
              href="https://wa.me/6288214821145"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors flex items-center gap-1"
            >
              <Phone size={18} />
              Whatsapp
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition-colors flex items-center gap-1"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a
              href="https://github.com/notcore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors flex items-center gap-1"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center text-white/70">
        &copy; 2026 KelolaFarm project.
      </div>
    </footer>
  );
}
