export default function authHeader() {
  //let user = JSON.parse(localStorage.getItem('user'));

  let user = { username: 'angular', password: '@ngul@r0' };

  if (user && user.accessToken) {
    return {
      Authorization: 'Basic Auth ' + user
    };
  } else {
    return {};
  }
}


