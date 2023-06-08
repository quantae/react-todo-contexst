import React from 'react';
import logoFile from './logoFile.svg';

function Logo() {
  return (
    <div style={{margin:'1rem auto', display:'flex', justifyContent:'center'}}>
      <img src={logoFile} alt="logo"  width={90}/>
    </div>
  )
}

export default Logo
