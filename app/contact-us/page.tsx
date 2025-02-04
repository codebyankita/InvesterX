//app/contact-us//page.tsx

'use client';
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Logo from "../components/Logo";
import { CiLinkedin } from "react-icons/ci";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedinUsername: "",
        aboutCompany: "",
    });

    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage("");
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                setErrorMessage("File exceeds 10MB limit.");
            } else {
                setUploadedFile(file);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.linkedinUsername || !formData.aboutCompany || !phoneNumber) {
            setErrorMessage("All fields are required.");
            return;
        }
        if (phoneError) {
            setErrorMessage("Please provide a valid phone number.");
            return;
        }

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("linkedinUsername", formData.linkedinUsername);
        data.append("aboutCompany", formData.aboutCompany);
        data.append("phoneNumber", phoneNumber);
        if (uploadedFile) {
            data.append("pitchDeck", uploadedFile);
        }

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                body: data,
            });

            const result = await response.json();
            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({ name: "", email: "", linkedinUsername: "", aboutCompany: "" });
                setUploadedFile(null);
                setPhoneNumber("");
            } else {
                // Check if the error message is "Email already exists!"
                if (result.message === "Email already exists!") {
                    setErrorMessage("This email is already registered. Please use a different email.");
                } else {
                    setErrorMessage(result.message);
                }
            }
        } catch (error) {
            console.error(error);  // Log the error to the console for debugging
            setErrorMessage("Server error. Please try again.");
        }

    };

    return (
        <div className="flex bg-[#f6f8ff] items-center min-h-screen justify-center">
            <div className="w-full h-full md:max-w-lg p-8 bg-white rounded-3xl">
                <div className="justify-items-center my-6">
                    <Logo />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                    <p className="mb-6">Complete the form below and we will contact you.</p>
                </div>

                {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
                {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="flex items-center w-full p-3 border border-gray-300 rounded-lg">
                            <CiLinkedin className="fab fa-linkedin text-blue-700 h-6 w-6 mr-2" />
                            <input
                                type="text"
                                name="linkedinUsername"
                                placeholder="Linkedin Username"
                                className="w-full outline-none"
                                value={formData.linkedinUsername}
                                onChange={handleChange}
                            />
                        </div>
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

                    <textarea
                        name="aboutCompany"
                        placeholder="About Your Company"
                        className="w-full p-3 border border-gray-300 rounded-lg h-32"
                        value={formData.aboutCompany}
                        onChange={handleChange}
                    ></textarea>

                    <div>
                        <label htmlFor="file-upload" className="block text-sm font-semibold text-gray-900 mb-2">
                            Upload pitch Deck (less than 10MB)
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-700"
                            onChange={handleFileEvent}
                        />
                        {uploadedFile && <p className="text-sm text-gray-700 mt-2">{uploadedFile.name}</p>}
                    </div>

                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;