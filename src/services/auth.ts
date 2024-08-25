import { APIS } from "@api/api";
import axios from "axios";


export const userSignUp = (data: any) => {
  return new Promise((resolve, reject) => {
    axios.post(`${APIS.AUTH.register}`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const userLogin = (data: any) => {
  return new Promise((resolve, reject) => {
    axios.post(`${APIS.AUTH.login}`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};