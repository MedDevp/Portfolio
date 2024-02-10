import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Contact = () =>{
    return(
        <>
            <div className="w-4/5 mx-auto py-16 md:py-32"  id="Contact">
                <h1 className="text-2xl my-9 md:my-0 md:text-4xl text-[#42446E] font-bold pb-4">Contact</h1>
                <div className=" flex flex-wrap gap-10 md:flex-row ùd:justify-between md:items-center">
                <div className="space-y-5">
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faPhone} className="bg-green-500 text-white p-3 text-sm md:text-xl rounded-lg"/>
                        <div>
                            <p className="text-gray-400">Call me</p>
                            <p>+212 772149364</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faEnvelope} className="bg-green-500 text-white p-3 text-sm md:text-xl rounded-lg"/>
                        <div>
                            <p className="text-gray-400">E-mail me</p>
                            <p>mohamedabail.in@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faLocationDot} className="bg-green-500 text-white p-3 px-[14px] text-sm md:text-xl rounded-lg"/>
                        <div>
                            <p className="text-gray-400">Address</p>
                            <p>Agadir, Souss-Massa, Maroc </p>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/5">
                    <form className="space-y-3 w-full md:ml-16">
                        <div><input type="text" placeholder="Full name" className="border-[1px] border-[#6666663a] rounded-xl pl-4 py-3 outline-none w-full md:w-4/5"/></div>
                        <div><input type="text" placeholder="Your E-mail" className="border-[1px] border-[#6666663a] rounded-xl pl-4 py-3 outline-none w-full md:w-4/5"/></div>
                        <div>
                          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className="border-[1px] border-[#6666663a] rounded-xl pl-4 py-2 outline-none w-full md:w-4/5"></textarea>  
                        </div>
                        <button type="submit" className="border-green-500  border-2 px-5 py-2 rounded-md transition-all duration-500 ease-in-out relative before:bg-green-500 before:content-'' before:z-0  before:absolute before:left-[-100%] before:bottom-0 before:w-full before:min-h-[100%] before:ease-in-out before:duration-300 hover:before:left-0  overflow-hidden hover:text-white"><span className="z-10 relative ">Submit Message</span></button>
                    </form>
                </div>
            </div>
            </div>
            
        </>
    )
}
export default Contact;