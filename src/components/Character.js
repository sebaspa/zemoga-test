import React, { Component } from 'react';

class Character extends Component {
    state = {
        type_vote: "positive",
        actual_icon_vote: "thumb_up",
        actual_class_action: "cont-thumb-up"
    }

    componentDidMount() {
        if (this.props.character.votes.positive >= this.props.character.votes.negative) {
            this.setState({
                actual_class_action: "thumb cont-thumb-up",
                actual_icon_vote: "thumb_up"
            });
        }
        else {
            this.setState({
                actual_class_action: "thumb cont-thumb-down",
                actual_icon_vote: "thumb_down"
            });
        }
    }

    handleVote() {

    }

    render() {
        //Extract data
        const { id, name, bio, published_date, category, photo, votes } = this.props.character;

        //Calculate percent
        const totalVotes = votes.positive + votes.negative;
        const positiveVotesPercent = Math.floor((votes.positive / totalVotes) * 100);
        const negativeVotesPercent = Math.floor((votes.negative / totalVotes) * 100);
        const positivePercent = (votes.positive / totalVotes) * 100;
        const negativePercent = (votes.negative / totalVotes) * 100;

        return (
            <div className="col s12 l6">
                <div className="character" id={"character-" + id} style={{ backgroundImage: 'url(' + require('../images/characters/' + photo) + ')' }}>
                    <div className="cont-character">
                        <div className="cont-txt white-text">
                            <div className="cont-name">
                                <div className={this.state.actual_class_action}>
                                    <i className="material-icons">{this.state.actual_icon_vote}</i>
                                </div>
                                <p className="name">{name}</p>
                            </div>
                            <div className="cont-desc">
                                <div className="cont-date">
                                    <p className="date">{published_date} <span className="light-text">in {category}</span></p>
                                </div>
                                <div className="cont-bio">
                                    <p className="light-text">{bio}</p>
                                </div>
                                <div className="cont-actions">
                                    <div className="thumb-opc">
                                        <div className="action-thumb cont-thumb-up active">
                                            <i className="material-icons">thumb_up</i>
                                        </div>
                                        <div className="action-thumb cont-thumb-down">
                                            <i className="material-icons">thumb_down</i>
                                        </div>
                                    </div>
                                    <div className="cont-btn-vote">
                                        <button className="btn" onClick={this.handleVote}>Vote Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="total-votes">
                                <div className="cont-thumb cont-thumb-up" style={{ width: positivePercent + "%" }}>
                                    <p className="txt-vote"><i className="material-icons">thumb_up</i> <span>{positiveVotesPercent}%</span></p>
                                </div>
                                <div className="cont-thumb cont-thumb-down" style={{ width: negativePercent + "%" }}>
                                    <p className="txt-vote"><i className="material-icons">thumb_down</i> <span>{negativeVotesPercent}%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Character;