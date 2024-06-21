import React from 'react'
import { Header } from '../components';
import { SkladStatistivs, SkladStats } from '../components/Sklad';
import { Orders } from '../pages';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Sklad = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className='mt-12 flex flex-col justify-center align-center p-10 '>
        <div className="flex flex-wrap gap-10 justify-center align-top m-5 xs:mr-6 xs:ml-6 lg:flex-col 2xl:flex-row items-center">
            <SkladStatistivs />
            <SkladStats />
        </div>
        <div className='w-[108%] flex justify-center align-center mr-5'>
            <div className="w-[100%] lg:w-[80%] mt-10  bg-white rounded-3xl">
                <Orders />
            </div>
        </div>
    </div>
  )
}

export default Sklad