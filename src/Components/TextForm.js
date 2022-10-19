import React, { useState } from 'react'
import myPhoto from '../images/myPhoto.jpeg'
import Resume18 from '../Pdfs/Resume18.pdf'

export default function TextForm() {

  return (
    <>
      <div>
        <div className="xl:ml-[100px] xl:mt-[40px] md:mt-[15px] md:ml-[20px] flex justify-between">
          <div>
            <div className="xl:text-[26px] xl:text-lg md:text-base font-serif xl:pb-5 md:pb-2">
              Hello, my name is...
            </div>
            <div className="xl:text-7xl md:text-4xl">
              Ritwik Kundu
            </div>
            <div className="xl:pt-[50px] md:pt-[20px] xl:h-[200px] xl:w-[700px] md:h-[400px] md:w-[500px]">
              <p className="text-justify text-lg font-serif">
                My name is Ritwik Kundu. I am a 3rd year undergraduate at Indian Institute of Engineering
                Science
                and Technology, Shibpur
                pursuing Bachelor of Technology in Computer Science and Technology. At present, I primarily
                working
                on gaining
                skills in the domains like Android Development using Kotlin and Backend Website Development
                using
                Django, and also learning data structures and algorithms. I have also done a lot of Competitive
                Programming. I am currently a Pupil at Codeforces and a 3 star coder at Codechef. I love to play
                with Algorithms and logics.
                I wish to reach the pinnacle in competitive programming and development field
                with sheer determination, dedication and hardwork.
                <br />
                  <br />
                    At present, I am learning Backend and database management skills. I also like cloud computing
                    and
                    machine learning , though I don't have much knowledge about it, but I would like to explore in
                    my
                    coming years. Also, I like listening to peaceful music when I am bored.
                  </p>
                </div>
            </div>
            <div className="xl:pr-[210px] xl:pt-[50px] xl:space-y-12 md:space-y-10 md:pr-[40px] md:pl-[10px] md:pt-[50px]">
              <img src={myPhoto} alt="" className="xl:h-[330px] md:h-[200px] shadow-md" />
              <p><span
                className="border-purple-900 bg-purple-700 xl:mx-14 md:mx-6 xl:px-3 md:px-2 xl:py-1 md:py-1 hover:bg-purple-600 rounded-xl"><a
                  href={Resume18} target="_blank">View Resume</a></span></p>
            </div>
          </div>
        </div>
      </>
      )
}