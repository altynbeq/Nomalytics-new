import React from "react";
import { Stacked } from '../../components';
import { GoPrimitiveDot } from 'react-icons/go';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/financeData';

const RevenueByMonthsStacked = () => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-[90%] md:w-[50%]">
      <div className="flex justify-between items-center gap-2 mb-10">
          <p className="text-xl font-semibold">Доход за V4</p>
          <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
              <span>
                  <GoPrimitiveDot />
              </span>
              <span>13-19 Мая 2024</span>
              </p>
          </div>
        </div>
        <div className="md:w-full overflow-auto">
            <Stacked id="stackedTotalRevenue" stackedCustomSeries={stackedCustomSeries} stackedPrimaryXAxis={stackedPrimaryXAxis} stackedPrimaryYAxis={stackedPrimaryYAxis}  />
        </div>
    </div>
  )
}

export default RevenueByMonthsStacked