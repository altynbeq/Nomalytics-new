import React, { useEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';

import { FirstRowStats, SalesDouble, MonthlyRevenueBars, SecondRowPie, ThirdRowTransList, ThirdRowLineChart, LastRowWeaklyStats, LastRowSecondComp, LastRowThirdComp } from '../components/General';

const General = () => {
  const { currentColor, currentMode, setActiveMenu } = useStateContext();

  useEffect(()=> {
    setActiveMenu(false);
  },[])

  return (
    <div className="mt-12">
      <div className='flex mx-3 mt-5 flex-wrap justify-center gap-[1.5rem] items-center'>
        <FirstRowStats />
      </div>
      <div className="flex  gap-4 flex-col md:flex-row  justify-center">
        <SalesDouble />
        <div className=' flex justify-center align-center flex-col  w-[80%] md:w-[40%]'>
          <MonthlyRevenueBars />
          <SecondRowPie />
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <ThirdRowTransList />
        <ThirdRowLineChart />
      </div>

      <div className="flex flex-wrap justify-center">
        <LastRowWeaklyStats />
        <LastRowSecondComp />
        <LastRowThirdComp />
      </div>
    </div>
  );
};

export default General;
