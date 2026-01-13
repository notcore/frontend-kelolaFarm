import React, { useState } from 'react';
import Typo from "@/components/atoms/TypoGrafis";
import Card from "@/components/atoms/Card";
import { MapPin,LogOut, Bell, Settings, User } from "lucide-react";
import {useAuth} from "@/context/authProvider";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HeaderSkeleton } from "@/components/fragments/headerSkeleton"


const HeaderSection = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <HeaderSkeleton />;
  }

  return (
    <section className="relative mb-12">
      <div className="h-48 md:h-64 w-full bg-gray-300 relative overflow-hidden md:rounded-b-[2rem]">
        <img 
          src="/images/rumah-kaca.jpg" 
          alt="Pemandangan" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="absolute -bottom-8 left-4 right-4 md:left-10 md:right-10 flex justify-center">
        <Card className="w-full max-w-4xl p-3 md:p-4 flex items-center justify-between backdrop-blur-md shadow-sm bg-white/95">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200">
              <User />
            </div>

            <Typo Variant="h2" ClassName="text-base md:text-lg leading-none">
              {user?.name}
            </Typo>
          </div>

          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="w-9 h-9 flex items-center justify-center bg-gray-50 text-gray-500 rounded-xl hover:bg-green-100 hover:text-green-600 transition-colors"
          >
            <LogOut size={18} />
          </button>
        </Card>
      </div>
    </section>
  );
};

export default HeaderSection;