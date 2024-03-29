import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar ({ currentPage, handlePageChange}) {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
    <a 
    href="#AboutMe"
    onClick={() => handlePageChange('AboutMe')}
    className={currentPage === 'AboutMe' ? 'nav-link active': 'nav-link'}
    >
      About Me 
    </a>
    </li>
    {/* Next Tab */}
    <li className='nav-item'>
    <a 
    href="#Portfolio"
    onClick={() => handlePageChange('Portfolio')}
    className={currentPage === 'Portfolio' ? 'nav-link active': 'nav-link'}
    >
      Portfolio
    </a>
    </li>
    {/* Next Tab */}
    <li className='nav-item'>
    <a 
    href="#Contact"
    onClick={() => handlePageChange('Contact')}
    className={currentPage === 'Contact' ? 'nav-link active': 'nav-link'}
    >
      Contact
    </a>
    </li>
{/* Next Tab */}
<li className='nav-item'>
    <a 
    href="#Resume"
    onClick={() => handlePageChange('Resume')}
    className={currentPage === 'Resume' ? 'nav-link active': 'nav-link'}
    >
      Resume
    </a>
    </li>
    </ul>
    </nav>
  );
}

export default Navbar;