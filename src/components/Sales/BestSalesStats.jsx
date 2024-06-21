import React from 'react'
import { IoIosMore } from 'react-icons/io';
import { weeklyStats, SparklineAreaData } from '../../data/ecomData';
import { useStateContext } from '../../contexts/ContextProvider';
import { SparkLine } from '../../components';

const BestSalesStats = () => {
    const { currentColor, currentMode } = useStateContext();
    return (
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-1 ml-1 h-[500px] rounded-2xl">
            <div className="flex flex-wrap justify-center">
                <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-1 m-3">
                <div className="flex justify-between">
                    <p className="md:text-xl font-semibold">Недельная статистика</p>
                    <button type="button" className="text-xl font-semibold text-gray-500">
                    <IoIosMore />
                    </button>
                </div>

                <div className="mt-10 ">
                    {weeklyStats.map((item) => (
                    <div key={item.title} className="flex justify-between mt-4 w-full">
                        <div className="flex gap-4">
                        <button
                            type="button"
                            style={{ background: item.iconBg }}
                            className="md:text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                        >
                            {item.icon}
                        </button>
                        <div>
                            <p className="text-md font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                        </div>

                        <p className={`text-${item.pcColor} text-sm`}>{item.amount}</p>
                    </div>
                    ))}
                    <div className="mt-1">
                        <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BestSalesStats