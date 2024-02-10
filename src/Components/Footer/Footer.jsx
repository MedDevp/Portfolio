import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
const Footer = ()=>{

      
    return(
        <>
            <footer>
                <div className="w-4/5 mx-auto space-y-2 md:space-y-0 md:flex justify-between items-center py-6 border-t-2">
                        <div>
                            <p className="text-sm md:text-md">&copy; 2024 . All Rights Reserved</p>
                        </div>
                        <div className="">
                            <p className="text-sm md:text-md">Designed by Mohamed Abail</p>
                        </div>
                    <div className="flex md:justify-between items-center  space-x-6">
                        <a href="#"  target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center bg-green-400 hover:bg-green-600"><i class="fa-brands fa-facebook-f  text-white text-sm "></i></a>
                        <a href="https://www.linkedin.com/in/mohamed-abail-08739a267" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center bg-green-400 hover:bg-green-600"><i class="fa-brands fa-linkedin-in text-white text-sm "></i></a>
                        <a href="https://github.com/MedDevp" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center bg-green-400 hover:bg-green-600"><i class="fa-brands fa-github text-white text-sm "></i></a>
                        <a href="https://mail.google.com/mail/u/2/#inbox?compose=new&to=mohamedabail.in@gmail.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center bg-green-400 hover:bg-green-600"><i class="fa-regular fa-envelope text-white text-sm "></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;