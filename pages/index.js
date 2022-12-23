import Head from 'next/head'
import { BsFillMoonStarsFill, BsTerminalFill, BsLink45Deg } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail,  } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa'
import Image from 'next/image';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aviral Mehrotra Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-zinc-800'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-zinc-800 dark:text-slate-200'>aviral<span className="text-zinc-500 dark:text-zinc-400">mehrotra</span></h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}  className='cursor-pointer text-2xl text-zinc-800 dark:text-slate-200'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 rounded-md ml-8' href="resume.pdf" download="Aviral Mehrotra's Resume">Resume</a></li>
            </ul>
          </nav>
          <div className='relative w-1 h-1 md:w-20 md:h-20'>
            <Image />
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-cyan-400 font-medium md:text-7xl lg:text-9xl'>
              Aviral Mehrotra
            </h2>
            <h3 className='text-2xl py-5 md:text-4xl dark:text-gray-200'>
              Student and Software Developer
            </h3>
            <p className='text-md py-1 leading-8 text-gray-800 md:text-2xl max-w-lg mx-auto dark:text-slate-200'>
              High school student interested in computer science,
              AI and machine learning, economics, and emerging technologies.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200'>
            <a target="_blank" href="https://github.com/aviral-mehrotra" rel="noopener noreferrer"><AiFillGithub /></a>
            <a target="_blank" href="https://www.linkedin.com/in/aviralmehrotra" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="mailto:aviral.mehrotra@gmail.com" rel="noopener noreferrer"><AiFillMail /></a>
          </div>
        </section>
        
        <section className='min-h-screen'>

          <div className='text-center'>
            <h3 className='text-2xl md:py-5 md:pt-10 md:text-4xl dark:text-gray-200'>
              Experience
            </h3>
          </div>
          
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-slate-50 flex-1'>
              <FaGraduationCap className='text-7xl w-full'/>
              <h3 className='text-xl font-bold pt-8 pb-2'>Student</h3>
              <p className='py-2'>
                I am currently a high school senior with a passion for computer science.
                I am looking to major in computer science and economics in college.
              </p>
              <h4 className='py-4 text-teal-600'>Notable Classes</h4>
              <p className='text-gray-800 py-1'>AP Computer Science A</p>
              <p className='text-gray-800 py-1'>AP Calculus BC</p>
              <p className='text-gray-800 py-1'>AP Statistics</p>
              <p className='text-gray-800 py-1'>AP Physics C: Mechanics</p>
              <p className='text-gray-800 py-1'>AP Physics C: Electricity and Magnetism</p>
              <p className='text-gray-800 py-1'>Payton Advanced Studies Cohort (PASC)</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-slate-700 flex-1'>
              <BsTerminalFill className='text-7xl text-slate-200 w-full'/>
              <h3 className='text-xl font-bold pt-8 pb-2 text-slate-50'>Developer</h3>
              <p className='text-slate-200 py-2'>
                I started coding in my first year of high school and have interned
                at tech startups and Fermilab, won several hackathons, and tutored other students.
              </p>
              <h4 className='py-4 text-teal-600'>Languages and Technologies</h4>
              <p className='text-slate-200 py-1'>Python</p>
              <p className='text-slate-200 py-1'>C++</p>
              <p className='text-slate-200 py-1'>Swift + Xcode</p>
              <p className='text-slate-200 py-1'>React + Tailwind CSS</p>
              <p className='text-slate-200 py-1'>Google Cloud Functions</p>
              <p className='text-slate-200 py-1'>Git</p>
            </div>
          </div>
        </section>

        <section className='min-h-screen text-center'>
          <h3 className='text-2xl md:py-5 md:pt-10 md:text-4xl dark:text-gray-200'>
            Projects
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10 lg:gap-y-0'>
            <div className='text-center shadow-lg p-10 rounded-xl mt-10 bg-slate-700 flex-1'>
              <h3 className='text-xl font-bold pb-2 md:pb-5 text-slate-50'>procrastiNOT</h3>
              <div className='flex gap-3 justify-center flex-wrap pb-2 md:pb-4'>
                <h4 className='text-lg font-medium px-2 text-amber-200 border-solid border-2 border-amber-200 rounded-lg hover:cursor-default hover:border-amber-200 hover:border-solid'>
                  Congressional App Challenge 2021 IL-07 Winner
                </h4>
              </div>
              <div className='flex gap-3 justify-center flex-wrap md:pb-2'>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Python</h4>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>SwiftUI</h4>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>JS</h4>
              </div>
              <p className='text-slate-200 py-2'>
                An assignment prioritizer and scheduler that uses inputs from Aspen, Google Classroom,
                and Google Calendar to help students prevent procrastination.
              </p>
              <div className='flex gap-3 justify-center md:pt-2'>
                <a target="_blank" href="https://www.congressionalappchallenge.us/21-IL07/" rel="noopener noreferrer">
                  <div className='flex gap-2 justify-center text-lg font-medium px-2 text-slate-50 border-solid border-2 border-slate-500 bg-slate-500 rounded-lg hover:cursor-default hover:border-slate-50 hover:border-solid items-center'>
                    <BsLink45Deg />
                    <h1>Read More</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl mt-10 bg-slate-700 flex-1'>
              <h3 className='text-xl font-bold pb-2 md:pb-5 text-slate-50'>MetroSafe</h3>
              <div className='flex gap-3 justify-center flex-wrap pb-2 md:pb-4'>
                <h4 className='text-lg font-medium px-2 text-amber-200 border-solid border-2 border-amber-200 rounded-lg hover:cursor-default hover:border-amber-200 hover:border-solid'>
                  CodeDay: Most Useful App
                </h4>
              </div>
              <div className='flex gap-3 justify-center flex-wrap md:pb-2'>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>SwiftUI</h4>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Firebase</h4>
              </div>
              <p className='text-slate-200 py-2'>
                A public safety app that protects residents of urban communities by
                providing crowdsourced information about crime and violence close to them.
              </p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl mt-10 bg-slate-700 flex-1'>
              <h3 className='text-xl font-bold pb-2 md:pb-5 text-slate-50'>Stock Trading Assistant</h3>
              <div className='flex gap-3 justify-center flex-wrap pb-2 md:pb-4'>
                <h4 className='text-lg font-medium px-2 text-amber-200 border-solid border-2 border-amber-200 rounded-lg hover:cursor-default hover:border-amber-200 hover:border-solid'>
                  CodeDay: Best in Class App
                </h4>
              </div>
              <div className='flex gap-3 justify-center flex-wrap md:pb-2'>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Python</h4>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Yahoo Finance</h4>
              </div>
              <p className='text-slate-200 py-2'>
                A trading assistant that eases the transaction process for beginner
                investors by providing them with investing tools and explaining terms such as “stop loss.”
              </p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl mt-10 bg-slate-700 flex-1'>
              <h3 className='text-xl font-bold pb-2 md:pb-5 text-slate-50'>Modeling Vaccinations</h3>
              <div className='flex gap-3 justify-center flex-wrap pb-2 md:pb-4'>
                <h4 className='text-lg font-medium px-2 text-amber-200 border-solid border-2 border-amber-200 rounded-lg hover:cursor-default hover:border-amber-200 hover:border-solid'>
                  MTFC: 2021 Semi-finalist
                </h4>
              </div>
              <div className='flex gap-3 justify-center flex-wrap md:pb-2'>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Python</h4>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Excel</h4>
              </div>
              <p className='text-slate-200 py-2'>
                Co-authored "Distribution of the COVID-19 Vaccine to Minimize Cases in Chicago"
                to model the ideal distribution of the COVID-19 vaccines in Chicago.
              </p>
              <div className='flex gap-3 justify-center md:pt-2'>
                <a target="_blank" href="vaccinePaper.pdf" download="Distribution of the COVID-19 Vaccine to Minimize Cases in Chicago" rel="noopener noreferrer">
                  <div className='flex gap-2 justify-center text-lg font-medium px-2 text-slate-50 border-solid border-2 border-slate-500 bg-slate-500 rounded-lg hover:cursor-default hover:border-slate-50 hover:border-solid items-center'>
                    <BsLink45Deg />
                    <h1>Paper</h1>
                  </div>
                </a>
                <a target="_blank" href="https://github.com/aviral-mehrotra/COVID-19_Vaccine_Distribution_Plan" rel="noopener noreferrer">
                  <div className='flex gap-2 justify-center text-lg font-medium px-2 text-slate-50 border-solid border-2 border-slate-500 bg-slate-500 rounded-lg hover:cursor-default hover:border-slate-50 hover:border-solid items-center'>
                    <BsLink45Deg />
                    <h1>Code</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl mt-10 bg-slate-700 flex-1'>
              <h3 className='text-xl font-bold pb-2 md:pb-5 text-slate-50'>Photovoltaic Systems</h3>
              <div className='flex gap-3 justify-center flex-wrap pb-2 md:pb-4'>
                <h4 className='text-lg font-medium px-2 text-amber-200 border-solid border-2 border-amber-200 rounded-lg hover:cursor-default hover:border-amber-200 hover:border-solid'>
                  MTFC: 2022 Semi-finalist
                </h4>
              </div>
              <div className='flex gap-3 justify-center flex-wrap md:pb-2'>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Excel</h4>
              </div>
              <p className='text-slate-200 py-2'>
                Co-authored "Feasibility of Photovoltaic Energy System to Power Remote Home"
                to model the optimal battery energy storage system (BESS) for buildings.
              </p>
              <div className='flex gap-3 justify-center md:pt-2'>
                <a target="_blank" href="energyPaper.pdf" download="Feasibility of Photovoltaic Energy System to Power Remote Home" rel="noopener noreferrer">
                  <div className='flex gap-2 justify-center text-lg font-medium px-2 text-slate-50 border-solid border-2 border-slate-500 bg-slate-500 rounded-lg hover:cursor-default hover:border-slate-50 hover:border-solid items-center'>
                    <BsLink45Deg />
                    <h1>Paper</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl mt-10 bg-slate-700 flex-1'>
              <h3 className='text-xl font-bold pb-2 md:pb-5 text-slate-50'>Prophecy</h3>
              <div className='flex gap-3 justify-center flex-wrap md:pb-2'>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>Python</h4>
                <h4 className='text-lg font-medium px-2 text-cyan-400 border-solid border-2 bg-cyan-800 border-cyan-800 rounded-lg hover:cursor-default hover:border-cyan-400 hover:border-solid'>XGBoost</h4>
              </div>
              <p className='text-slate-200 py-2'>
                A daily stock price predictor that uses an XGBoost regression model.
                This model was used due to its ability to work with large datasets and its customizability.
              </p>
              <div className='flex gap-3 justify-center md:pt-2'>
                <a target="_blank" href="https://github.com/aviral-mehrotra/Prophecy" rel="noopener noreferrer">
                  <div className='flex gap-2 justify-center text-lg font-medium px-2 text-slate-50 border-solid border-2 border-slate-500 bg-slate-500 rounded-lg hover:cursor-default hover:border-slate-50 hover:border-solid items-center'>
                    <BsLink45Deg />
                    <h1>Code</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
