import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AddNewCalculator from './AddNewCalculator';

export default function EditCalculator() {
    const { id } = useParams();

    useEffect(() => {
        let data = {
            'action': 'ascode_load_calculator_get_info_action',
            'id': id,
            '_ajax_nonce': ascodeWooCalculatorDashboard.nonce,
        };

        jQuery.post(ajaxurl, data, (response) => {
            console.log(response.data);
        });

    }, []);

    return (
        <AddNewCalculator />
    )
}
