import { useState, useEffect } from 'react'; 
import CreateTask from "@/components/molecules/forms/task/create";
// import Analysis from "@/assets/ilustrasi/analysis.png";
import Layout from "@/components/layouts/";

function TaskCreate() {  
  const dataHelloWorld = Hooks.useGetHelloWorld();
  const dataHome = Hooks.useGetHome();

  return (
    <Layout>
      <div className='flex min-h-auto mt-10 max-w-[90%] sm:max-w-[500px] mx-auto font-helvetica justify-center items-center'> 
        <CreateTask/>
      </div>
    </Layout>
  )
}

export default TaskCreate;
