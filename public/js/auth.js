import axios from 'axios';

export const login = async (email, password) => {
    try {
      const res = await axios({
        method: 'POST',
        url: '/api/v1/users/login',
        data: {
          email,
          password
        }
      });
      if (res.data.status === 'success') {
        window.setTimeout(() => {
          location.assign('/dashboard');
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
};
  
export const register = async (data) => {
    try {
        const res = await axios({
          method: 'POST',
          url: '/api/v1/users/signup',
          data: data
        });

        if (res.data.status === 'success') {
          window.setTimeout(() => {
            location.assign('/dashboard');
          },1500);
        }
    } catch (err) {
        console.log(err);
    }
};
  
export const logout = async () => {
  console.log('click')
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.assign('/');
  } catch (err) {
    console.log(err.response);
    // showAlert('error', 'Error logging out! Try again.');
  }
};
