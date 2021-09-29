import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Details = props => {
  const { option } = props;
  const { match } = props;
  const { id } = match.params;
  const { heroResults } = props;
  const currentHero = heroResults[id];

  const createOptionResults = () => {
    window.scrollTo(0, 50);

    if (option === 'appearance') {
      const { appearance } = currentHero;
      
      const { biography } = currentHero;
      return (
        <div>
          <h3>Peso</h3>
          <p>{`${appearance.weight[0]} - ${appearance.weight[1]}`}</p>
          <h3>Altura</h3>
          <p>{`${appearance.height[0]} - ${appearance.height[1]}`}</p>
          <h3>Nombre</h3>
          {' '}
          <p>{biography['full-name']}</p>
          <h3>Alias</h3>
          {biography.aliases.map(alias => (
            <p key={alias}>{alias}</p>
          ))}
          <h3>Color de Ojos</h3>
          <p>{appearance['eye-color']}</p>
          <h3>Color de cabello</h3>
          <p>{appearance['hair-color']}</p>
          
                    
        </div>
      );
    }
    
    if (option === 'powerstats') {
      const { powerstats } = currentHero;
      return (
        <div>
          <h3>Combat</h3>
          {' '}
          <p>{powerstats.combat}</p>
          <h3>Durability</h3>
          {' '}
          <p>{powerstats.durability}</p>
          <h3>Intelligence</h3>
          {' '}
          <p>{powerstats.intelligence}</p>
          <h3>Power</h3>
          <p>{powerstats.power}</p>
          <h3>Speed</h3>
          <p>{powerstats.speed}</p>
          <h3>Strength</h3>
          <p>{powerstats.strength}</p>
        </div>
      );
    }
    return true;
  };

  return (
    <div className="optionInfo row">
      <div className="left col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <p>{currentHero.name}</p>

        <img src={currentHero.image.url} alt={currentHero.name} />
      </div>

      <div className="right col-lg-6 col-md-6 col-sm-12 col-xs-12">
        {createOptionResults()}
      </div>
    </div>
  );
};

Details.propTypes = {
  heroResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  option: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  heroResults: state.heroReducer.heroResults,
  option: state.heroReducer.option,
  currentHero: state.heroReducer.currentHero,
});

export default connect(mapStateToProps, null)(Details);
