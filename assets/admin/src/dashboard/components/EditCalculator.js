import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AddNewCalculator from './AddNewCalculator';
import { useDispatch, useSelector } from "react-redux";
import { handleUpdateCalculator } from '../calculatorSlice';


export default function EditCalculator() {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        let data = {
            'action': 'ascode_load_calculator_get_info_action',
            'id': id,
            '_ajax_nonce': ascodeWooCalculatorDashboard.nonce,
        };

        jQuery.post(ajaxurl, data, (response) => {
            dispatch(handleUpdateCalculator(response.data));
        });

    }, []);

    return (
        <AddNewCalculator />
    )
}
