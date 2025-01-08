import React, { useState } from "react";
import { FiSearch, FiUser, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

interface MenuItem {
  label: string;
  subItems?: string[];
}

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems: MenuItem[] = [
    { label: "Home" },
    {
      label: "Living",
      subItems: ["TV Units", "Box Shelves", "Shoe Rack", "Dressing Table", "Wardrobes"],
    },
    {
      label: "Storage",
      subItems: ["Bookshelves", "Cabinets", "Sideboards", "Chest of Drawers"],
    },
    {
      label: "Dining",
      subItems: ["Dining Tables", "Dining Chairs", "Dining Sets"],
    },
    {
      label: "Bedroom",
      subItems: ["Beds", "Mattresses", "Wardrobes", "Nightstands"],
    },
    {
      label: "Matters",
      subItems: ["Foam", "Spring", "Latex", "Hybrid"],
    },
    {
      label: "Study",
      subItems: ["Study Tables", "Chairs", "Bookshelves", "Desk Accessories"],
    },
    {
      label: "Office",
      subItems: ["Office Chairs", "Office Tables", "Cabinets", "Partitions"],
    },
    {
      label: "Outdoor",
      subItems: ["Patio Furniture", "Garden Chairs", "Outdoor Tables", "Swings"],
    },
  ];

  return (
    <nav className="bg-black text-white shadow-lg box-border">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center animate__animated animate__bounceInDown">
            <img
              src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__"
              alt="Vibrer Logo"
              className="h-[100px] mt-[-24px] mb-[-24px] w-auto "
            />
          </div>

          {/* Menu */}
          <div className="hidden lg:flex space-x-4">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center space-x-1 animate__animated animate__bounceInLeft">
                  <button
                    className="px-3 py-2 hover:bg-gray-700 hover:text-gray-300 rounded transition duration-300"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                  </button>
                  {item.subItems && (
                    <FiChevronDown
                      className={`cursor-pointer transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      onClick={() => toggleDropdown(index)}
                    />
                  )}
                </div>
                {item.subItems && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 bg-white text-black shadow-2xl-strong rounded-md z-10">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-800 transition duration-300"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Utility Icons */}
          <div className="flex items-center space-x-2">
            <button className="transform hover:scale-110 transition duration-300 mr-[20px] animate__animated animate__bounceInRight">
              <FiSearch size={24} className="hover:text-gray-300" />
            </button>
            <button className="transform hover:scale-110 transition duration-300 ml-[20px] animate__animated animate__bounceInLeft">
              <FiUser size={24} className="hover:text-gray-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX
                size={24}
                className="hover:text-gray-300 transform hover:rotate-180 transition duration-300"
              />
            ) : (
              <FiMenu
                size={24}
                className="hover:text-gray-300 transform hover:scale-125 transition duration-300"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 p-4 rounded-md shadow-2xl-strong">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700 hover:rounded-md transition duration-300"
                >
                  {item.label}
                </a>
                {item.subItems?.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 pl-6 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
