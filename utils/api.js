import { host ,collection} from "./variables";
import {db,auth} from './firebase'
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

export const logIn =async (data)=>{
  return auth.signInWithEmailAndPassword(
    data.email,
    data.password
  )
}

//get info user
export const getUser =(data)=>{
    return fetch(`${host}/api/user`,raw(data,"POST")).then(dat =>dat.json());
}

//active socket
export const openSocket=async (data)=>{
  const {id,time} = data
  await db.doc(`${collection}/${id}`).update({
    time:time,
    timeLeng:time,
    timeLogic:time,
    timeMat:time
  });
}


// update response of alumno
export const testExam = async(data)=>{
  const {id,arre} = data
  await db.doc(`${collection}/${id}`).update({ test: arre });
}
export const testLogic=async(data)=>{
  const {id,arre} = data
  await db.doc(`${collection}/${id}`).update({ logico: arre });

}
export const lenguaExam =async(data)=>{
  const {id,arre} = data
  await db.doc(`${collection}/${id}`).update({ lengua: arre });
}

export const mateExam =async(data)=>{
  const {id,arre} = data
  await db.doc(`${collection}/${id}`).update({ matematico: arre });

}


//finish test
export const mateCancel =async(data)=>{
  await db.doc(`${collection}/${data.id}`).update({ activeMat: false });

}
export const logiCancel =async(data)=>{

  await db.doc(`${collection}/${data.id}`).update({ activeLogic: false });
}
export const lenguaCancel =async(data)=>{
  await db.doc(`${collection}/${data.id}`).update({ activeLengua: false });

}
export const examCancel =async(data)=>{
  await db.doc(`${collection}/${data.id}`).update({ activeExam1: false });
}
//destroy
export const allCancel =async(data)=>{
  await db.doc(`${collection}/${data.id}`).update({
    activeLengua: false,
    activeMat: false,
    activeLogic: false,
    activeExam1: false,
    time: 0,
  });
}

/**GET DATA USER */
export const getInitial = async (uid)=>{
  const data = await db
      .collection(collection)
      .where("user", "==", uid)
      .get();
    return { data: data?.docs[0]?.data() };
}

export const logOut = async ()=>{
  await auth.signOut();
}