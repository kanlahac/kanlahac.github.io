"use client"

import Image from "next/image";
import { SiGodotengine, SiUnity, SiGithub } from "react-icons/si";
import { PiFileCSharpFill, PiLinkedinLogo } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaGitAlt, FaCheck } from "react-icons/fa";
import { useState } from "react";


export default function About() {
    const [isCopied, setIsCopied] = useState(false);

    const email = "kanlahac.dev@gmail.com";
    const handleCopy = async () => {
        if (isCopied == true) return;

        try{
            await navigator.clipboard.writeText(email);

            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch(err){
            console.error(err);
        }
    }

    return (
        <div className="hero bg-base-300 min-h-screen">
            <div className="hero-content text-center">
                <div className="flex flex-col items-center">

                    <div>
                        <h2 className="text-6xl font-bold mb-10">Hello!</h2>
                    </div>

                    <div className="avatar hover-rubberBand mb-10">
                        <div className="mask mask-squircle w-64">
                            <Image 
                                src="/photo.jpg" 
                                alt="A photo of Jhony Alexander, kanlahac, video game developer" 
                                width={256} 
                                height={256} 
                                unoptimized={true} 
                            />
                        </div>
                    </div>

                    <div className="max-w-sm md:max-w-md lg:max-w-xl text-center mb-10">
                        
                        <p className="font-bold text-3xl mb-10">Jhony Alexander Henao Orozco</p>
                        <p>
                            <span className="font-bold text-primary">Gameplay developer</span> with <span className="text-info font-bold">+9 years of programming expertise</span>, passionate about video games, clean code and programming challenges.
                        </p>

                        {/* <h2 className="text-3xl font-bold mt-20 my-10 hover-swing">SKILLS</h2>
                        <div className="flex justify-center gap-6 md:gap-8 lg:gap-10">
                            <SiUnity className="text-5xl hover-rubberBand"/>
                            <SiGodotengine className="text-5xl hover-rubberBand"/>
                            <PiFileCSharpFill className="text-5xl hover-rubberBand"/>
                            <RiNextjsFill className="text-5xl hover-rubberBand"/>
                            <FaGitAlt className="text-5xl hover-rubberBand"/>
                        </div> */}

                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center my-7">
                        <a href="https://www.linkedin.com/in/kanlahac/" target="_blank" className="flex items-center gap-2 btn btn-neutral rounded-box">
                            <PiLinkedinLogo className="text-3xl"/>
                            <span className="font-bold">Linkedin</span>
                        </a>

                        <a href="https://github.com/kanlahac" target="_blank" className="flex items-center gap-2 btn btn-neutral rounded-box">
                            <SiGithub className="text-2xl"/>
                            <span className="font-bold">Github</span>
                        </a>

                        <div 
                            className="flex items-center gap-2 btn btn-neutral rounded-box" 
                            disabled={isCopied && "disabled"}
                            onClick={handleCopy}
                        >
                            <HiOutlineMail className="text-3xl"/>
                            <p className="font-bold">{email}</p>
                        </div>

                        <a href="/0-JhonyAlexanderHenaoOrozco-CV.pdf" target="_blank" className="flex items-center gap-2 btn btn-neutral btn-outline rounded-box">
                            <GrDocumentText className="text-2xl"/>
                            <span className="font-bold">Curriculum</span>
                        </a>
                    </div>

                    { 
                        isCopied &&
                            <div className="toast toast-start">
                                <div className="alert alert-success">
                                    <FaCheck />
                                    <span>Email copied on clipboard!</span>
                                </div>
                            </div>
                    }
                    
                </div>
            </div>
        </div>
    );
}