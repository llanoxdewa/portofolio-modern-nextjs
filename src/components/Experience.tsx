import React from 'react'
import { workExperience } from '@/data/data'
import { Button } from './ui/moving-border'
import { cn } from '@/utils/cn'


export default function Experience() {

    const getRandomDuration = () => Math.floor(Math.random() * 5000) + 5000;


    return (    
        <div id="testimonials" className="py-20">
            <h1 className="heading">
                Client that i have worked with
            </h1>
            <div className="h-fit p-4 flex flex-wrap items-center justify-evenly gap-16 mt-10">
                <div className="grid lg:grid-cols-2 gap-3 grid-cols-1 w-full">
                    {workExperience.map(({id,title,desc,className,thumbnail}) => 
                        <Button key={id} duration={getRandomDuration()}>
                            <div className={cn('lg:p-10 p-4 flex gap-2 items-center',className)}>
                                <img src={thumbnail} alt={title} />
                                <div className="flex justify-center flex-col items-center gap-2">
                                    <h2 className=" text-lg text-semibold">{ title }</h2>
                                    <p className="text-slate-400">{ desc }</p>
                                </div>
                            </div>
                        </Button>
                    )}
                </div>
            </div>
        </div>
  )
}

