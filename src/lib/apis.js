import { setItem, clear } from './secureStorage';
import { createRequest } from './requestHelper';

export const loginApi = (data) => {
  return new Promise((resolve, reject) => {
    const request = createRequest({
      path: '/auth/local',
      method: 'POST',
      body: JSON.stringify(data),
      byPassAuth: true,
    });

    fetch(request)
      .then((response) => {
        if (response.status === 200) return response.json();
        else
          reject({
            error: 'UserName/Password is not correct ',
          });
      })
      .then((response) => {
        let role = response['user']['role']['name'] || null;
        const jwtToken = response['jwt'] || null;
        if (jwtToken === null || role === null)
          reject({
            error: 'UserName/Password is not correct ',
          });

        setItem('userId', response.user.id);
        setItem('userName', response.user.username);
        role = role.toLowerCase();
        setItem('role', role);
        setItem('jwtToken', jwtToken);
        resolve(true);
      })
      .catch((error) => {
        reject({
          error: `Error in login api ${JSON.stringify(error)}`,
        });
      });
  });
};

export const registerAPI = async (data) => {
  const request = createRequest({
    path: '/auth/local/register',
    method: 'POST',
    body:JSON.stringify({
      "username": "John DOE",
      "email": "contact@company.com",
      "password": "123456"
    }),
    byPassAuth: true,
  });

  let response = await fetch(request);
  if (response.status === 200||response.status === 201) {
    console.log(' registerAPI success');
  }
  
  console.log('response: ', response);
};

export const dummyabcAPI = async (data) => {
  const request = createRequest({
    path: '/abcs',
    method: 'GET',
    byPassAuth: false,
  });

  let response = await fetch(request);
  if (response.status === 200) {
    console.log(' in valid request dummyabcAPI')
  }

  response = await response.json();
  console.log('response: ', response);
};

export const logoutApi = () => {
  clear();
};
