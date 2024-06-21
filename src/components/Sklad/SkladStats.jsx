import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import { Button } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const SkladStats = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  p-4 rounded-2xl    xs:mr-4 xs:ml-4 md:mr-0 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl xs:text-sm xs:ml-12 xs:mt-6 xl:ml-6 xl:mt-4 md:mt-4 md:ml-6 sm:ml-12 sm:mt-8 ">За неделю</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl xs:mt-6 xs:mr-12 xl:mr-6 xl:mt-4 md:mr-4 md:mt-4 sm:mt-8 sm:text-lg sm:mr-2 ">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>12-19 Мая 2024</span>
              </p>
            </div>
          </div>
          
          <div className="mt-10 md:mt-5 xl:my-12 flex gap-10 flex-row w-fit p-1 mx-auto justify-center  xs:p-0 xs:mt-6  ">
            <div className="  border-color m-8  ">
              <div>
                <div className='flex justify-center flex-col text-center '>
                    <p>
                        <span className="md:text-3xl font-semibold xl:text-4xl 2xl:mt-6">4 500</span>
                        <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs 2xl:mb-2">
                            23%
                        </span>
                    </p>
                    <p className="text-gray-500 mt-1 sm:mt-4">Сумма списания</p>
                </div>
              </div>
              <div className="mt-0 gap-2 flex flex-row justify-between lg:mt-60 xs:mt-8 xl:mt-8">
                <div className='flex justify-center flex-col text-center'>
                    <p className="md:text-3xl font-semibold xs:text-lg">7 шт</p>
                    <p className="text-gray-500 mt-1 xs:text-lg">Списано</p>
                </div>
                <div className='flex justify-center flex-col text-center'>
                    <p className="md:text-3xl text-green-400 font-semibold xs:text-lg">2%</p>
                    <p className="text-gray-500 mt-1 xs:text-lg">Списано</p>
                </div>
                <div className='flex justify-center flex-col text-center'>
                    <p className="md:text-3xl font-semibold xs:text-lg">2</p>
                    <p className="text-gray-500 mt-1">Пополнения</p>
                </div>
              </div>
              <div className="mt-4 lg:mt-8 md:mt-0 xs:mt-6">
                    <div className='flex justify-center flex-col text-center'>
                        <Button
                        color="white"
                        bgColor={currentColor}
                        text="Скачать отчет"
                        borderRadius="10px" />
                    </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SkladStats