import { useState, useEffect } from "react";
import { getHelloWorld } from "@/services/helloWorld";

export default function useGetHelloWorld(){
    const [pesan, setPesan] = useState("");

    useEffect(()=>{

        const fetchData = async () => {
            try {
                const response = await getHelloWorld();
                setPesan(response.data.pesan);
            }catch(error){
                console.error("error bagian:", error);
            }
        }

        fetchData();
    });

    return pesan;
}

 
