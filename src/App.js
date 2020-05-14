import React, { Component } from 'react';
import GuestList from './components/GuestList';

class App extends Component {

  state = {
    guests: [
      {
        name: 'Jack',
        isConfirmed: true
      },
      {
        name: 'Karen',
        isConfirmed: true
      },
      {
        name: 'Cindy',
        isConfirmed: false
      }
    ]
  }

  toggleConfirmationAt = indexToChange => {
    const guestsArr = this.state.guests.slice();
    guestsArr[indexToChange].isConfirmed = !guestsArr[indexToChange].isConfirmed;
    this.setState({guests: guestsArr});
  };

  getTotalInvited = () => this.state.guests.length;
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Reservation App</p>
        <form>
            <input type="text" value="Geoff" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" /> Hide those who haven't responded
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
        />
      
      </div>
    </div>
    );
  }
}

export default App;
