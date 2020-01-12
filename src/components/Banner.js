import React from 'react';

const Banner = ({days}) => (
    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col s12 m10 l8 xl6">
                    <div className="cont-banner">
                        <div className="cont-desc">
                            <div className="cont-text white-text">
                                <p className="title">
                                    <span>What’s your opinion on</span> Pope Francis?
                                </p>
                                <p className="text light-text">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                                <div className="view-more">
                                    <a href="/#" className="white-text"><img src={require('../images/wiki.png')} alt="wiki" />More information</a>
                                </div>
                                <p className="text bold-text">What’s Your Verdict?</p>
                            </div>
                        </div>
                        <div className="cont-thumbs white-text">
                            <div className="row-1">
                                <div className="col s6">
                                    <div className="cont-thumb cont-thumb-up">
                                        <i className="material-icons">thumb_up</i>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="cont-thumb cont-thumb-down">
                                        <i className="material-icons">thumb_down</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="closing">
            <div className="cont-closing">
                <div className="cont-txt" style={{ width: "40%" }}>
                    <p className="white-text">CLOSING IN</p>
                </div>
                <div className="cont-days" style={{ width: "60%" }}>
                    <p className="grey-text text-darken-4">{days} <span className="light-text">days</span></p>
                </div>
            </div>
        </div>
    </div>
);

export default Banner;