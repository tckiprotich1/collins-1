import Projects from "../components/Data/Data";
import Image from "next/image.js";
import Link from "next/link";
import Foter from "./links";

export default function Skills() {
    return (
        <>
            <section className="bg-white  py-30 dark:bg-black">
                <div className="container px-6 py-30 mx-auto">
                    <h1 className="text-2xl py-20 font-semibold text-center text-gray-900 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <span className="text-blue-500">Components</span></h1>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">

                        {
                            Projects ?
                                Projects.map((project, index) => {
                                    return (
                                        <div key={index} className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                                            {/* // imag */}
                                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-200 rounded-full dark:bg-gray-700">
                                                <Image src={project.image_url} alt="portfolio" className="object-cover rounded-full" width={150} height={150} />
                                            </div>
                                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{project.work_title}</h1>





                                            <p className="text-gray-500 dark:text-gray-300">
                                                {project.description}
                                            </p>

                                            <a href={project.link} className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                <span className="mx-1">read more</span>
                                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    )
                                })
                                : null


                        }





                        {/* <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                            </p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div> */}
                    </div>
                </div>
                <Foter />
            </section>
        </>
    )
}