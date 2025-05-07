import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import React, {createContext, useEffect, useState, } from 'react';
import {useNavigate} from 'react-router-dom'
import api from '../config';
import { successToast } from "../component/index";
export const Context = createContext();



export const ContextProvider = ({children}) => {
 let navigator = useNavigate()

 const login = async (email, password) => {
  try {
    const response = await api.post('/user/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('x-access-token', token);
    return { success: true, token };
  } catch (error) {
    return { success: false, message: error.response?.data?.message || 'Login failed' };
  }
};

const logout = () => {
  localStorage.removeItem('x-access-token');
};

const isAuthenticated = () => {
  const token = localStorage.getItem('x-access-token');
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      logout();
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};


const getCurrentUser = () => {
  const token = localStorage.getItem('x-access-token');
  if (token) {
    return jwtDecode(token);
  }
  return null;
};
  const createUser = async (values) => {

      try {
        const response = await api.post(
          `/user/create`,
          values,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response){
          successToast("Saved Successfully");
        }
        window.location.reload()
       
        return response;
      } catch (error) {
        console.log(error);
      
    
  
  };}


  const findAll = async () => {
    
      try {
        const response = await api.get(`/user/findall`)
        console.log("999",response)
        return response.data;
      } catch (error) {
        console.log(error);
      
    };
  }
 
  const deleteUser = async(_id) => {
    try {
      const response = await api.delete(`/user/delete/${_id}`)
      return response.data;
    } catch (error) {
      console.log(error);
    
  };
  }
  const updateUser = async (_id,values) => {
    try {
      const response = await api.put(`/user/update/${_id}`,values)
      return response.data;
    } catch (error) {
      console.log(error);
    
  };
  }

  
  
  return (
    <Context.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        getCurrentUser,
        createUser,
        findAll,
        deleteUser,
        updateUser,
      }}>
      {children}
    </Context.Provider>
  );
};