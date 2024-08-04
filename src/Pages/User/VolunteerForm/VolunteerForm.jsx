import React, { useContext, useEffect, useState } from 'react';

const VolunteerForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(prevStep => (prevStep < 5 ? prevStep + 1 : prevStep));
    };

    const prevStep = () => {
        setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
    };

    return (
        <div>
            <div className="text-center m-4 text-xl font-bold">
                تطوع معنا
            </div>
            <div className="bg-[var(--secondary-bg-color)] p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto ">
                <div className="flex justify-center mb-8 rtl">
                    <div className="flex justify-center items-center w-full max-w-lg pl-20 ">
                        <div className="flex-1 flex items-center">
                            <div className={`h-4 w-4 rounded-full ${step >= 5 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} mr-2 `}></div>
                            <div className='relative w-10 bg-gray-200'>
                                <div className={`relative rounded-lg w-14 ${step >= 5 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'}`}>
                                    <div className={`rounded-lg w-7 h-1 flex-1 mr-2 ml-7 ${step >= 4 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} `}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center">
                            <div className={`h-4 w-4 rounded-full ${step >= 4 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} mr-2`}></div>
                            <div className={`relative rounded-lg w-14 ${step >= 4 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'}`}>
                                <div className={`rounded-lg w-7 h-1 flex-1 mr-2 ml-7 ${step >= 3 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} `}></div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center">
                            <div className={`h-4 w-4 rounded-full ${step >= 3 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} mr-2`}></div>
                            <div className={`relative rounded-lg w-14 ${step >= 3 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'}`}>
                                <div className={`rounded-lg w-7 h-1 flex-1 mr-2 ml-7 ${step >= 2 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} `}></div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center">
                            <div className={`h-4 w-4 rounded-full ${step >= 2 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} mr-2`}></div>
                            <div className={`relative rounded-lg w-14 ${step >= 2 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'}`}>
                                <div className={`rounded-lg w-7 h-1 flex-1 mr-2 ml-7 ${step >= 1 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'} `}></div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center">
                            <div className={`rounded-lg h-4 w-4 rounded-full mr-2 ${step >= 1 ? 'bg-[var(--primary-color)]' : 'bg-gray-300'}`}></div>
                        </div>
                    </div>
                </div>
                {step === 1 && (
                    <div>
                        <h2 className="text-right text-xl font-bold mb-4">معلومات شخصية</h2>
                        <div className="flex items-center pl-[470px] pb-5">
                            <div className="border bg-[var(--secondary-bg-color)]">
                                <label className="flex flex-col w-[136px] h-[36px] items-center shadow-lg tracking-wide uppercase border cursor-pointer">
                                    <span className="mt-2 text-base leading-normal text-xs text-gray-400">إدراج صورة توضيحية</span>
                                    <input type='file' className="hidden" />
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    placeholder="الكنية"
                                    type="text" className="bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='الاسم'
                                    type="text" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='اسم الأم'
                                    type="text" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='اسم الأب'
                                    type="text" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='العنوان'
                                    type="text" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='البريد'
                                    type="text" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='رقم الواتساب'
                                    type="tel" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='رقم الهاتف'
                                    type="tel" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='مكان وتاريخ الولادة'
                                    type="text" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <div>
                                <input
                                    placeholder='الجنسية'
                                    type="text" className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right" />
                            </div>
                            <form className="w-full max-w-lg rounded-lg ml-[315px]">
                                <div className="mb-4 text-right">
                                    <label className="block text-gray-400 text-sm font-bold mb-2">
                                        هل تعاني من مشاكل صحية؟
                                    </label>
                                    <div className="flex justify-end">
                                        <label className="text-gray-400 flex items-center text-gray-700">
                                            نعم
                                            <input type="radio" name="healthIssues" value="yes" className="ml-1" />
                                        </label>
                                        <label className="text-gray-400 pl-5 flex items-center text-gray-700">
                                            لا
                                            <input type="radio" name="healthIssues" value="no" className="ml-1" />
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4 text-right">
                                    <input
                                        type="text"
                                        id="comments"
                                        name="comments"
                                        className="mt-1 block w-full bg-[var(--secondary-bg-color)] block mt-1 w-full border-0 border-b focus:outline-none text-right"
                                        placeholder=":الحالة"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={nextStep}
                                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md shadow-sm"
                            >
                                التالي
                            </button>
                            <button
                                onClick={prevStep}
                                className="bg-gray-300 text-black px-4 py-2 rounded-md shadow-sm"
                                disabled={step === 1}
                            >
                                السابق
                            </button>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h2 className="text-right text-xl font-bold mb-4">مؤهلات علمية</h2>
                        {/* Add your input fields here for the second step */}
                        <form className="w-full max-w-3xl pb-5">
                            <div className="text-right">
                                <label className="text-gray-700 text-sm font-bold mb-2">
                                    ما هي أعلى شهادة حصلت عليها؟
                                </label>
                                <div className="flex justify-end flex-wrap">
                                    <label className="ml-4 flex items-center text-gray-700">
                                        <input type="radio" name="education" value="elementary" className="ml-1" />
                                        إبتدائية
                                    </label>
                                    <label className="ml-4 flex items-center text-gray-700">
                                        <input type="radio" name="education" value="intermediate" className="ml-1" />
                                        إعدادية
                                    </label>
                                    <label className="ml-4 flex items-center text-gray-700">
                                        <input type="radio" name="education" value="secondary" className="ml-1" />
                                        ثانوية
                                    </label>
                                    <label className="ml-4 flex items-center text-gray-700">
                                        <input type="radio" name="education" value="diploma" className="ml-1" />
                                        دبلوم
                                    </label>
                                    <label className="ml-4 flex items-center text-gray-700">
                                        <input type="radio" name="education" value="bachelor" className="ml-1" />
                                        جامعية
                                    </label>
                                    <label className="ml-4 flex items-center text-gray-700">
                                        <input type="radio" name="education" value="master" className="ml-1" />
                                        ماجستير
                                    </label>
                                    <label className="ml-4 flex items-center text-gray-700">
                                        <input type="radio" name="education" value="phd" className="ml-1" />
                                        دكتوراه
                                    </label>
                                </div>
                            </div>
                        </form>
                        {/* ................... */}
                        <form className="w-full max-w-lg shadow-md">
                            <div className="mb-4 text-right">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    المرحلة التعليمية
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
                                        <option>المرحلة الابتدائية</option>
                                        <option>المرحلة الإعدادية</option>
                                        <option>المرحلة الثانوية</option>
                                        <option>المرحلة الجامعية</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548l3.148 3.179a.746.746 0 001.073 0l3.148-3.179c.187-.189.187-.494 0-.683a.498.498 0 00-.715 0L10 9.942 6.231 6.865a.498.498 0 00-.715 0c-.187.189-.187.494 0 .683z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={nextStep}
                                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md shadow-sm"
                            >
                                التالي
                            </button>
                            <button
                                onClick={prevStep}
                                className="bg-gray-300 text-black px-4 py-2 rounded-md shadow-sm"
                            >
                                السابق
                            </button>
                        </div>
                    </div>
                )}
                {/* Add similar blocks for steps 3 to 5 */}
            </div>
        </div>
    );
};

export default VolunteerForm;
