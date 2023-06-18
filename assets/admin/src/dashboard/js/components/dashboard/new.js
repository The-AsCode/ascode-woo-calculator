import React from 'react';
import { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function New() {
    const [sections, setSections] = useState([
        {
            calculator: {
                calculatorName: '',
                description: '',
                inputType: ''
            },
            fields: [
                {
                    name: '',
                    value: 0
                }
            ]
        }
    ]);

    const handleCalculatorNameChange = (event) => {
        const updatedSections = [...sections];
        updatedSections[0].calculator.calculatorName = event.target.value;
        setSections(updatedSections);
    };

    const handleDescriptionChange = (event) => {
        const updatedSections = [...sections];
        updatedSections[0].calculator.description = event.target.value;
        setSections(updatedSections);
    };

    const handleTypeChange = (event) => {
        const updatedSections = [...sections];
        updatedSections[0].calculator.type = event.target.value;
        setSections(updatedSections);
    };

    const handleNameChange = (index, event) => {
        const updatedSections = [...sections];
        updatedSections[0].fields[index].name = event.target.value;
        setSections(updatedSections);
    };

    const handleValueChange = (index, event) => {
        const updatedSections = [...sections];
        updatedSections[0].fields[index].value = event.target.value;
        setSections(updatedSections);
    };

    const handleAddSection = (event) => {
        event.preventDefault();
        const updatedSections = [...sections];
        updatedSections[0].fields.push({
            name: '',
            value: 0
        });
        setSections(updatedSections);
    };

    const handleRemoveSection = (index, event) => {
        event.preventDefault();
        const updatedSections = [...sections];
        updatedSections[0].fields.splice(index, 1);
        setSections(updatedSections);
    };

    const handleSave = () => {
        console.log(sections);
    }
    return (
        <div className='bg-white p-6 rounded'>
            <div className='max-w-3xl mx-auto'>
                <div className="min-w-0 flex-1 border p-5 mb-5 rounded">
                    <h5 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
                        Add New Calculator
                    </h5>
                </div>
                <form className='border p-5 rounded'>
                    <div className='mt-3'>
                        <div className="flex justify-between">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <span className="text-sm leading-6 text-gray-500" id="name-optional">
                                Required
                            </span>
                        </div>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-input block w-full rounded-md border-0 h-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Put calculator name here"
                                aria-describedby=""
                                value={sections[0].calculator.calculatorName}
                                onChange={handleCalculatorNameChange}
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="flex justify-between">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <span className="text-sm leading-6 text-gray-500" id="email-optional">
                                Optional
                            </span>
                        </div>
                        <div className="mt-2">
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                className="block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="you can write something"
                                aria-describedby=""
                                value={sections[0].calculator.description}
                                onChange={handleDescriptionChange}
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="flex justify-between">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Fields
                            </label>
                        </div>
                        <div className="mt-2">
                            {sections[0].fields.map((field, index) => (
                                <div key={index} className='flex mt-4'>
                                    <div className="relative mr-2">
                                        <label
                                            htmlFor="name"
                                            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                        >
                                            Input {index + 1} name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="block w-full rounded-md border-0 py-1.5 h-11 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            // placeholder={`Input ${index + 1} Name`}
                                            value={field.name}
                                            onChange={(event) => handleNameChange(index, event)}
                                        />
                                    </div>
                                    <div className="relative mr-2">
                                        <label
                                            htmlFor="value"
                                            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                        >
                                            Input {index + 1} value
                                        </label>
                                        <input
                                            type="text"
                                            name="value"
                                            id="value"
                                            className="block w-full rounded-md border-0 py-1.5 h-11 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            // placeholder={`Input ${index + 1} Value`}
                                            value={field.value}
                                            onChange={(event) => handleValueChange(index, event)}
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleRemoveSection(index, event)}
                                        className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >Remove</button>
                                </div>
                            ))}
                            <button
                                onClick={() => handleAddSection(event)}
                                className="rounded-md bg-indigo-600 mt-2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Add Field</button>
                        </div>
                    </div>
                </form>
                <div className='border mt-4'></div>
                <button
                    onClick={handleSave}
                    className="rounded-md mt-4 bg-green-600 mt-2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Save Calculator</button>
            </div>
        </div>
    )
}