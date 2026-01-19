import * as React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as Atoms from "@/components/atoms";
import { Menu, X, TrendingUp, Leaf, Sprout, Calculator, CloudSun, BadgeDollarSign } from "lucide-react";

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
    icon: <Calculator className="h-5 w-5 text-green-600" strokeWidth={2.5} />,
    description: "Hitung perkiraan bibit yang dibutuhkan tanah anda.",
  },
  {
    title: "Jenis tanah",
    href: "/tanah",
    icon: <Sprout className="h-5 w-5 text-amber-600" strokeWidth={2.5} />,
    description: "Lihat jenis tanah dibeberapa kabupaten.",
  },
  {
    title: "Info ",
    href: "/cuaca",
    icon: <CloudSun className="h-5 w-5 text-blue-500" strokeWidth={2.5} />,
    description: "Cek perkiraan cuaca dibeberapa kabupaten.",
  },
  {
    title: "Harga Pasar",
    href: "/harga-tanaman",
    icon: (
      <TrendingUp className="h-5 w-5 text-yellow-600" strokeWidth={2.5} />
    ),
    description: "Pantau harga jual tanaman dibeberapa kabupaten.",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { auth, isAuth, logout, loading } = useAuth();

  if (loading) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex md:ml-[5%] xl:ml-[3%] items-center gap-2 font-komerik text-xl">
          <Leaf className="h-7 w-7 text-green-600" strokeWidth={2.5} />
          kelolaFarm
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
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
                          <div className="mb-2 text-lg font-komerik">
                            kelolaFarm
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Website sederhana untuk membantu petani DIY.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <ListItem to="https://github.com/notcore/frontend-kelolaFarm" title="frontend">
                      source code frontend with fronted
                    </ListItem>

                    <ListItem to="https://github.com/notcore/backend-kelolaFarm" title="backend">
                      source code backend with laravel
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

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

     <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setOpen(true)}
        className="relative z-40"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100, y: -100, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0, x: 100, y: -100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-4 top-4 z-50 w-[90%] max-w-[350px] overflow-hidden rounded-3xl bg-background"
            >
              {/* Header Menu */}
              <div className="flex items-center justify-between border-b p-5">
                <div className="flex items-center gap-2">
                  <div className="rounded-full p-2">
                    <Leaf className="h-7 w-7 text-green-600" />
                  </div>
                  <Atoms.Typo variant={"h1"} className="text-lg font-bold tracking-tight">
                    kelolaFarm
                  </Atoms.Typo>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                <div className="grid gap-2">
                  {features.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-2xl p-3 transition-all duration-200 hover:bg-slate-100 active:scale-95"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <Atoms.Typo className="text-sm font-bold text-foreground">
                          {item.title}
                        </Atoms.Typo>
                        <Atoms.Typo className="text-xs text-muted-foreground/80 leading-tight">
                          {item.description}
                        </Atoms.Typo>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t p-5">
                {!isAuth ? (
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="rounded-xl border-none bg-background shadow-sm" asChild>
                      <Link to="/login" onClick={() => setOpen(false)}>
                        <Atoms.Typo>Login</Atoms.Typo>
                      </Link>
                    </Button>
                    <Button className="rounded-xl" variant="outline" asChild>
                      <Link to="/register" onClick={() => setOpen(false)}>
                        <Atoms.Typo>Daftar</Atoms.Typo>
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <Button 
                  className={"text-white w-full"}
                    onClick={() => {setOpen(false); logout();}}
                  >
                    <Atoms.Typo className="text-white">Logout</Atoms.Typo>
                  </Button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
      </div>
    </header>
  );
}

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
