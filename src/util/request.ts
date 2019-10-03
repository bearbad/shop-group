import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:12009"
});

const resq = (config: any) => {
  config.headers["X-Token"] = "token";
  return config;
};

const resqError = (error: any) => {
  Promise.reject(error);
};

request.interceptors.request.use(resq, resqError);

const resp = (resp: any) => {
  const ret = resp.data;
  if (ret.code === 200) {
    return ret.data;
  } else if (ret.code === 401) {
    window.location.href = "./index.php";
  } else {
    window.alert(ret.msg);
    return Promise.reject(new Error(ret.msg || "Error"));
  }
};

const respError = (error: any) => {
  return Promise.reject(error);
};
request.interceptors.response.use(resp, respError);

export default request;
