import React, { useEffect } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { dropdownData } from '../data/ecomData';
import { useStateContext } from '../contexts/ContextProvider';
import { RevenueByMonthsStacked, EarlyRevenueStats, DailyRevenue, WeaklyRevenueOverviewStacked, TotalRevenuePie, WeaklyStatistics, TotalRevenueChart } from '../components/Finance';
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
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center ">
        <RevenueByMonthsStacked />
        <EarlyRevenueStats />
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <DailyRevenue />
        <div>
          <WeaklyRevenueOverviewStacked />
          <TotalRevenuePie />
        </div>
      </div>

      <div className="flex gap-8 m-4 flex-wrap justify-center">
        <WeaklyStatistics />
        <TotalRevenueChart />
      </div>
    </div>
  );
};

export default Finance;
