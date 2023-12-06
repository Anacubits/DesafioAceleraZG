const axios = require('axios');

const url = 'https://tranquil-rex-405218.rj.r.appspot.com/hashCodeServer';

const data = {
  nome: 'Ana Cubits',
  email: 'anacubitss@gmail.com',
  cpf: '118.509.384-23',
};

axios.post(url, null, { params: data })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
