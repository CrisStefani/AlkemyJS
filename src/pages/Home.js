import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeroCard from '../components/HeroCard';
import { updateHeroes } from '../actions/index';
import HeroForm from '../components/HeroForm';
import Login from '../pages/Login';

import apiHero from '../api/apiHero';

class Home extends React.Component {
  componentDidMount() {
    const { updateHeroes, heroResults } = this.props;
    if (heroResults.length === 0) {
      const heroes = [];
      let i = 1;
      while (i <= 3) {
        apiHero
          .getHeroById(Math.floor(Math.random() * 731 + 1))
          .then(data => {
            if (data) {
              heroes.push(data);
            }
          });
        i += 1;
      }
      setTimeout(() => {
        updateHeroes(heroes);
      }, 3000);
    }
  }

  render() {
    const { heroResults } = this.props;
    return (
      <div className="heroList">
        <HeroForm />
        {heroResults.map((hero, index) => (
          <HeroCard
            id={index}
            key={hero.id}
            name={hero.name}
            image={hero.image.url}
            hero={hero}
          />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateHeroes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  heroResults: state.heroReducer.heroResults,
});

const matchDispatchToProps = dispatch => ({
  updateHeroes: results => {
    dispatch(updateHeroes(results));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Home);
