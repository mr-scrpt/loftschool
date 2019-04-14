import axios from 'axios';

const token = localStorage.getItem('token');

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

/*axios.interceptors.response.use(
  response=> response,
  async err=>{
    const originalRequest = err.config;
    if (error.response.status === 401){
      const response = await axios.get('/refreshToken');
      const newToken = response.data.token;
      localStorage.setItem('token', newToken);
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
      originalRequest.headers['Authorization'] = `Bearer ${token}`;
      return axios(originalRequest);
    }
  }
);*/

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      return axios.post("/refreshToken").then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        originalRequest.headers["Authorization"] = `Bearer ${token}`;
        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default axios;