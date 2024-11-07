import React, { useEffect, useRef } from "react"

function Description() {

    return (
        <div  id="description" className="w-[40vw] h-[85vh] flex flex-col justify-end items-end text-right pl-[2.063rem]  pr-[2.063rem]">

        <div className="pl-[6.25rem] pr-[6.25rem]">
          <h1 className="font-bold text-[3rem]">OPTIFRAME</h1>
          <p>Optiframe is a topology optimizated frame, for a motoE kind of bike. It's powered by a Zero z-force 75-10 electric motor.</p>

          <p>The whole assembly is based on a main chassis, an independent batteries cage, subframe and swingarm.</p>

          <p>As this project started as a test for motorcycle chassis design and optimization, there is only valubale data on this part, like its weight: 6,84kg</p>
        </div>
      </div>
        
    )
}

export default Description