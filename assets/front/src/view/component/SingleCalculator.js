import React, { useState, useEffect } from 'react';

export default function SingleCalculator() {
  const [data, setData] = useState([]);
  const [dataSum, setDataSum] = useState(null)

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

  const handleInputIncrement = (index, value, name)=> {
    if(Number(value)<0){
      return;
    }
    const updatedData = [...data];
    setDataSum({
      ...dataSum,
      [name.name] : updatedData[index]['value'] * value
    });

  }

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
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500 text-center">{row.value} Watt</td>
                      <td className="whitespace-nowrap text-sm text-gray-500">
                        <input
                            className='w-24 rounded'
                            type="number"
                            min={0}
                            onChange={(e) => {
                              e.preventDefault()
                              handleInputIncrement(index, parseInt(e.target.value), row)
                            }}
                        />
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
              <div>{ dataSum && Object.values(dataSum).reduce((a,b)=>a+b,0)}</div>
            </div>
          </div>
        </div>
      </div>
  )
}