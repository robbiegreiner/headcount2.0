import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
  constructor(){
    super();
  }

  updateAppView(event) {
    this.props.updateView(event.target.id);
  }

  render() {
    return (
      <div className="controls">
        <button className='buttonClick' id='kindergarten'
                onClick={(event) => this.updateAppView(event)} >
          Kindergartners In Full Day Program
        </button>
        <button>
          High School Graduation Rates
        </button>
        <button>
          School Aged Children In Poverty
        </button>
        <button>
          Remediation In Higher Education
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  updateView: PropTypes.func
};

export default Controls;
