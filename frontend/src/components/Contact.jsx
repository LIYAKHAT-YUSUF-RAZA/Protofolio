import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkedAlt,
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);
        formData.append("access_key", "eedf7e76-8c98-4285-b692-5d87e7ec46da");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success",
                });
                formRef.current.reset(); // ✅ clear form after success
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Network issue. Please try again later.",
                icon: "error",
            });
        }

        setLoading(false);
    };

    return (
        <div className="bg-gray-900 text-white py-12 sm:py-16 md:py-20" id="contact">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Contact Me
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {/* Left Side - Contact Info */}
                    <div className="flex-1 lg:max-w-lg">
                        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 sm:mb-6">
                                Let's Talk
                            </h3>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                                I'm open to discussing web development projects or partnership opportunities.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-center space-x-4">
                                    <FaEnvelope className="text-green-400 text-lg sm:text-xl flex-shrink-0" />
                                    <a
                                        href="mailto:shaikliyakhatyusufraza@gmail.com"
                                        className="hover:text-green-400 transition-colors duration-300 text-sm sm:text-base break-all"
                                    >
                                        shaikliyakhatyusufraza@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <FaPhone className="text-green-400 text-lg sm:text-xl flex-shrink-0" />
                                    <a
                                        href="tel:+918074637475"
                                        className="hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                                    >
                                        +91 8074637475
                                    </a>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <FaMapMarkedAlt className="text-green-400 text-lg sm:text-xl flex-shrink-0 mt-1" />
                                    <span className="text-sm sm:text-base">Gudivada, AndhraPradesh, India - 521301</span>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8">
                                <a
                                    href="https://wa.me/918074637475"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transform transition-transform duration-300"
                                >
                                    <FaWhatsapp size={28} className="text-green-500" />
                                </a>
                                <a
                                    href="https://github.com/LIYAKHAT-YUSUF-RAZA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transform transition-transform duration-300"
                                >
                                    <FaGithub size={28} className="text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shaik-liyakhat-yusuf-raza786274"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transform transition-transform duration-300"
                                >
                                    <FaLinkedin size={28} className="text-blue-500" />
                                </a>
                                <a
                                    href="https://www.instagram.com/liyakhat_yusuf_raza/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transform transition-transform duration-300"
                                >
                                    <FaInstagram size={28} className="text-pink-500" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="flex-1">
                        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block mb-2 text-sm sm:text-base font-semibold">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-sm sm:text-base"
                                            placeholder="Enter Your Name" required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm sm:text-base font-semibold">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-sm sm:text-base"
                                            placeholder="Enter Your Valid Email"required
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm sm:text-base font-semibold">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-sm sm:text-base resize-none"
                                            placeholder="Enter Your Message"
                                            rows="6" required
                                        />
                                    </div>

                                    <button
                                        /*  onClick={onSubmit} */
                                        disabled={loading}
                                        className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${loading
                                                ? "bg-gray-600 cursor-not-allowed"
                                                : "bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 hover:shadow-lg"
                                            } text-white transform`}
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>

                                    {/* <button
                                        type="submit"
                                        disabled={loading}
                                        className={`${loading
                                                ? "bg-gray-500 cursor-not-allowed"
                                                : "bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105"
                                            } text-white transform transition-transform duration-300 px-8 py-2 rounded-full`}
                                    >
                                        {loading ? "Sending..." : "Send"}
                                    </button> */}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact
