import React from 'react';
import { useState } from 'react';

export default function AddNewCalculator() {
    const [sections, setSections] = useState([{ name: '', value: 0 }]);

    const handleNameChange = (index, event) => {
        const updatedSections = [...sections];
        updatedSections[index].name = event.target.value;
        setSections(updatedSections);
    };

    const handleValueChange = (index, event) => {
        const updatedSections = [...sections];
        updatedSections[index].value = event.target.value;
        setSections(updatedSections);
    };

    const handleAddSection = () => {
        setSections([...sections, { name: '', value: 0 }]);
    };

    const handleRemoveSection = (index) => {
        const updatedSections = [...sections];
        updatedSections.splice(index, 1);
        setSections(updatedSections);
    };

    const handleConsole = () => {
        console.log(sections);
    }
    return (
        <div className='bg-white p-2 rounded'>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Add New Calculator</h3>
                {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p> */}
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Calculator Name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                name="calculatorName"
                                id="calculatorName"
                                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Canculator Name"
                                aria-describedby="email-optional"
                            />
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                        <div className="mt-2">
                            <textarea
                                rows={4}
                                name="comment"
                                id="comment"
                                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                        <div>
                            {sections.map((section, index) => (
                                <div key={index} className='flex'>
                                    <input
                                        type="text"
                                        value={section.name}
                                        onChange={(event) => handleNameChange(index, event)}
                                    />
                                    <input
                                        type="text"
                                        value={section.value}
                                        onChange={(event) => handleValueChange(index, event)}
                                    />
                                    <button onClick={() => handleRemoveSection(index)}>Remove</button>
                                </div>
                            ))}
                            <button onClick={handleAddSection}>Add</button>
                            <button onClick={handleConsole}>Console</button>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    )
}