import Image from "next/image";
import { SiGodotengine, SiUnity } from "react-icons/si";
import { PiFileCSharpFill, PiLinkedinLogo } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";


export default function About() {
    return (
        <div className="my-50">
            <div className="flex flex-col items-center gap-20">

                <div className="avatar hover-rubberBand">
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

                <div className="max-w-sm md:max-w-md lg:max-w-xl text-center">

                    <h2 className="text-5xl font-bold mb-10 hover-swing">Hello!</h2>
                    <p>My name is <b>Jhony Alexander</b>. Video game developer with 9 years of programming expertise. I am good at making creative ideas into real games. I love solving tough problems and I always work hard to make great games that people will love.
                    </p>

                    <h2 className="text-3xl font-bold my-10 hover-swing">SKILLS</h2>
                    <div className="flex justify-center gap-6 md:gap-8 lg:gap-10">
                        <SiUnity className="text-5xl hover-rubberBand"/>
                        <SiGodotengine className="text-5xl hover-rubberBand"/>
                        <PiFileCSharpFill className="text-5xl hover-rubberBand"/>
                        <RiNextjsFill className="text-5xl hover-rubberBand"/>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row gap-6 mt-10 items-center">
                    <div className="flex items-center gap-2">
                        <HiOutlineMail className="text-3xl"/>
                        <p className="font-bold">kanlahac.dev@gmail.com</p>
                    </div>

                    <a href="https://www.linkedin.com/in/kanlahac/" target="_blank" className="flex items-center gap-2">
                        <PiLinkedinLogo className="text-3xl"/>
                        <p className="font-bold">https://www.linkedin.com/in/kanlahac/</p>
                    </a>
                </div>
                
            </div>
        </div>
    );
}