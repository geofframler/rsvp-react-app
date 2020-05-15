import React from 'react';
import PropTypes from 'prop-types';

import NewGuestForm from './NewGuestForm';

const Header = props =>
  <header>
    <h1>RSVP</h1>
    <p>A Reservation App</p>
    <NewGuestForm 
      pendingGuest={props.pendingGuest}
      handleNameInput={props.handleNameInput}
      handleNameSubmit={props.handleNameSubmit}
    />
  </header>

Header.propTypes = {
  handleNameInput: PropTypes.func.isRequired,
  handleNameSubmit: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default Header;