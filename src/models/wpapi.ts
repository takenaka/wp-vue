import WPAPI from 'wpapi';

const wp = new WPAPI({
  endpoint: '/wp-json'
});

export default wp;
