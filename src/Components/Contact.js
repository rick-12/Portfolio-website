import '../App.css';
import React from 'react'
import github_img1 from '../icons/github_img1.ico'
import linkedin from '../icons/linkedin.png'

export default function Contact() {

    return (
        <>
            <div className="text-center xl:space-y-14 md:space-y-8 xl:mt-9 md:mt-7">
                <p className="xl:text-6xl md:text-4xl font-serif">Contact</p>
                <div className="xl:space-y-5 md:space-y-3">
                    <p className="xl:text-2xl md:text-lg font-serif">Reach me out | Drop a mail 📫</p>
                    <div>
                        <p className="xl:text-lg md:text-sm md:py-1">Personal Email ID: <a
                            href="mailto:kunduritwik74@gmail.com">kunduritwik74@gmail.com</a></p>
                        <p className="xl:text-lg md:text-sm md:py-1">Institute Email ID: <a
                            href="mailto:2020csb054.ritwik@students.iiests.ac.in">2020csb054.ritwik@students.iiests.ac.in</a>
                        </p>
                    </div>
                </div>
                <div className="xl:mt-[100px] md:mt-[50px] grid xl:space-y-3 md:space-y-3">
                    <p className="xl:text-2xl md:text-xl font-serif">Let's connect!</p>
                    <div className="flex justify-center xl:space-x-4 md:space-x-3">
                        <p><a href="https://github.com/rick-12" target="_blank"><img src={github_img1} alt=""
                            className="xl:w-[45px] md:w-[30px] rounded-full" /></a></p>
                        <p><a href="https://www.linkedin.com/in/ritwik-kundu-5a1708237/" target="_blank"> <img
                            src={linkedin} alt="" className="xl:w-[45px] md:w-[30px]" />
                        </a></p>
                    </div>
                </div>
            </div>
        </>
    )
}