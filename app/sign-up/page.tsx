// // pages/signup.tsx
// 'use client'
// import React, { useState } from "react";
// import Logo from '../components/Logo';

// const SignUp: React.FC = () => {
//     const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
//     const [errorMessage, setErrorMessage] = useState<string>("");

//     const handleFileEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setErrorMessage(""); // Reset error message
//         const files = event.target.files;
//         if (files) {
//             const fileArray = Array.from(files);
//             const validFiles = fileArray.filter((file) => file.size <= 10 * 1024 * 1024); // 10 MB limit
//             const invalidFiles = fileArray.filter((file) => file.size > 10 * 1024 * 1024);

//             if (invalidFiles.length > 0) {
//                 setErrorMessage("Some files exceed the 10 MB limit and were not added.");
//             }

//             setUploadedFiles([...uploadedFiles, ...validFiles]);
//         }
//     };

//     const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         if (uploadedFiles.length === 0) {
//             setErrorMessage("Please upload at least one file.");
//             return;
//         }

//         // Submit form logic (e.g., send data to API)
//         console.log("Form submitted with files:", uploadedFiles);
//     };

//     return (
//         <div className="flex bg-[#f6f8ff] items-center min-h-screen justify-center">
//             <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
//                 <div className="justify-items-center my-6">
//                     <Logo />
//                 </div>
//                 <div className="text-center">
//                     <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
//                     <p className="mb-6">Complete the form below and we will contact you to discuss your project.</p>
//                 </div>

//                 <form className="space-y-4" onSubmit={handleFormSubmit}>
//                     <div className="flex space-x-4">
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             className="w-full p-3 border border-gray-300 rounded-3xl"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="w-full p-3 border border-gray-300 rounded-3xl"
//                         />
//                     </div>
//                     <div className="flex space-x-4">
//                         <div className="flex items-center w-full p-3 border border-gray-300 rounded-3xl">
//                             <i className="fab fa-linkedin text-blue-700 mr-2"></i>
//                             <input
//                                 type="text"
//                                 placeholder="Linkedin Username"
//                                 className="w-full outline-none"
//                             />
//                         </div>
//                         <div className="flex items-center w-full p-3 border border-gray-300 rounded-3xl">
//                             <input
//                                 type="text"
//                                 placeholder="+1"
//                                 className="w-full outline-none"
//                             />
//                         </div>
//                     </div>
//                     <textarea
//                         placeholder="About Your Company"
//                         className="w-full p-3 border border-gray-300 rounded-3xl h-32"
//                     ></textarea>

//                     {/* File Upload */}
//                     <div>
//                         <label
//                             htmlFor="file-upload"
//                             className="block text-sm font-semibold text-gray-900 mb-2"
//                         >
//                             Upload pitch Deck (less than 10MB)
//                         </label>
//                         <input
//                             id="file-upload"
//                             type="file"
//                             className="block w-full text-sm text-gray-500 border border-gray-300 rounded-3xl file:mr-4 file:py-2 file:px-4 file:rounded-3xl file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-700"
//                             onChange={handleFileEvent}
//                             multiple
//                         />
//                         {errorMessage && (
//                             <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
//                         )}
//                         <div className="mt-2">
//                             {uploadedFiles.map((file, index) => (
//                                 <p key={index} className="text-sm text-gray-700">
//                                     {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
//                                 </p>
//                             ))}
//                         </div>
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full p-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-700"
//                     >
//                         Submit Now
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

'use client'
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Skip this import if you want custom styling
import Logo from "../components/Logo";

const SignUp: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

    const handleFileEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage(""); // Reset error message
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files);
            const validFiles = fileArray.filter((file) => file.size <= 10 * 1024 * 1024); // 10 MB limit
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

        // Submit form logic (e.g., send data to API)
        console.log("Form submitted with files:", uploadedFiles, "Phone Number:", phoneNumber);
    };

    return (
        <div className="flex bg-[#f6f8ff] items-center min-h-screen justify-center">
            <div className="w-full h-full md:max-w-lg p-8 bg-white rounded-3xl ">
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
                            className="w-full p-3 border border-gray-300 rounded-3xl"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-3xl"
                        />
                    </div>
                    <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
                        <div className="flex items-center w-full p-3 border border-gray-300 rounded-3xl">
                            <i className="fab fa-linkedin text-blue-700 mr-2"></i>
                            <input
                                type="text"
                                placeholder="Linkedin Username"
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-center w-full p-3 border border-gray-300 rounded-3xl">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                defaultCountry="US"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>
                    <textarea
                        placeholder="About Your Company"
                        className="w-full p-3 border border-gray-300 rounded-3xl h-32"
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
                            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-3xl file:mr-4 file:py-2 file:px-4 file:rounded-3xl file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-700"
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
                        className="w-full p-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-700"
                    >
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
