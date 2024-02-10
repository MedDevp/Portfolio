import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState  , useEffect  } from "react";


const navlin = [
    {
        link : "Home",
        url : "#Home"
    },
    {
        link : "About",
        url : "#about"
    },
    {
        link : "Tech Stack",
        url : "#Technologies"
    },
    {
        link : "Projects",
        url : "#"
    },
    {
        link : "Contact",
        url : "#Contact"
    },
];

const Header = () =>{

    const [isopen , setOpen] = useState(false); 
    const toggelMenu = () =>{
        setOpen(!isopen);
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <><header className={`fixed top-0 left-0 w-[100%] z-50 ${isScrolled ? 'fixed shadow-lg bg-white' : ''}`}   id="Home">
            <div className="w-3/4 mx-auto my-3 md:my-4 flex items-center justify-between ">
                <div className="logo">
                    <a href="#"><span className="text-[#13B0F5] text-3xl md:text-5xl font-bold">M</span></a>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isopen ? "block" : "hidden"} fixed inset-0 bg-black opacity-30 z-50`}></div>
                <div className={`md:hidden ${isopen ? "translate-x-0" : "translate-x-full"}  transform fixed inset-y-0 right-0 pt-16 pr-52 pl-32 bg-white transition-transform duration-500 ease-in-out z-50`}>
                    <ul className="fixed flex flex-col space-y-4 mt-12">
                        {
                            navlin.map((value,index) =>{
                                return(
                                    <li key={index}><a href={value.url} className="hover:text-[#13B0F5] transition-all duration-300">{value.link}</a></li>
                                )
                            })
                        }
                        <div className="block md:hidden">
                            <button className="border-[#42446E]  border-2 px-3 py-1 mt-5 -ml-7 rounded-md transition-all duration-500 ease-in-out relative before:bg-[#42446E] before:content-'' before:z-0  before:absolute before:left-[-100%] before:bottom-0 before:w-full before:min-h-[100%] before:ease-in-out before:duration-300 hover:before:left-0  overflow-hidden hover:text-white"><span className="z-10 relative "> Download CV</span></button>
                        </div> 
                    </ul>
                </div>
                
                {/* Desktop Menu */}
                <nav className="">
                    <ul className="hidden md:flex items-center justify-between space-x-7 ">
                        {
                            navlin.map((value,index) =>{
                                return(
                                    <li key={index}><a href={value.url} className="hover:text-[#13B0F5] transition-all duration-300">{value.link}</a></li>
                                )
                            })
                        }
                             
                    </ul>
                    
                </nav>
                <div className="hidden md:block">
                <button className="border-[#42446E]  border-2 px-5 py-2 rounded-md transition-all duration-500 ease-in-out relative before:bg-[#42446E] before:content-'' before:z-0  before:absolute before:left-[-100%] before:bottom-0 before:w-full before:min-h-[100%] before:ease-in-out before:duration-300 hover:before:left-0  overflow-hidden hover:text-white"><span className="z-10 relative "> Download CV</span>
                </button>
                </div>
                <div className="block md:hidden z-50" onClick={toggelMenu}>
                    <a href="#" >
                        <FontAwesomeIcon icon={isopen ? faTimes : faBars} />
                    </a>
                </div>
            </div>
            </header>
        </>
    )
}
export default Header;