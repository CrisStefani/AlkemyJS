import axios from 'axios';

const mainURL = 'http://challenge-react.alkemy.org/';


const apiLogin = (() => {
    const getUserLogin = name => new Promise((resolve, reject) => {
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

export default apiLogin;
