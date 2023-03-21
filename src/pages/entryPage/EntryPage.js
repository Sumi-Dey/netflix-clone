import React, { useRef, useState } from 'react';
import './EntryPage.scss';
import bg from "../../assets/bg.png";
import logo from "../../assets/logo.png";
import Login from '../../components/general/login/Login';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const EntryPage = () => {
  const [openlogin,setOpenlogin] = useState(false);

  return (
    <div className='entrypage' >
      <img src={bg} alt='...' className='bg-img' />
      {/* <div className='entrypage-nav'>
        <div className='left-entrypage-nav'>
          <img src={logo} alt="Netflix" className='logo' onClick={()=>setOpenlogin(false)} />
        </div>
        <div className='right-entrypage-nav'>
          {!openlogin && <button className='btn' onClick={()=>setOpenlogin(true)}>Sign In</button>}
        </div>
      </div> */}
      {!openlogin && <div className='cover-text'>
        <div>Unlimited movies, TV shows and more.</div>
        <div>Watch anywhere. Cancel anytime.</div>
      </div>}
      <div className='login-cover'>
        {openlogin && <Login />}
      </div>
    </div>
  )
}

export default EntryPage;
