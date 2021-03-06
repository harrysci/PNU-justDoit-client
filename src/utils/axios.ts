import axios from 'axios';
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  /* Develope Mode (Local API Server End-Point) */
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.53.72:5000' // 'http://[자신의 IPv4 Address]:5000'
      : 'http://localhost:5000',
  timeout: 3600,
});

export default {axiosInstance};
