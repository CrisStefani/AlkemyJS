import axios from 'axios';

const mainURL = 'https://superheroapi.com/api/';
const token = '10224095540953785';

const heroApi = (() => {
  const getHeroById = heroId => new Promise((resolve, reject) => {
    axios
      .get(`${mainURL + token}/${heroId}`)
      .then(data => {
        resolve(data.data);
        reject(new Error('something bad happened'));
      });
  });

  const getHeroByName = name => new Promise((resolve, reject) => {
    axios
      .get(
        `${
          mainURL + token
        }/search/${name}`,
      )
      .then(data => {
        resolve(data.data.results);
        reject(new Error('something bad happened'));
      });
  });

  return {
    getHeroByName,
    getHeroById,
  };
})();

export default heroApi;
