import React, { Component } from 'react';
import PropTypes from 'prop-types';
import highSchool from '../data/high_school_graduation_rates.js';
import kindergarten from '../data/kindergartners_in_full_day_program.js';
import childPoverty from '../data/school_aged_children_in_poverty.js';
import remediation from '../data/remediation_in_higher_education.js';

class Controls extends Component {
  constructor(){
    super();
  }

  updateAppView(event, dataChoice) {
    this.props.updateView(event.target.id, dataChoice);
  }

  render() {
    return (
      <div className="controls">
        <button className='buttonClick' id='kindergarten'
                onClick={(event) => this.updateAppView(event, kindergarten)} >
          Kindergartners In Full Day Program
        </button>
        <button className='buttonClick' id='highschool'
                onClick={(event) => this.updateAppView(event, highSchool)}>
          High School Graduation Rates
        </button>
        <button className='buttonClick' id='highschool'
                onClick={(event) => this.updateAppView(event, childPoverty)}>
          School Aged Children In Poverty
        </button>
        <button className='buttonClick' id='highschool'
                onClick={(event) => this.updateAppView(event, remediation)}>
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
