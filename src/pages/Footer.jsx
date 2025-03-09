const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-bold text-orange-500">SunsetView</h2>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">Location</li>
              <li className="hover:text-orange-400 cursor-pointer">Facilities</li>
              <li className="hover:text-orange-400 cursor-pointer">Luxury Stays</li>
              <li className="hover:text-orange-400 cursor-pointer">Gallery</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <p className="text-gray-400 mt-4">&copy; 2025 SunsetView. All rights reserved.</p>
        </div>
      </footer>
    );
  };