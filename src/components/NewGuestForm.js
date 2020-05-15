import React from 'react';

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


export default NewGuestForm;