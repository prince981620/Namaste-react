import React, { useState } from 'react';
import { data,ITEMS_PER_PAGE } from '../utils/sampleData';

export const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
<div class="relative overflow-x-auto m-5">
  <h1 className='flex justify-center text-2xl m-4'>Available Items</h1>
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
            <th scope="col" class="px-6 py-3">Item Name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item,color,category,price,index) => (
              <tr class="bg-white border-b  ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Name of {item}
                </th>
                <td class="px-6 py-4">
                    Color of {item}
                </td>
                <td class="px-6 py-4">
                    Category of {item}
                </td>
                <td class="px-6 py-4">
                    Price of {item}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center m-5'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button className='w-10 h-10 text-white-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-yellow-500'
            key={i}
            onClick={() => handlePageChange(i + 1)}
            disabled={i + 1 === currentPage}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
