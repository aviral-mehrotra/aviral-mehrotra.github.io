import Head from 'next/head'
import { BsFillMoonStarsFill, BsTerminalFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail,  } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa'
import Image from 'next/image';
import design from '../public/design.png'
import code from '../public/code.png'
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
            <h1 className='text-xl text-zinc-800 dark:text-slate-200'>aviralmehrotra</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}  className='cursor-pointer text-2xl text-zinc-800 dark:text-slate-200'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="/public/resume.pdf" download="Aviral Mehrotra's Resume">Resume</a></li>
            </ul>
          </nav>
          <div className='relative w-20 h-20'>
            <Image />
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-7xl lg:text-9xl'>
              Aviral Mehrotra
            </h2>
            <h3 className='text-2xl py-5 md:text-4xl dark:text-gray-200'>
              Student and Software Developer
            </h3>
            <p className='text-md py-1 leading-8 text-gray-800 md:text-2xl max-w-lg mx-auto dark:text-slate-200'>
              High school student interested in computer science,
              AI and machine learning, economics, and emerging technologies.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200'>
            <a target="_blank" href="https://github.com/aviral-mehrotra" rel="noopener noreferrer"><AiFillGithub /></a>
            <a target="_blank" href="https://www.linkedin.com/in/aviralmehrotra" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="mailto:aviral.mehrotra@gmail.com" rel="noopener noreferrer"><AiFillMail /></a>
          </div>
        </section>
        
        <section>
          
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

      </main>
    </div>
  )
}
