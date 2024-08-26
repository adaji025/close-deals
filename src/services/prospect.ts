import { APIS } from "@api/api";
import AxoisApi from "@api/index";

export const addProspect = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.PROSPECT}/add-prospect`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
