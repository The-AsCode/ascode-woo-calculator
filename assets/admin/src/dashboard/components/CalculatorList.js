import React, { useState, useEffect } from 'react';
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";

const CalculatorList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    let data = {
      'action': 'ascode_load_calculator_info_action',
      // '_ajax_nonce': ascodeWooCalculatorDashboard.nonce,
    };

    jQuery.post(ajaxurl, data, (response) => {
      console.log(response.data);
      setData(response.data);
      // alert(response.data.message);
    });

  }, []);

  return (
    // <div className='m-2 p-2	border border-gray-600 rounded'>
    <div className='bg-white p-6 rounded'>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center border p-4 rounded">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Calculator</h1>
            <p className="mt-2 text-sm text-gray-700">A list of all Calculator List</p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button type="button" className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Calculator</button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Short Code</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((row, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{row.name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.description}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.shortcode}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <button
                            // onClick={() => handleRemoveSection(index, event)}
                            className="rounded-2xl bg-red-50 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            <TrashIcon className="h-5 w-5 text-red-500" />
                          </button>
                          <button
                            // onClick={() => handleRemoveSection(index, event)}
                            className="rounded-2xl bg-blue-50 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            <PencilIcon className="h-5 w-5 text-blue-500" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default CalculatorList;