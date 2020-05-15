import React from 'react';
import PropTypes from 'prop-types';

const NewGuestForm = props => 
  <form onSubmit={props.handleNameSubmit}>
    <input
      type="text" 
      value={props.pendingGuest} 
      onChange={props.handleNameInput}
      placeholder="Invite Someone" 
    />
    <button 
      type="submit" 
      name="submit" 
      value="submit"
    >
      Submit
    </button>
  </form>

NewGuestForm.propTypes = {
  handleNameInput: PropTypes.func.isRequired,
  handleNameSubmit: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default NewGuestForm;