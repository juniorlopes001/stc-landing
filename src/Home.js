import React, {} from 'react'
import Header from './Header'
import About from './About'
import DesktopSystem from './DesktopSystem'
import MobileSystem from './MobileSystem'
import Form from './Form'
import Footer from './Footer'
import App from './App'

function home() {
  return (
  <div>
    <About />
    <DesktopSystem />
    <MobileSystem />
    <Form />
  </div>
  );
}

export default home;
