import {ApiContants} from '../contants';
import axios from 'axios';
import {authHeader} from '../utils/Generator';
import {getToken} from '../Store';

const getOneProductById = async productId => {
  console.log(`ProductService | getOneProductById`);
  try {
    let productResponse = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.PRODUCT}/${productId}`,
      {
        headers: authHeader(getToken()),
      },
    );
    if (productResponse?.status === 200) {
      return {
        status: true,
        message: `Product data fetched`,
        data: productResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Product data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Product data not found`,
    };
  }
};

export default {getOneProductById};