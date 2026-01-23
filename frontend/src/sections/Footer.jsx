import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">

        {/* Project name */}
        <h3 className="text-2xl font-semibold text-white">
          VimaanAI ✈️
        </h3>

        {/* Tagline */}
        <p className="text-8sm text-gray-400 max-w-md">
          An aviation intelligence platform focused on understanding and
          predicting flight delay patterns in India.
        </p>

        {/* Profile image */}
        <div className="relative mt-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 blur-xl opacity-60"></div>
          <img
            src="/profile.jpeg"
            alt="Developer"
            className="relative w-20 h-20 scale-110 rounded-full object-cover border border-gray-700 bg-black"
          />
        </div>

        {/* Developer info */}
        <p className="text-3sm">
          Developed by{" "}
          <span className="text-white font-medium">Shreya Mishra</span>
        </p>

        {/* Social links with icons */}
        <div className="flex gap-8 text-gray-400 text-xl">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-mishra-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:shreyamishra2k05@gmail.com"
            aria-label="Email"
            className="hover:text-white transition-transform duration-300 transform hover:scale-110"
          >
            <MdEmail />
          </a>
        </div>

        {/* Blue glow divider */}
        <div className="relative w-full flex justify-center mt-6">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-80"></div>
          <div className="absolute -top-6 w-3/4 h-16 bg-sky-500/25 blur-3xl"></div>
        </div>

        {/* Copyright */}
        <p className="text-s text-gray-500 mt-4">
          © {new Date().getFullYear()} VimaanAI. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
