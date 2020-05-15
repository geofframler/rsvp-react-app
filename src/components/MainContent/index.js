import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFIlter';

const MainContent = props =>
  <div className="main">
    
    <ConfirmedFilter 
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />

    <Counter
      numberAttending={props.numberAttending}
      numberUnconfirmed={props.numberUnconfirmed}
      totalInvited={props.totalInvited}
    />

    <GuestList 
      guests={props.guests} 
      pendingGuest={props.pendingGuest}
      toggleConfirmationAt={props.toggleConfirmationAt}
      toggleEditingAt={props.toggleEditingAt}
      setNameAt={props.setNameAt}
      removeGuestAt={props.removeGuestAt}
      isFiltered={props.isFiltered}
    />

  </div>

MainContent.propTypes = {
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number,
  guests: PropTypes.array.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
}

export default MainContent;