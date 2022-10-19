import '../App.css';
import React from 'react'
import iiest from '../images/iiest.jpeg'

export default function Education() {

    return (
        <>
        <div className="p-[10px]">
            <div className="xl:mx-[200px] md:mx-[30px] md:mt-[25px] xl:space-y-10 md:space-y-5 text-justify">
                <div className="flex xl:space-x-10 md:space-x-8">
                    <img src={iiest} alt="" className="xl:h-[180px] md:h-[110px]" />
                    <div className="xl:mr-[310px] md:mr-[50px] xl:space-y-10 md:space-y-3 xl:mt-[20px] md:mt-[10px] font-serif">
                        <p className="xl:text-xl md:text-base">Indian Institute of Engineering Science and Technology, Shibpur |
                            2020-2024</p>
                        <p className="xl:text-lg md:text-base">Bachelor of Technology in <b>Computer Science and Technology</b></p>
                    </div>
                </div>
                <div className="xl:space-y-4 md:space-y-1 font-sans">
                    <p className="xl:text-3xl md:text-xl"><b>RELEVANT COURSES:</b></p>
                    <p className="xl:text-lg md:text-base">Discrete Structure(CS2102) | Digital Logic (CS2103) | Programming and
                        Data
                        Structures(CS2104) | Algorithms (CS2201) | Programming Paradigm (CS2203) | Theory of Computation
                        (CS2204) | DBMS (CS3102)</p>
                </div>
                <div className="md:mr-[50px] xl:space-y-5 md:space-y-2 font-sans">
                    <p className="xl:text-3xl md:text-xl"><b>SKILLS:</b></p>

                    <div className="xl:space-y-1">
                        <p className="xl:text-xl md:text-lg">TECHNICAL SKILLS:</p>
                        <p className="xl:text-lg md:text-base w-full">Programming Languages: C++ (Advance) | C (Advance) | Javascript
                            (medium) |
                            Java(medium) | Kotlin (medium) | Python (medium)
                            <br />
                            Libraries & Frameworks: C++ STL (Advance) | Tailwind CSS | React.js | Django
                        </p>
                    </div>
                    <div className="xl:space-y-1">
                        <p className="xl:text-xl md:text-lg">SOFT SKILLS:</p>
                        <p className="xl:text-lg md:text-base">Communication | Teamwork | Time Management</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}