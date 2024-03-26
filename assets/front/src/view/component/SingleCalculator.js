import React, { useEffect, useState } from 'react';

export default function SingleCalculator() {
    const [data, setData] = useState([]);
    const [dataSum, setDataSum] = useState(null);
    const [viewProduct, setViewProduct] = useState(null);
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        let data = {
            action: 'ascode_load_calculator_preview_info_action',
            _ajax_nonce: output_ajax_object.ajax_nonce,
            calculator_id: document
                .getElementById('ascode_calculator_view')
                .getAttribute('data-value'),
        };

        jQuery.post(output_ajax_object.ajax_url, data, (response) => {
            setSettings(response.data.settings);
            setData(response.data.fields);
        });
    }, []);

    const handleInputIncrement = (index, value, name) => {
        if (Number(value) < 0) {
            return;
        }
        const updatedData = [...data];
        setDataSum({
            ...dataSum,
            [name.name]: updatedData[index]['value'] * value,
        });
    };

    const handleSreachClick = (e) => {
        e.preventDefault();
        let data = {
            action: 'ascode_preview_product_action',
            _ajax_nonce: output_ajax_object.ajax_nonce,
            total_value: Object.values(dataSum).reduce((a, b) => a + b, 0),
        };

        jQuery.post(output_ajax_object.ajax_url, data, (response) => {
            if (response.data) {
                setViewProduct(response.data);
            }
        });
    };

    return (
        <div className='justify-between sm:flex w-full'>
            <div className='px-4 sm:px-6 lg:px-8 py-6 sm:py-0 w-full sm:w-[70%]'>
                <div className='flow-root'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                            <div className='max-h-[21rem] sm:max-h-full overflow-y-auto'>
                                <table className='table-fixed min-w-full divide-y border rounded border-gray-200'>
                                    <thead className=' sticky top-0 bg-gray-100 z-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='whitespace-nowrap w-1/2 p-3.5 text-left text-sm font-semibold text-gray-900'
                                            >
                                                Load Name
                                            </th>
                                            <th
                                                scope='col'
                                                className='whitespace-nowrap w-1/4 p-3.5 text-left text-sm font-semibold text-gray-900'
                                            >
                                                Load Value
                                            </th>
                                            <th
                                                scope='col'
                                                className='whitespace-nowrap w-1/4 p-3.5 text-left text-sm font-semi-bold text-gray-900'
                                            >
                                                Quantity
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-gray-200 '>
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td className='whitespace-nowrap p-4 text-sm font-medium text-gray-700'>
                                                    {row.name}
                                                </td>
                                                <td className='whitespace-nowrap p-4 text-sm text-gray-500 text-center'>
                                                    {row.value} Watt
                                                </td>
                                                <td className='whitespace-nowrap p-2 text-sm text-gray-500'>
                                                    <input
                                                        className='w-24 rounded'
                                                        type='number'
                                                        min={0}
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            handleInputIncrement(
                                                                index,
                                                                parseInt(
                                                                    e.target
                                                                        .value
                                                                ),
                                                                row
                                                            );
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='justify-between flex whitespace-nowrap p-4 text-sm font-medium text-gray-700 border rounded mt-2'>
                                <div>Total Watt</div>
                                <div>
                                    {dataSum
                                        ? Object.values(dataSum).reduce(
                                              (a, b) => a + b,
                                              0
                                          )
                                        : 0}
                                </div>
                            </div>
                            <button
                                onClick={handleSreachClick}
                                className='bg-blue-500 hover:bg-blue-700 text-white mt-3 py-2 px-3 rounded'
                            >
                                Search Match
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='view-product justify-center w-full sm:w-[30%]'>
                {!viewProduct ? (
                    <div className='text-center border rounded p-4'>
                        <p className='text-xl font-medium'>
                            {' '}
                            Product will show here!
                        </p>
                    </div>
                ) : viewProduct && !viewProduct.message ? (
                    <div className='border rounded p-4'>
                        <img
                            src={viewProduct.product_image}
                            alt={viewProduct.product_name}
                        />

                        <div className='flex justify-between p-3'>
                            <a href={viewProduct.product_url}>
                                {viewProduct.product_name}
                            </a>
                            {settings && settings.viewPrice === 'true' && (
                                <span>{viewProduct.product_price}</span>
                            )}
                        </div>
                        {settings && settings.addToCart === 'true' && (
                            <a
                                href={viewProduct.add_to_cart}
                                className='button'
                            >
                                Add to Cart
                            </a>
                        )}
                    </div>
                ) : (
                    <div className='border rounded p-4'>
                        <p>No Product Found</p>
                    </div>
                )}
            </div>
        </div>
    );
}
