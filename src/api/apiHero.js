import axios from 'axios';

const mainURL = 'https://superheroapi.com/api/';
const token = '10224095540953785';

const apiHero = (() => {
    const getHeroByName = name => new Promise((resolve, reject) => {
    axios
      .get(
        `${
          mainURL + token
        }/search/${name}`,
      )
      .then(data => {
        resolve(data.data.results);
        reject(new Error('Error en la busqueda'));
      });
  });

  return {
    getHeroByName,
    
  };
})();

export default apiHero;
