import '../App.css';
import React from 'react'
import menunews from '../images/menunews.jpeg'
import news_app_img from '../images/news_app_img.jpeg'
import newsapp2 from '../images/newsapp2.jpeg'
import newsapp3 from '../images/newsapp3.jpeg'
import textUtils from '../images/textUtils.jpeg'

export default function Projects() {

    return (
        <>
            <div className="xl:mx-[100px] md:mx-[30px] xl:py-[15px] md:py-[7px] xl:space-y-12 md:space-y-5">
                <p className="xl:text-6xl md:text-4xl font-serif">Projects</p>
                <div className="xl:space-y-7 md:space-y-4">
                    <p className="xl:text-3xl md:text-2xl">News App</p>
                    <div className="flex justify-between xl:space-x-8 md:space-x-4">
                        <img src={menunews} alt="" className="xl:w-[150px] md:w-[70px]" />
                        <img src={newsapp2} alt="" className="xl:w-[150px] md:w-[70px]" />
                        <img src={news_app_img} alt="" className="xl:w-[150px] md:w-[70px]" />
                        <img src={newsapp3} alt="" className="xl:w-[150px] md:w-[70px]" />
                        <div className="xl:space-y-6 md:space-y-2 xl:my-[20px]">
                            <p className="xl:text-lg md:text-sm">This app is developed in Java using the WebView controller. It fetches news
                                from
                                various
                                news websites all over the internet and display them to the user in an organised manner. Me
                                along with
                                my teammates have developed this app as a mini project associated with our college in our 2nd
                                year.</p>
                            <p><span className="border-blue-900 bg-blue-700 rounded-xl xl:px-3 md:px-2 md:mx-[5px] xl:py-1 md:py-1 hover:bg-blue-600 md:text-sm lg:text-base"><a
                                href="https://github.com/rick-12/News-app" target="_blank">Open Project</a></span></p>
                        </div>
                    </div>
                </div>
                <div className="xl:space-y-7 md:space-y-5">
                    <p className="xl:text-3xl md:text-2xl">TextUtils Website</p>
                    <div className="flex justify-between xl:space-x-10 md:space-x-4">
                        <img src={textUtils} alt="" className="xl:w-[650px] md:w-[400px]" />
                        <div className="xl:space-y-6 md:space-y-2 xl:my-[20px]">
                            <p className="xl:text-lg md:text-sm">This website app is developed using ReactJS and Tailwind CSS. It takes some
                                text
                                from the
                                user and modifies it according as the user directs it to.(Work under progress)</p>
                            <p><span className="border-blue-900 bg-blue-700 rounded-xl xl:px-3 md:px-2 md:mx-[5px] xl:py-1 md:py-1 hover:bg-blue-600 md:text-sm lg:text-base"><a
                                href="https://github.com/rick-12/TextUtils-website" target="_blank">Open
                                Project</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}