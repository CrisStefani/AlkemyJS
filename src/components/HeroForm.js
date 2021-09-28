import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { updateHeroes } from '../actions/index';
import apiHero from '../api/apiHero';


class HeroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heroName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(id) {
    const { updateHeroes } = this.props;
    apiHero.getHeroById(id).then(data => {
      if (data) {
        updateHeroes([data]);
      }
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { updateHeroes } = this.props;
    const { heroName } = this.state;

    if (heroName === '') return;
    apiHero.getHeroByName(heroName).then(data => {
      if (data) {
        updateHeroes(data);
      }
    });
  }

  render() {
    const { heroName } = this.state;

    return (
      <div className="searchHeroInput .row">
        <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
          <h3 className="searchTitle">Busqueda</h3>
        </div>
        <div className="col-lg-4 col-md-7 col-sm-12 col-xs-12">
          <input
            value={heroName}
            id={heroName}
            name="heroName"
            type="text"
            placeholder="heroe que buscas"
            onChange={this.handleChange}
          />
        </div>
        <div className="buttonContainer col-lg-4 col-md-2 col-sm-12 col-xs-12">
          <button
            className="submitButton"
            type="submit"
            value="SUBMIT"
            onClick={this.handleSubmit}
          >
            Buscar
          </button>
        </div>
        
      </div>
    );
  }
}

HeroForm.propTypes = {
  updateHeroes: Proptypes.func.isRequired,
};

const matchDispatchToProps = dispatch => ({
  updateHeroes: results => {
    dispatch(updateHeroes(results));
  },
});

export default connect(null, matchDispatchToProps)(HeroForm);


