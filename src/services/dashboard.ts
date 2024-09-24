import { APIS } from "@api/api";
import AxoisApi from "@api/index";

export const getDashboardStats = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.DASHBOARD}/stats`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
