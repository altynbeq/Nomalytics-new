import React, { useEffect } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { dropdownData } from '../data/ecomData';
import { useStateContext } from '../contexts/ContextProvider';
import { MonthlyRevenueChart, OverallRevenueChart, RevenueByMonthsStacked, EarlyRevenueStats, DailyRevenue, WeaklyRevenueOverviewStacked, TotalRevenuePie, WeaklyStatistics, TotalRevenueChart } from '../components/Finance';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../data/financeData';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Finance = () => {
  const { currentColor, currentMode, setActiveMenu } = useStateContext();
  
  useEffect(()=> {
    setActiveMenu(false);
  },[]);
 
  return (
    <div className="mt-[50px]">
      <div className="flex mt-8 md:mt-0 flex-wrap lg:flex-nowrap gap-5 justify-center ">
        <RevenueByMonthsStacked />
        <EarlyRevenueStats />
      </div>

      <div className="flex mt-5  gap-4 flex-col md:flex-row  justify-center">
        <DailyRevenue />
        <div className=' flex justify-center align-center flex-col  w-[100%] md:w-[30%]'>
          <WeaklyRevenueOverviewStacked />
          <TotalRevenuePie />
        </div>
      </div>

      <div className="flex gap-8 my-4 w-full items-center flex-col md:flex-row justify-center">
        <WeaklyStatistics />
        <OverallRevenueChart />
      </div>
      <div className="flex m-3 mt-5 flex-wrap justify-center gap-[1.5rem] w-full items-center">
        <MonthlyRevenueChart />
      </div>
    </div>
  );
};

export default Finance;
