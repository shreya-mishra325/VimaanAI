import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">
        <h3 className="text-2xl font-semibold text-white">
        <Logo
          size="text-2xl"
          iconSize="w-6 h-6"
          color="text-white"
        />
      </h3>
        <p className="text-8sm text-gray-400 max-w-md">
          An aviation intelligence platform focused on understanding and
          predicting flight delay patterns in India.
        </p>

        <div className="relative mt-2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 blur-xl opacity-60"></div>
          <img
            src="/profile.jpeg"
            alt="Developer"
            className="relative w-20 h-20 scale-110 rounded-full object-cover border border-gray-700 bg-black"
          />
        </div>

        <p className="text-3sm">
          Developed by{" "}
          <span className="text-white font-medium">Shreya Mishra</span>
        </p>

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

        <div className="relative w-full flex justify-center mt-6">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-80"></div>
          <div className="absolute -top-6 w-3/4 h-16 bg-sky-500/25 blur-3xl"></div>
        </div>

        <p className="text-s text-gray-500 mt-4">
          © {new Date().getFullYear()} VimaanAI. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
