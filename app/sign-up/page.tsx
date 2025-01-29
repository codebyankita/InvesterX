// pages/signup.tsx

'use client';
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Logo from "../components/Logo";

const SignUp: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");

    const handleFileEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage("");
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files);
            const validFiles = fileArray.filter((file) => file.size <= 10 * 1024 * 1024);
            const invalidFiles = fileArray.filter((file) => file.size > 10 * 1024 * 1024);

            if (invalidFiles.length > 0) {
                setErrorMessage("Some files exceed the 10 MB limit and were not added.");
            }

            setUploadedFiles([...uploadedFiles, ...validFiles]);
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (uploadedFiles.length === 0) {
            setErrorMessage("Please upload at least one file.");
            return;
        }
        if (phoneError) {
            setErrorMessage("Please provide a valid phone number.");
            return;
        }

        console.log("Form submitted with files:", uploadedFiles, "Phone Number:", phoneNumber);
    };

    return (
        <div className="flex bg-[#f6f8ff] items-center min-h-screen justify-center">
            <div className="w-full h-full md:max-w-lg p-8 bg-white rounded-lg">
                <div className="justify-items-center my-6">
                    <Logo />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                    <p className="mb-6">Complete the form below and we will contact you to discuss your project.</p>
                </div>

                <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Styled Phone Input */}
                    <div className="flex flex-col space-y-4">

                        <div className="flex items-center w-full p-3 border border-gray-300 rounded-lg">
                            <i className="fab fa-linkedin text-blue-700 mr-2"></i>
                            <input
                                type="text"
                                placeholder="Linkedin Username"
                                className="w-full outline-none"
                            />
                        </div>


                        <div >
                            <PhoneInput
                                enableSearch={true}
                                country={'us'}
                                value={phoneNumber}
                                onChange={(phone) => setPhoneNumber(phone)}
                                placeholder="Enter phone number"
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: false,
                                }}
                                isValid={(value) => {
                                    if (value.match(/12345/)) {
                                        setPhoneError('Invalid value: ' + value);
                                        return false;
                                    }
                                    setPhoneError(""); // Clear error if valid
                                    return true;
                                }}
                                containerClass=""
                                inputClass="w-full border-0"
                                buttonClass="bg-white border-0"
                                containerStyle={{

                                    // Optional: Set border-radius here if needed
                                }}
                                buttonStyle={{}}
                            />
                            {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
                        </div>
                    </div>

                    <textarea
                        placeholder="About Your Company"
                        className="w-full p-3 border border-gray-300 rounded-lg h-32"
                    ></textarea>

                    {/* File Upload */}
                    <div>
                        <label
                            htmlFor="file-upload"
                            className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                            Upload pitch Deck (less than 10MB)
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-700"
                            onChange={handleFileEvent}
                            multiple
                        />
                        {errorMessage && (
                            <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
                        )}
                        <div className="mt-2">
                            {uploadedFiles.map((file, index) => (
                                <p key={index} className="text-sm text-gray-700">
                                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </p>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                    >
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
