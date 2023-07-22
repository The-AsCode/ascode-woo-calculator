import React from 'react'
import { useParams } from 'react-router-dom';
import AddNewCalculator from './AddNewCalculator';

export default function EditCalculator() {
    const { id } = useParams();

    return (
        <AddNewCalculator />
    )
}
