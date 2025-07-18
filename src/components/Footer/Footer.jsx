import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaVoicemail, FaPhoneAlt, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Rahul</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            {name :"Education", id :"education"},
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            {name:"Certificates", id:"certificates"},
            
            
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaPhoneAlt className="w-4 h-4"/>, link: "tel:+919108473189" },
            { icon: <FaTwitter />, link: "https://x.com/Gnx__Smokey" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rahul-poojary-a47aab260/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/itx._rah.in" },
            { icon: <FaWhatsapp />, link: "https://wa.me/+919108473189" },
            { icon: <MdOutlineEmail />, link: "mailto:rahulrakeshpoojary0@gmail.com" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {React.cloneElement(item.icon, { className: "w-4 h-4 lg:w-8 lg:h-8" })}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rahul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
