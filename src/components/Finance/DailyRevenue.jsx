import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import { Button, Pie } from '../../components';
import { revenueTypesData, weakylRevenue, lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis }  from '../../data/financeData'

import { useStateContext } from '../../contexts/ContextProvider';

const DailyRevenue = () => {
    const { currentColor, currentMode } = useStateContext();

  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Доходы за день</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>24 Мая 2024</span>
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex gap-10 flex-row w-fit justify-center">

            <div className=" border-r-1 border-color m-4 pr-10">
              
              <div>
                <div className='flex justify-center flex-col text-center'>
                    <p>
                        <span className="text-3xl font-semibold">730,438 тг</span>
                        <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                            23%
                        </span>
                    </p>
                    <p className="text-gray-500 mt-1">Прибыль</p>
                </div>
              </div>
              <div className="mt-8 gap-7 flex flex-row justify-between">
                <div className='flex justify-center flex-col text-center'>
                    <p className="text-3xl font-semibold">127</p>
                    <p className="text-gray-500 mt-1">Покупок</p>
                </div>
                <div className='flex justify-center flex-col text-center'>
                    <p className="text-3xl font-semibold">7</p>
                    <p className="text-gray-500 mt-1">Скидок</p>
                </div>
                <div className='flex justify-center flex-col text-center'>
                    <p className="text-3xl font-semibold">1</p>
                    <p className="text-gray-500 mt-1">Cписание</p>
                </div>
              </div>
              <div className="mt-8">
                <div>
                    <div className='flex justify-center flex-col text-center'>
                        <p>
                            <span className="text-3xl font-semibold">14,500 тг</span>
                            <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-red-400 ml-3 text-xs">
                                7%
                            </span>
                        </p>
                    <p className="text-gray-500 mt-1">Средний чек</p>
                    </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Скачать отчет"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
                <div className='flex justify-center'>
                    <h2>Способы оплат</h2>
                </div>
                
              <Pie id="pie-money-flow" data={revenueTypesData} legendVisiblity={false} height="280px" width="350px"/>
              <div className='flex flex-row justify-between'>
                <div className=''>
                    <p className="flex items-center gap-2 text-pink-600 hover:drop-shadow-xl">
                        <span>
                        <GoPrimitiveDot />
                        </span>
                        <span>Kaspi QR</span>
                    </p>
                    <p className="flex items-center gap-2 text-blue-600 hover:drop-shadow-xl">
                        <span>
                        <GoPrimitiveDot />
                        </span>
                        <span>Halyk QR</span>
                    </p>
                </div>
                <div className=''>
                    <p className="flex items-center gap-2 text-cyan-600 hover:drop-shadow-xl">
                        <span>
                        <GoPrimitiveDot />
                        </span>
                        <span>Наличные</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                        <span>
                        <GoPrimitiveDot />
                        </span>
                        <span>Kaspi QR</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default DailyRevenue