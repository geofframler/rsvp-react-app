import React, { Component } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';

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
  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">

      <Header 
        pendingGuest={this.state.pendingGuest}
        handleNameInput={this.handleNameInput}
        handleNameSubmit={this.handleNameSubmit}
      />

      <MainContent 
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
        totalInvited={totalInvited} 
        guests={this.state.guests} 
        pendingGuest={this.state.pendingGuest}
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        removeGuestAt={this.removeGuestAt}
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
      />

    </div>
    );
  }
}

export default App;
