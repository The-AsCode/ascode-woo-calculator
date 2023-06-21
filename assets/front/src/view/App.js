import React from 'react';
import SingleCalculator from './component/SingleCalculator';

export default function App({ calculatorId }) {
    return (
        <div className='border'>
            <SingleCalculator calculatorId={calculatorId} />
        </div>
    )
}