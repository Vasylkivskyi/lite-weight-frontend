import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
import { VALIDATE_TOKEN } from 'Constants/apiUrls.js';

export async function handleAuthSSR(ctx) {
  let token = null;
  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  } else {
    // we don't have request info aka Client Side
    token = cookies.get('token');
  }

  try {
    await axios.get(VALIDATE_TOKEN, { headers: { 'x-access-token': token } });
    // dont really care about response, as long as it not an error
  } catch (err) {
    // in case of error redirecting back to login page
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/login',
      });
      ctx.res.end();
    } else {
      Router.push('/login');
    }
  }
}
