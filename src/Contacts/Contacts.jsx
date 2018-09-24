import React from 'react';

class Contacts extends React.Component {
  render() {
    return (
        <div className="contacts">
          <div className="contact">
            <h6 className="contacts-heading">Комендант: </h6>
            <p>Наталя Андрушків
            </p>
            <a href="tel:0935521991">0935521991</a>
            <br/>
            <a href="tel:0965592662">0965592662</a>
          </div>
          <div className="contact">
            <h6 className="contacts-heading">Бунчужний: </h6>
            <p>Ярко Співак</p>
            <a href="tel:0676377585">0676377585</a>
          </div>
          <div className="contact">
            <h6 className="contacts-heading">Писар: </h6>
            <p>Катерина Панькевич</p>
            <a href="tel:0932553546">093255546</a>
          </div>
        </div>
    );
  }
}

export default Contacts;
