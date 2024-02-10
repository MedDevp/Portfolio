import React from "react";
import Imgage from "../../assets/coding.png"
const Home = () =>{
    return(
        <>
            <div className="space-y-8 pt-32 mb-24 md:my-0 md:space-y-0 md:flex w-3/4 mx-auto items-center justify-between" id="HomeSection">
                <div className="">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#42446E]">
                        Hi,👋<br />
                        My Name is<br />
                        <span className="text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text">Mohamed Abail</span><br />
                        Web Developer
                    </h1>
                    <button className="mt-12 border-[#42446E]  border-2 px-5 py-2 rounded-md transition-all duration-500 ease-in-out relative before:bg-[#42446E] before:content-'' before:z-0  before:absolute before:left-[-100%] before:bottom-0 before:w-full before:min-h-[100%] before:ease-in-out before:duration-300 hover:before:left-0  overflow-hidden hover:text-white"><span className="z-10 relative ">Contact me</span></button>
                </div>
                <div className="md:w-[400px] ">
                    <img src={Imgage} alt="Coding" className="w-full"/>
                </div>
            </div>

            <span className="absolute left-10 top-7 w-3 h-3 bg-cyan-500 rounded-full"></span>
            <span className="absolute left-36 top-14 w-1 h-1 bg-red-500 rounded-full"></span>
            <span className="absolute left-80 top-32 w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="absolute left-96 top-28 w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="absolute left-72 top-24 w-1 h-1 bg-cyan-500 rounded-full"></span>
            <span className="absolute left-8 top-[350px] md:top-96 w-3 h-3 bg-yellow-200 md:bg-yellow-300 rounded-full"></span>
            <span className="absolute left-24 top-[430px] md:top-[400px] w-1 h-1 bg-red-500 rounded-full"></span>
            <span className="absolute left-28 top-[450px] w-3 h-3 bg-green-500 rounded-full"></span>

            
        </>
    )
}
export default Home;