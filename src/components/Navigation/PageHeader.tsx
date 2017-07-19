import * as React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './PageHeader.css';
const logo = require('./logo.svg');

const LeftLogo = () => {
  return (
    <Link to="/" className="Navbar__brand">
      <img src={logo} className="Logo" alt="logo" />
    </Link>
  );
};

const loggedOutLinks = [{ path: '/', text: 'home' }, { path: 'store-picker' }];

const loggedInLinks = [
  { path: '/', text: 'home' },
  { path: 'account' },
  { path: 'users' },
  { path: 'checkout' }
];

interface Props {
  account: boolean;
}

export default ({ account }: Props) => {
  return (
    <header>
      <div className="Navbar-container">
        <LeftLogo />
        <Navbar links={account ? loggedInLinks : loggedOutLinks} />
      </div>
    </header>
  );
};
