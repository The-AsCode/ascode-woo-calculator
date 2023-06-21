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
      // console.log(response.data);
      setData(response.data);
      // alert(response.data.message);
    });

  }, []);

  return (
    <>
      <table className='p-4'>
        <thead className="bg-gray-50 p-4">
          <tr className='p-4'>
            <th className='p-4'>Load Name</th>
            <th className='p-4'>Load Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className='p-4'>
              <td className='p-4'>{row.name}</td>
              <td className='p-4 text-center'>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
