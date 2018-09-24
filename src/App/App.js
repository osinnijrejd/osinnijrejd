import React from 'react';
import Main from '../Main/Main';
import NavBar from '../NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="root">
        <NavBar />
        <Main />
      </div>
    );
  }
}
export default App;
