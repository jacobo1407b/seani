import { host } from "./variables";
import 'isomorphic-fetch'
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
//var raw = JSON.stringify(respuesta.user);

const raw = (data, tipe) => {
  if (!tipe) {
    return {};
  }
  return {
    method: tipe,
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };
};

export const logIn =(data)=>{
    return fetch(`/api/log`, raw(data,"POST")).then(response=>response.json());
}
//get initial props firebase
export const getInitialData =()=>{
    return fetch(`${host}/api/inicial`).then(response=>response.json());
}
//get info user
export const getUser =(data)=>{
    return fetch(`${host}/api/user`,raw(data,"POST")).then(dat =>dat.json());
}
//active socket
export const openSocket=()=>{
    fetch("/api/socket");
}


// update response of alumno
export const testExam = (data)=>{
  return fetch(`/api/test/exam`,raw(data,"POST")).then(response=>response.json());
}
export const testLogic=(data)=>{
  return fetch(`/api/test/logico`,raw(data,"POST")).then(response=>response.json());

}
export const lenguaExam =(data)=>{
  return fetch(`/api/test/lengua`,raw(data,"POST")).then(response=>response.json());
}

export const mateExam =(data)=>{
  return fetch(`/api/test/mate`,raw(data,"POST")).then(response=>response.json());
}


//finish test
export const mateCancel =(data)=>{
  return fetch(`/api/cancel/mate`,raw(data,"POST")).then(response=>response.json());
}
export const logiCancel =(data)=>{
  return fetch(`/api/cancel/logic`,raw(data,"POST")).then(response=>response.json());
}
export const lenguaCancel =(data)=>{
  return fetch(`/api/cancel/lengua`,raw(data,"POST")).then(response=>response.json());
}
export const examCancel =(data)=>{
  return fetch(`/api/cancel/exam`,raw(data,"POST")).then(response=>response.json());
}
//destroy
export const allCancel =(data)=>{
  return fetch(`/api/cancel/all`,raw(data,"POST")).then(response=>response.json());
}
