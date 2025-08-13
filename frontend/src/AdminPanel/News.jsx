export default function News(){


    return(

    <>

    <section className="max-w-[1100px] w-full m-auto pt-10">
        
        <h2 className="text-3xl font-bold ">
            Project
        </h2>


        <div>
            <div className="grid grid-cols-2 gap-20 mt-5">
                <div>
                    <div className="items-center flex justify-center font-bold text-8xl text-white w-[90%] h-80 bg-orange-500 rounded-xl"> + </div>
                </div>

                <div>
                    <p>title</p>
                    <input type="text" className=" w-[90%] h-16 rounded-xl p-3 border " name="" id="" />
                    <p>description</p>
                    <textarea name="" className="resize-none w-[90%] h-32 p-3 rounded-xl border" id=""></textarea>
                    

                       <button className="bg-orange-500 rounded-xl py-3 px-3 text-white w-[90%] mt-3 ">Create New Project +</button>
                </div>
            </div>
        </div>



                
        <h2 className="text-3xl font-bold mt-5">
           Active Project

           
        </h2>

                <div className="mt-20 grid grid-cols-3 gap-4">
          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>

          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>

          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>

                    <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>

          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>

          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>
        </div>

    </section>

    </>
    )
} 