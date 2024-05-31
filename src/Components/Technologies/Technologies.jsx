import React from "react";
import imghtml from "../../assets/techstack/html.png"
import imgcss from "../../assets/techstack/css.png"
import imgjs from "../../assets/techstack/js.png"
import imgreact from "../../assets/techstack/react.png"
import imgtailwind from "../../assets/techstack/tailwind.png"
import imggit from "../../assets/techstack/git.png"
import imgfigma from "../../assets/techstack/figma.png"
import imggithub from "../../assets/techstack/github.png"
import imgvscode from "../../assets/techstack/vscode.png"
import imgmysql from "../../assets/techstack/mysql.png"
import imgjava from"../../assets/techstack/java.png"
import imgspring from"../../assets/techstack/spring.png"
import imgUML from"../../assets/techstack/UML.png"


const Technologies = () =>{
    return(
        <>
            <div className="pb-16 mx-auto w-3/4 pt-36" id="Technologies">
                <div className=" pb-12">
                    <h1 className="text-2xl md:text-4xl text-[#42446E] font-bold">My Tech Stack</h1>
                    <h2 className="text-sm md:text-md py-2 text-[#666666]"> Technologies I’ve been working with recently</h2>
                </div>
                <div className=" flex flex-col space-y-12">
                    <div className="grid grid-cols-3 md:grid-cols-6 justify-between gap-12">
                        <img src={imghtml} alt="" className=" "/>
                        <img src={imgcss} alt="" className=" "/>
                        <img src={imgjs} alt="" className=" "/>
                        <img src={imgreact} alt="" className=" "/>
                        <img src={imgtailwind} alt="" className=" "/>
                        <img src={imgjava} alt="" className=" "/>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 justify-between gap-12">
                        
                        <img src={imggit} alt="" className=" "/>
                        <img src={imgfigma} alt="" className=" "/>
                        <img src={imggithub} alt="" className=" "/>
                        <img src={imgvscode} alt="" className=" "/>
                        <img src={imgmysql} alt="" className=" "/>
                        <img src={imgspring} alt="" className=" "/>
                        <img src={imgUML} alt="" className=" "/>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Technologies;