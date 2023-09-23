import React, { useEffect } from 'react';
import './header.css';
import Navigator from '../navigator/navigator';

const InitHeader = () => {

  return (
    <div className="init-header">
      <div className="header-content">
        <span className="title">JEHYUN's BLOG</span>
      </div>
    </div>
  )
}

const MainHeader = () => {

  return (
    <div className="main-header">
      <div className="header-content">
        <Navigator />
      </div>
    </div>  )
}

const Header = (props) => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  }
  useEffect(() => {
    console.log(getWindowDimensions())
  }, [])

  return (
    <div className="header">
      {
        props.scrollPosition == 0 ? <InitHeader/> : <MainHeader/>
      }
    </div>
  )
}

export default Header;