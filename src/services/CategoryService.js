import {ApiContants} from '../contants';
import axios from 'axios';
import {authHeader} from '../utils/Generator';
import {getToken} from '../Store';

const getCategory = async () => {
  console.log(`CategoriesService | getCategories`);
  try {
    let categoryResponse = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.CATEGORY}`,
      {
        headers: authHeader(getToken()),
      },
    );
    if (categoryResponse?.status === 200) {
      return {
        status: true,
        message: `Category data fetched`,
        data: categoryResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Category data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Category data not found`,
    };
  }
};


const getOneCategoryById = async categoryId => {
  console.log(`CategoriesService | getOneCategoryById`);
  try {
    let categoryResponse = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.CATEGORY}/${categoryId}`,
      {
        headers: authHeader(getToken()),
      },
    );
    if (categoryResponse?.status === 200) {
      return {
        status: true,
        message: `Category data fetched`,
        data: categoryResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Category data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Category data not found`,
    };
  }
};

export default {getCategory, getOneCategoryById};