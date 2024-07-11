import GridAndDotBg from "./ui/GridAndDotBg"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generated-effect"
import { LitUpBtn } from "./ui/tailwindcss-button"
import { FiFastForward } from "react-icons/fi";



export default function Hero(){


    return (
        <div className="pb-20 pt-36">
            <div className="h-[50vh] w-[80vw] absolute">
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"  fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]"  fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]"  fill="blue" />
            </div>
            <GridAndDotBg />
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="text-slate-200 text-md text-center max-w-80 tracking-wider capitalize">
                        Dynamic web magix with Next.js
                    </h2>
                    <TextGenerateEffect 
                        className="text-center text-[40px] text-slate-100 md:text-5xl lg:text-6xl capitalize"                        
                        words="Create the new World without kominfo" 
                    />
                    <p className="mb-4 mt-5 text-sm md:text-lg lg:text-2xl font-extralight text-sky-100">Hi, iam Llano Kusuma Dewa a.k.a Frknstnz</p>
                    <a href="">
                        <LitUpBtn 
                            text="See More" 
                            icon={<FiFastForward />}
                            position="right"
                        />
                    </a>                        
                </div>
            </div>
       </div>
    )
}



