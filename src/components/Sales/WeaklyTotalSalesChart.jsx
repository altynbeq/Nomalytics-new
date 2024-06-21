import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked } from '../../components';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/salesData';


const WeaklyTotalSalesChart = () => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 md:w-[45%]  rounded-2xl ">
        <div className="flex justify-between items-center gap-2 mb-10">
          <p className="md:text-xl font-semibold">Продажи за неделю</p>
          <div className="flex items-center gap-4">
              <p className="flex md:text-xl items-center gap-2 text-green-400 hover:drop-shadow-xl">
              <span>
                  <GoPrimitiveDot />
              </span>
              <span>13-19 Мая 2024</span>
              </p>
          </div>
        </div>
          
        <Stacked stackedCustomSeries={stackedCustomSeries} stackedPrimaryXAxis={stackedPrimaryXAxis} stackedPrimaryYAxis={stackedPrimaryYAxis}  />
    </div>
  )
}

export default WeaklyTotalSalesChart