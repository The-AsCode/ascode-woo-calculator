import React, { useState, useEffect } from 'react';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        let data = {
            'action': 'ascode_load_calculator_preview_info_action',
            '_ajax_nonce': output_ajax_object.ajax_nonce,
        };

        jQuery.post(output_ajax_object.ajax_url, data, (response) => {
            console.log(response.data);
            setData('response.data');
            // alert(response.data.message);
        });

    }, []);
    return (
        <div className='border'>Hello from js</div>
    )
}