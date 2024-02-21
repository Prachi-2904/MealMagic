import httpClient from '../http-common';



const addUser = (data) => {
  return httpClient.post('user/userregister', data);
};


const updateUser = (data) => {
  return httpClient.put('', data);
};

const deleteUser = (userid) => {
  return httpClient.delete(`/${userid}`);
};
export default { deleteUser,updateUser ,addUser};
