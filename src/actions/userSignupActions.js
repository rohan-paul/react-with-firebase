import axios from "axios";
import {
 API_ITEMS_LOADING,
} from "./types";

export const apiItemsLoading = bool => {
 return {
  type: API_ITEMS_LOADING,
  isLoading: bool
 };
};