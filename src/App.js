import React, { Component } from 'react';

import GuestList from './components/GuestList';
import NewGuestForm from './components/NewGuestForm'

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Jack',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Karen',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Cindy',
        isConfirmed: false,
        isEditing: true,
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) => {
    const guestsArr = this.state.guests.slice();
    guestsArr[indexToChange][property] = !guestsArr[indexToChange][property];
    this.setState({guests: guestsArr});
  };

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt('isConfirmed', index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt('isEditing', index);

  setNameAt = (name, indexToChange) => {
    const guestsArr = this.state.guests.slice();
    guestsArr[indexToChange].name = name;
    this.setState({guests: guestsArr});
  };

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered })

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value })
  
  handleNameSubmit = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: '',
    })
  }

  getTotalInvited = () => this.state.guests.length;
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Reservation App</p>
        <NewGuestForm 
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
          handleNameSubmit={this.handleNameSubmit}
        />
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input 
              type="checkbox"
              onChange={this.toggleFilter}
              checked={this.state.isFiltered} 
            /> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <GuestList 
          guests={this.state.guests} 
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          isFiltered={this.state.isFiltered}
        />
      
      </div>
    </div>
    );
  }
}

export default App;
