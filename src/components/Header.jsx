import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './navbar-v2/Navbar';
import LogoImg from '../assets/wellmind-data-solutions-logo.png';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = `${location.pathname}${location.search}`;
  const onNavigate = useCallback((href) => navigate(href), [navigate]);

  let activeId = null;
  if (location.pathname.startsWith('/services')) activeId = 'services';
  else if (location.pathname.startsWith('/industry') || location.pathname === '/industries') activeId = 'industries';
  else if (location.pathname.startsWith('/case-studies')) activeId = 'case-studies';
  else if (location.pathname.startsWith('/resources')) activeId = 'resources';
  else if (location.pathname === '/ai-cost-calculator') activeId = 'calculator';
  else if (location.pathname === '/about') activeId = 'about';

  return (
    <Navbar
      key={pathname}
      logo={
        <>
          <img src={LogoImg} alt="" width="42" height="42" />
          <span className="nb__brand">
            <strong>WellMind</strong>
            <small>Data Solutions</small>
          </span>
        </>
      }
      activeId={activeId}
      onNavigate={onNavigate}
    />
  );
}
