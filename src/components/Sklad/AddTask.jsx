import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { FaPlus } from "react-icons/fa";
import { useStateContext } from '../../contexts/ContextProvider';

const AddTask = ({taskAddActive, setTaskAddActive}) => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className=" absolute flex mt-5  justify-end   nav-item ">
        <div className=" flex-col flex justify-center border-2 rounded-2xl float-right h-full w-full duration-1000 ease-in-out dark:text-gray-700 transition-all dark:bg-[#484B52] bg-white  p-8">
          <div className="flex justify-center">
            <div className='flex justify-center'>
              <p className="font-semibold text-lg">Новая задача</p>
            </div>

            <div className=' right-0'>
              <button className="p-2" onClick={() => setTaskAddActive(!taskAddActive)} >
                <MdOutlineCancel />
              </button>
            </div>
            
            
          </div>
          <div className='p-2 flex flex-col justify-center align-center gap-4'>
            <input
              id="name"
              name="name"
              type="textarea"
              className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Название"
            />
            <select
              id="role"
              name="role"
              className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="" disabled>Выберите роль</option>
              <option value="Все">Все</option>
              <option value="Сапорт">Сапорт</option>
              <option value="Флорист">Флорист</option>
            </select>
            <button
              type="button"
              style={{ backgroundColor: currentColor, color: "white", borderRadius: "24px", fontFamily: "Comfortaa" }}
              className="flex flex-row gap-2 justify-center align-center text-[16px] p-3 px-8 w-fit-content hover:drop-shadow-xl hover:bg-white"
            >
              Добавить
              <div className='flex mt-1'>
                <FaPlus />
              </div>
            </button>
          </div>

                
        </div>
    </div>
  )
}

export default AddTask