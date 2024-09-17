import { APIS } from "@api/api";
import AxoisApi from "@api/index";
import { ProspectState } from "@utils/type/prospect";

export const addProspect = (data: any) => {
  return new Promise((resolve, reject) => {
    AxoisApi.post(`${APIS.PROSPECT}/add-prospect`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getProspect = () => {
  return new Promise<ProspectState>((resolve, reject) => {
    AxoisApi.get(`${APIS.PROSPECT}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
