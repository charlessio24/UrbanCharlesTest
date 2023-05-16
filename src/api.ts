import axios from 'axios';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=10';

const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export default getUsers;
