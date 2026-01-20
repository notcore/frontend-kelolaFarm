import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Toaster } from 'react-hot-toast';

import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";
import Home from "@/pages/Home";
import Landing from "@/pages/index";
import HargaTanaman from "@/pages/menu/harga-tanaman"
import Lahan from "@/pages/menu/lahan"
import CreateLahan from "@/pages/menu/lahan/buat-lahan"

import NoAuthRoute from "@/router/NoAuthRoute";
import NoGuestRoute from "@/router/NoGuestRoute";


import { AuthProvider } from "@/context/authProvider";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/harga-tanaman" element={<HargaTanaman />} />

        <Route element={<NoAuthRoute />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<NoGuestRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/lahan" element={<Lahan/>} />
          <Route path="/buat-lahan" element={<CreateLahan />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </StrictMode>
);
