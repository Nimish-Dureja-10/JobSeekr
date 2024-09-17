import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-2">
          <h2 className="text-2xl font-bold mb-2">JobSeekr</h2>
          <p className="text-lg">Bringing you quality services since 2024.</p>
        </div>
        <div className="mb-2">
          <p className="text-lg">&copy; 2024 Your JobSeekr. All rights reserved.</p>
        </div>
        <div className="mb-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-4 text-lg">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-4 text-lg">Terms of Service</a>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
