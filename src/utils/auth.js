// import axios from 'axios';
// import Router from 'next/router';
// import { Cookies } from 'react-cookie';
// const cookies = new Cookies();
// import { VALIDATE_TOKEN } from 'Constants/apiUrls.js';

// const handleAuthSSR = async (ctx) => {
//   let token = null;
//   if (ctx.req) {
//     token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
//   } else {
//     token = cookies.get('token');
//   }

//   try {
//     await axios.get(VALIDATE_TOKEN, { headers: { 'x-access-token': token } });
//   } catch (err) {
//     if (ctx.res) {
//       ctx.res.writeHead(302, {
//         Location: '/login',
//       });
//       ctx.res.end();
//     } else {
//       Router.push('/login');
//     }
//   }
// };

// const getTokenFromCookies = async (req) => {
//   let token = null;
//   console.log(req);
//   if (req) {
//     token = req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
//   } else {
//     token = cookies.get('token');
//   }
//   return token;
// };

// export { getTokenFromCookies, handleAuthSSR };

import cookies from 'next-cookies';
import Router from 'next/router';

export const checkToken = (ctx) => {
  const { token } = cookies(ctx);
  if (!token) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/login',
      });
      ctx.res.end();
    } else {
      Router.push('/login');
    }
  }
  return token;
};
