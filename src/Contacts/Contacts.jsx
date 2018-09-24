import React from 'react';

class Contacts extends React.Component {
  render() {
    return (
      <div className="content">
          <div className="contacts">
            <h5 className="content-heading">Контакти</h5>

            <div className="contact">
              <h6 className="contacts-heading">Комендант</h6>
              <p>Назік <a href="tel:9379992">9379992</a></p>
            </div>
            <div className="contact">
              <h6 className="contacts-heading">Бунч</h6>
              <p>Назік <a href="tel:9379992">9379992</a></p>
            </div>
            <div className="contact">
              <h6 className="contacts-heading">Писар</h6>
              <p>Назік <a href="tel:9379992">9379992</a></p>
            </div>
          </div>
      </div>
    );
  }
}

export default Contacts;
