"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  {
    href: "https://www.linkedin.com/company/gethypednl/",
    icon: <FaLinkedinIn size={16} />,
  },
  {
    href: "https://www.tiktok.com/@gethyped.nl",
    icon: <FaTiktok size={16} />,
  },
  {
    href: "https://www.instagram.com/gethyped.nl/",
    icon: <FaInstagram size={16} />,
  },
  {
    href: "https://www.youtube.com/@gethypednl",
    icon: <FaYoutube size={16} />,
  },
];

const navLinks = [
  { name: "Expertises", href: "/expertises" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const RightSide = () => {
  return (
    <div className="md:pr-20">
      <div className="flex md:gap-10 flex-col md:flex-row md:items-end justify-center md:justify-between">

        {/* Left Section */}
        <div>

          {/* Mobile Button */}
          <div className="flex justify-center md:hidden gap-10 px-1.5 py-6">
            <motion.button
              className="relative bg-[#FA5424] text-white group flex items-center px-1.5 py-1.5 rounded-[0.7rem]"
              whileHover={{
                rotate: -4,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 12,
                },
              }}
            >
              <div className="flex items-center gap-2 pl-3 pr-1">
                <span className="font-bold text-sm whitespace-nowrap">
                  Get Hyped! Neem contact op
                </span>

                <div className="bg-white p-1.5 rounded-lg">
                  →
                </div>
              </div>
            </motion.button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group px-3.5 py-1.5 rounded-[0.67rem] bg-white overflow-hidden"
              >
                <span className="absolute inset-0">
                  <span className="absolute inset-0 w-[120%] bg-[#ff4d4d] translate-y-full rotate-[-12deg] group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-300" />

                  <span className="absolute inset-0 w-[120%] bg-black translate-y-full rotate-[-12deg] delay-75 group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-300" />
                </span>

                <span className="relative z-10 font-semibold text-[0.7rem] grid">
                  <span
                    className="group-hover:-translate-y-full transition-all"
                    style={{ gridArea: "1/1" }}
                  >
                    {link.name}
                  </span>

                  <span
                    className="translate-y-full group-hover:translate-y-0 text-white transition-all"
                    style={{ gridArea: "1/1" }}
                  >
                    {link.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-4 my-6">
              <span className="hidden md:block font-bold text-[1rem] selectionText">
                Follow us
              </span>

              <div className="flex gap-1">
                {socials.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="bg-white w-8 h-8 flex items-center justify-center rounded-full hover:scale-110 transition"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="flex flex-col gap-2 md:text-left text-center mb-2 md:mb-6">

            <div>
              <span className="hidden md:block font-bold text-[0.83rem] selectionText">
                Contact
              </span>

              <p className="text-[0.73rem] font-medium selectionText">
                info@gethyped.nl
              </p>

              <p className="text-[0.73rem] font-medium selectionText">
                +31 6 1533 7496
              </p>
            </div>

            <div>
              <span className="hidden md:block font-bold text-[0.83rem] selectionText">
                Adres
              </span>

              <p className="text-[0.73rem] font-medium selectionText">
                Beltrumsestraat 6,
              </p>

              <p className="text-[0.73rem] font-medium selectionText">
                7141 AL Groenlo
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center text-[0.7rem] text-gray-500 mb-4">

        <span className="selectionText">
          © 2025 Get Hyped
        </span>

        <Link
          href="https://www.dylanbrouwer.design"
          className="hover:text-[#ff4d4d] my-1 md:my-0 selectionText"
        >
          Design by Dylan
        </Link>

        <span className="hover:text-[#ff4d4d] selectionText">
          Privacyvoorwaarden
        </span>

      </div>
    </div>
  );
};

export default RightSide;