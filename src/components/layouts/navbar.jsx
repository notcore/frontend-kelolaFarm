import * as React from "react";
import { Link } from "react-router-dom";
import * as Atoms from "@/components/atoms";
import { Menu, Leaf, Sprout, CloudSun, BadgeDollarSign } from "lucide-react";

import { useAuth } from "@/context/authProvider";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const features = [
  {
    title: "Prediksi Bibit",
    href: "/tanaman",
    icon: <Sprout className="h-5 w-5 text-green-600" strokeWidth={2.5} />,
    description: "Hitung perkiraan bibit tanah anda.",
  },
  {
    title: "lihat jenis tanah",
    href: "/tanah",
    icon: <Sprout className="h-5 w-5 text-amber-600" strokeWidth={2.5} />,
    description: "Lihat jenis tanah dibeberapa kabupaten.",
  },
  {
    title: "Info Cuaca",
    href: "/cuaca",
    icon: <CloudSun className="h-5 w-5 text-blue-500" strokeWidth={2.5} />,
    description: "Cek perkiraan cuaca.",
  },
  {
    title: "Harga Pasar",
    href: "/harga-tanaman",
    icon: (
      <BadgeDollarSign className="h-5 w-5 text-yellow-600" strokeWidth={2.5} />
    ),
    description: "Pantau harga jual tanaman daerah Jogja.",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { auth, isAuth, logout, loading } = useAuth();

  if (loading) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Leaf className="h-7 w-7 text-green-600" strokeWidth={2.5} />
          KelolaFarm
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {/* ABOUT */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/"
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6"
                        >
                          <Leaf className="h-6 w-6 text-green-600 mb-2" />
                          <div className="mb-2 text-lg font-medium">
                            KelolaFarm
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Website sederhana untuk membantu petani DIY.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <ListItem to="/funfact" title="Dibalik Layar">
                      Dokumentasi proses dan sistem website.
                    </ListItem>

                    <ListItem to="/project" title="Project Lainnya">
                      Project sederhana by hyuma.dev
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* FITUR */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Fitur</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    {features.map((item) => (
                      <ListItem
                        key={item.title}
                        to={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* KONTAK (FIXED) */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/contact">Kontak</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {!isAuth ? (
            <div>
               <Button variant="ghost" asChild>
            <Link to="/login">login</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
            </div>

          ) : (
            <div>
              <Button variant="ghost" onClick={logout} asChild>
                <Link to="/login">logout</Link>
              </Button>
              </div>

          )}
         
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <Atoms.Typo>Menu KelolaFarm</Atoms.Typo>
                </DialogTitle>
              </DialogHeader>

              <div className="grid h-[320px] gap-4 py-4">
                <div className="overflow-y-scroll overflow-x-hidden">
                  {features.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
                    >
                      <div className="rounded-md bg-muted p-2">{item.icon}</div>
                      <div>
                        <div className="text-sm font-semibold">
                          <Atoms.Typo>{item.title}</Atoms.Typo>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <Atoms.Typo>{item.description}</Atoms.Typo>
                        </div>
                      </div>
                    </Link>
                  ))}
                  </div>
                  {!isAuth ? (
                    <div className="grid grid-cols-2 gap-5">
                      <Button variant="outline" asChild>
                        <Link to="/login" onClick={() => setOpen(false)}>
                          login
                        </Link>
                      </Button>
                      <Button asChild>
                        <Link to="/register" onClick={() => setOpen(false)}>
                          register
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <Button asChild>
                      <Link
                        to="/login"
                        onClick={() => {setOpen(false); logout()}}
                      >
                        logout
                      </Link>
                    </Button>
                  )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}

/* =====================
   LIST ITEM (SAFE)
===================== */
const ListItem = React.forwardRef(
  ({ className, title, children, to, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);

ListItem.displayName = "ListItem";
