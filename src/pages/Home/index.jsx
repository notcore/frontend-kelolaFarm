import Layout from "@/components/layouts";
import { useAuth } from "@/context/authProvider"
import React from 'react';
import HeaderSection from "@/components/fragments/HeaderSection";
import FeatureGrid from "@/components/fragments/FeatureGrid";
import LandSection from "@/components/fragments/LandSection";
import SalesSection from "@/components/fragments/SalesSection";
import BottomSection from "@/components/fragments/BottomSection";


export default function Home(){
    const { logout, user } = useAuth();

    return ( 
        <Layout paddingCondition={false}>
            <button onClick={logout}>
                logout
            </button>

 <main className="min-h-screen bg-white font-helvetica selection:bg-green-100">
      <div className="max-w-5xl mx-auto w-full">
        {/* Urutan Section sesuai Gambar */}
        <HeaderSection />
        <FeatureGrid />
        <LandSection />
        <SalesSection />
        <BottomSection />
      </div>
    </main>
        </Layout>
    );
};
