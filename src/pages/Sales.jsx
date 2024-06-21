import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';

import { DailySalesStats, BestSalesStats, BoxTotalStats, WeaklyTotalSalesChart, MonthlyTotalSalesChart, OverallRevenueChart } from '../components/Sales';

const Sales = () => {
    const { currentColor, currentMode,setActiveMenu } = useStateContext(); 

    useEffect(()=> {
        setActiveMenu(false);
    },[]);
    
    return (
        <div className='mt-12 flex flex-col justify-center align-center p-10'>
            <div className="flex flex-wrap lg:flex-nowrap justify-center align-top xs:flex-col">
                <DailySalesStats />
                <BestSalesStats />
            </div>
            <div className='flex m-3 mt-5 flex-wrap justify-center gap-[1.5rem] items-center'>
                <BoxTotalStats />
            </div>
            <div className="flex m-3 mt-5 flex-wrap justify-center gap-[1.5rem] w-full items-center">
                <WeaklyTotalSalesChart />
                <MonthlyTotalSalesChart />
            </div>
            {/* <div className="flex m-3 mt-5 flex-row md:flex-row sm:flex-col xs:flex-col justify-center gap-[1.5rem] w-[100%] items-center">
                <MonthlyTotalSalesChart />
            </div> */}
            <div className="flex m-3 mt-5 flex-wrap justify-center gap-[1.5rem] w-full items-center">
                <OverallRevenueChart />
            </div>
        </div>
    )
}

export default Sales