import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function New() {
    return (
        <div className='bg-white pt-4 rounded'>
            <form className='max-w-3xl mx-auto border p-5 rounded'>
                <div>
                    <div className="flex justify-between">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <span className="text-sm leading-6 text-gray-500" id="email-optional">
                          Required
                        </span>
                    </div>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Put calculator name here"
                            aria-describedby=""
                        />
                    </div>
                </div>
                <div>
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
                            // type="text"
                            name="description"
                            id="description"
                            className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="you can write something"
                            aria-describedby=""
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}