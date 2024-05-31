import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Ranjan Prasad | Web Developer
          </a>
          {/* . All Rights Reserved. */}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/ranjandevelop"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/ranjankprasad"
              className="hover:underline me-4 md:me-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:ranjanprasad745@gmail.com"
              className="hover:underline me-4 md:me-6"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/ranjan21_"
              className="hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
