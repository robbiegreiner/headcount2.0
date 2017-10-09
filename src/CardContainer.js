import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';

class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  buildCard = (dataObject, key) => {
    return <Card object={dataObject}
                  key={key}
                  id={key}
                  comparisonMaker={this.props.comparisonMaker}
                  comparedData={this.props.comparedData}
                  resetComparedState={this.props.resetComparedState}/>;
  };

  normalCards = () => {
    const keys = Object.keys(this.props.bigData);
    return keys.map( key => {
      return this.buildCard(this.props.bigData[key], key);
    });
  }

  comparisonCards = () => {
    const keys2 = Object.keys(this.props.comparedData);
    return keys2.map( key => {
      return this.buildCard(this.props.comparedData[key], key);
    });
  }

  createAverageCard = () => {
    const cardQty = (Object.keys(this.props.comparedData).length);
    const avgKeys = (Object.keys(this.props.comparedData));
    let avgCard = '';

    if (cardQty === 2 ) {
      const newAverageCard = this.props.helper.compareDistrictAverages(avgKeys[0], avgKeys[1]);
      const avgCardKeys = Object.keys(newAverageCard);
      avgCard = <div className="compared-card">
                  <h4>{avgCardKeys[0] + ": " + newAverageCard[avgCardKeys[0]] }</h4>
                  <h3> ---{newAverageCard[avgCardKeys[2]]}--- </h3>
                  <h4>{avgCardKeys[1] + ": " + newAverageCard[avgCardKeys[1]] }</h4>
                  <button onClick={ () => this.props.resetComparedState()}>RESET</button>
                </div>;
    }
    return avgCard;
  }

  render() {
    return (
      <div>
        <div className="compared-card-container">
          { this.comparisonCards() }
          { this.createAverageCard() }
        </div>
        <div className="card-container">
          { this.normalCards() }
        </div>
      </div>
    );
  }
}

CardContainer.propTypes = {
  comparisonMaker: PropTypes.func,
  bigData: PropTypes.object,
  comparedData: PropTypes.object,
  resetComparedState: PropTypes.func,
  averageCard: PropTypes.object,
  helper: PropTypes.object
};


export default CardContainer;
