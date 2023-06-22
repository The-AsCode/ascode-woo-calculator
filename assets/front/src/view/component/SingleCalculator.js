import React, { useState, useEffect } from 'react';

export default function SingleCalculator() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let data = {
      'action': 'ascode_load_calculator_preview_info_action',
      '_ajax_nonce': output_ajax_object.ajax_nonce,
      'calculator_id': document.getElementById('ascode_calculator_view').getAttribute('data-value')
    };

    jQuery.post(output_ajax_object.ajax_url, data, (response) => {
      setData(response.data);
    });

  }, []);

  return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="table-fixed min-w-full divide-y border">
                <thead>
                <tr>
                  <th scope="col" className="whitespace-nowrap w-1/2 p-3.5 text-left text-sm font-semibold text-gray-900">
                    Load Name
                  </th>
                  <th scope="col" className="whitespace-nowrap w-1/4 p-3.5 text-left text-sm font-semibold text-gray-900">
                    Load Value
                  </th>
                  <th scope="col" className="whitespace-nowrap w-1/4 p-3.5 text-left text-sm font-semi-bold text-gray-900">
                    Quantity
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {data.map((row, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap p-4 text-sm font-medium text-gray-700">
                        {row.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">{row.value}</td>
                      <td className="whitespace-nowrap text-sm text-gray-500">
                        <input className='w-24 rounded' type="number"/>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



    // <>
    //   <table className='p-4'>
    //     <thead className="bg-gray-50 p-4">
    //       <tr className='p-4'>
    //         <th className='p-4'>Load Name</th>
    //         <th className='p-4'>Load Value</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((row, index) => (
    //         <tr key={index} className='p-4'>
    //           <td className='p-4'>{row.name}</td>
    //           <td className='p-4 text-center'>{row.value}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </>
  )
}