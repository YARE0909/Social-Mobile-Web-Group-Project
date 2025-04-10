import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-20 py-4 text-center border-t-3 border-black shadow-md shadow-blue-500">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} JomVia. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
