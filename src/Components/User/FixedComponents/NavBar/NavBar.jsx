import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const linkClasses = (path) => (
    `${activeLink === path ? 'text-[var(--primary-color)] font-bold' : 'text-black'} text-xl`
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--secondary-bg-color)] p-1 pl-20 pr-20 z-10 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <Link
          to="/donation"
          className={`bg-[var(--primary-color)] text-white px-4 py-2 rounded-md ${linkClasses('/donation')}`}
        >
          تبرع الآن
        </Link>
      </div>
      <div className="flex items-center space-x-10 pl-[500px]">
        <Link to="/p2p" className={linkClasses('/p2p')}>P2P</Link>
        <Link to="/support" className={linkClasses('/support')}>الدعم</Link>
        <Link to="/news" className={linkClasses('/news')}>الأخبار</Link>
        <Link to="/volunteerForm" className={linkClasses('/volunteerForm')}>التطوع</Link>
        <Link to="/" className={linkClasses('/')}>الرئيسية</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-green-900 text-2xl">
          <img className="w-14" src={'Assets/Images/logo.svg'} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
