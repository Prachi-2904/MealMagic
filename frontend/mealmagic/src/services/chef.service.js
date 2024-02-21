import httpClient from '../http-common';

const getAllChefs = () => {
  return httpClient.get('');
};

const addNewChef = (data) => {
  console.log(data);
  return httpClient.post('http://localhost:7080/chefs/chefregister', data);
};

const getChefByLocation = (locId) => {
  return httpClient.get(`/location/${locId}`);
};

const getBySpeciality = (spec) => {
  return httpClient.get(`/sepciality/${spec}`);
};

const updateChef = (data) => {
  return httpClient.put('', data);
};

const deleteChef = (chefid) => {
  return httpClient.delete(`/${chefid}`);
};

export default {
  getAllChefs,
  addNewChef,
  getChefByLocation,
  getBySpeciality,
  updateChef,
  deleteChef,
};
