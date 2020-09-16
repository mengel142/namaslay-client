import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = (props) => {
  let path = useLocation().pathname;
  if (path !== '/') {
    return (
      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/meditation-river'>Meditation River</Link>
        <Link to='/asana-river'>Asana River</Link>
        <Link to='/bulletinboard'>Upcoming Events</Link>
        <Link to='/leaderboard'>Leader Board</Link>
        <Link to='/about'>About</Link>
        {!props.authTokens && <Link to='/login'>Log In</Link>}
        {props.authTokens && <Link to='/logout'>Log Out</Link>}
      </div>
    );
  }
  return null;
};

export default Menu;
