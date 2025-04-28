import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <h2 className="text-white text-[24px] font-bold mb-6">Connect with me</h2>
      <div className="flex gap-10">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            className="w-16 h-16 rounded-full bg-white p-2 hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-16 h-16 rounded-full bg-white p-2 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
