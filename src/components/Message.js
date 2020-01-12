import React from 'react';

const Message = () => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        <div className="main-message">
          <div className="row mb-0">
            <div className="col s12 l4 xl3">
              <div className="cont-txt-1">
                <p className="title grey-text text-darken-4 text-center">Speak out. Be heard.</p>
                <p className="subtitle grey-text text-darken-4 text-center">Be counted</p>
              </div>
            </div>
            <div className="col s12 l7 xl8">
              <div className="cont-txt-2">
                <p className="grey-text text-darken-4 light-text">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
              </div>
            </div>
            <div className="col s12 l1">
              <div className="cont-close">
                <a href="/#" className="grey-text text-darken-4">X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Message;