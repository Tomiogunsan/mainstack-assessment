import { GET_WALLET } from "@config/apiUrl";
import { IGetWallet } from "./interface/response/revenue";
import api from "@config/http-common";

export const getWallet = () => {
  return api.get<IGetWallet>(GET_WALLET);
};
