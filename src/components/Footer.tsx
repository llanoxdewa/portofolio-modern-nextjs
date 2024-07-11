import React from "react"
import { socialMedia } from '@/data/data'


export default function Footer() {
  return (
    <footer className="mx-auto mt-[10rem] h-[30rem] w-full p-4">
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center p-5 gap-5">
          <h1 className="header">Mari Bekerja Sama Dan membangun web yang
            <span className="text-purple-300"> kece parah</span></h1>
          <p className="text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, mollitia.</p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <p>Copyright C Llano 2024</p>
          <div className="h-fit w-fit flex flex-row">
            {socialMedia.map(({ id, img }) =>
              <span key={id} className="w-10 h-10 p-4 flex justify-center items-center">
                <img src={img} alt={img} width={10} height={10} />
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}




