import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays,faSchool,faBuilding,faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About = () =>{
    return(
        <>
            <div className=" mx-auto w-3/4 md:pt-36" id="about">
                <div>
                    <h1 className="text-[#42446E] text-4xl font-bold">About Me</h1>
                    <p className="text-sm md:text-md md:w-3/5 pt-8 text-[#666666]">
                            Hello, I'm Mohamed Abail, a 19-year-old student from Agadir. Currently, I'm studying Computer Science at the High School of Technology Fkih Ben Salh, in my second year of the DUT program. I have a strong passion for technology and enjoy exploring its various aspects. Outside of school, I like coding and working on different projects.
                    </p>
                    
                </div>
                <div className="space-y-12 my-12 md:w-4/5">
                    <h1 className="text-[#42446E] text-4xl font-bold">Education</h1>
                    <div>
                        <h4 className="text-lg text-[#666666]">Computer Science</h4>
                        <div className="border-b-2 md:flex justify-between py-3">
                            <p className="text-[#A7A7A7] text-sm md:text-md"><FontAwesomeIcon icon={faSchool} className="pr-2"/>Higher School of Technology</p>
                            <p className="text-[#A7A7A7] text-sm md:text-md"><FontAwesomeIcon icon={faCalendarDays} className="pr-2"/> September 2022 - current</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg text-[#666666]">Bachelor's degree,Physical Sciences</h4>
                        <div className="border-b-2 flex justify-between py-3">
                            <p className="text-[#A7A7A7] text-sm md:text-md"><FontAwesomeIcon icon={faSchool} className="pr-2"/>Al khwarizmi High School</p>
                            <p className="text-[#A7A7A7] text-sm md:text-md"><FontAwesomeIcon icon={faCalendarDays}/> Juin 2022</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-4/5">
                    <h1 className="text-[#42446E] text-4xl font-bold">Work Experience</h1>
                    <div>
                        <h4 className="text-lg text-[#666666] pt-4">initial internship</h4>
                        <div className="border-b-2 md:flex justify-between py-3">
                            <p className="text-[#A7A7A7] text-sm"><FontAwesomeIcon icon={faBuilding} className="pr-2"/>HOLDING DE GESTION DES ACTIONS</p>
                            <p className="text-[#A7A7A7] text-sm"><FontAwesomeIcon icon={faLocationDot} className="pr-2"/>Ait Melloul, Souss-Massa</p>
                            <p className="text-[#A7A7A7] text-sm"><FontAwesomeIcon icon={faCalendarDays}/> August 2023 - September 2023 · 1 month</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;