import React, { Component } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: []
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestProperty('isConfirmed', id);

  toggleEditing = id =>
    this.toggleGuestProperty('isEditing', id);

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
           name
          };
        }
        return guest;
      })
    });

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered })

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value })
  
  handleNameSubmit = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
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
        toggleConfirmation={this.toggleConfirmation}
        toggleEditing={this.toggleEditing}
        setName={this.setName}
        removeGuest={this.removeGuest}
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
      />

    </div>
    );
  }
}

export default App;