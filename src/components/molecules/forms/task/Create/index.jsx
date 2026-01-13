import * as Atoms from "@/components/atoms";
import { useState } from "react";
import api from "@/lib/api";

export default function CreateTask() {

  const [data,setData] = useState({
    nama_tugas : "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

      try{
          const response = await api.post('/task',data);
          console.log(response.data);
          alert("success! berhasilll");

          setData({nama_tugas: ""});
      }catch(error){
          console.error("gagal:"+error);
          alert("gagal");
      }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-slate-200 p-5 md:p-8 w-full h-full rounded-xl">
      <div className="my-5 mb-5">
        <Atoms.Typo Variant="h1">Task</Atoms.Typo>
        <Atoms.Typo Variant="p">buat tugas barumu disini</Atoms.Typo>        
      </div>
      <Atoms.FloatLabel
        Label="tambah task"
        Name="nama"
        Type="text"
        Placeholder="e.g main game"
        ClassName="mt-10"
        value={data.nama_tugas}
        onChange={(e) => setData({ ...data, nama_tugas: e.target.value })}
      />
      <Atoms.Button ClassName="mt-13 w-full" Type="submit">
        selesai
      </Atoms.Button>
    </form>
  );
}
