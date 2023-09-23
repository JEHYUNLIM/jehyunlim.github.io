import React, { useState, useEffect } from 'react';
import './home.css'
const Home = (props) => {

  return (
    <div className="home">
      {
        props.scrollPosition == 0 ? undefined
        :<div>
          hello
        </div>
      }
    </div>
  )
}

export default Home;