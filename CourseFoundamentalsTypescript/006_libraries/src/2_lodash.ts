import _ from 'lodash';

const data = [
  {
    username: 'Ana',
    role: 'admin'
  },
  {
    username: 'Ismael',
    role: 'seller'
  },
  {
    username: 'Richard',
    role: 'seller'
  },
  {
    username: 'Diego',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
