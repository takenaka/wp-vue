// import axios from 'axios';

// export default () => {
//   try {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const _window = window as any;

//     axios.defaults.headers.common = {
//       'X-CSRF-TOKEN':
//         typeof _window.WordPress !== 'undefined'
//           ? _window.WordPress.csrfToken
//           : '',
//       'X-Requested-With': 'XMLHttpRequest'
//     };
//   } catch (e) {
//     console.log(e);
//   }
// };
