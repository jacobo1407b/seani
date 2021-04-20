import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useSnackbar } from "notistack";
import {useDispatch} from 'react-redux'
import {accionTime} from '../../redux/accion'
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import {allCancel} from '../../utils/api';



function RelojLimit({ user,alumno }) {
  const [sock, setSock] = useState(null);
  useEffect(() => {
    fetch("/api/socket");
    const socket = io();
    socket.on("connect", () => {
      console.log(`user ${user.uid} connect`);
    });
    setSock(socket);
    return () =>
      socket.on("disconnect", () => {
        console.log(`user ${user.uid} disconnect`);
      });
  }, []);
  return <TimerInternal socket={sock} user={user} alumno={alumno} />;
}


function TimerInternal({ socket,user,alumno}) {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  const [seconds, setSeconds] = useState(alumno?.data?.time);
  const [timer, setTimer] = useState({ h: null, m: null, s: null });

  useEffect(() => {
    let interval = null;
    if(seconds ===900){
      enqueueSnackbar("Quedan 15 minutos para finalizar", {
        variant: "warning",
      });
    }
    if(seconds === 0){

      enqueueSnackbar("El tiempo para realizar tu examen finalizo", {
        variant: "info",
      });
      setSeconds(0);
      dispatch(accionTime(0))
      setTimer({
        s: 0,
        h: 0,
        m: 0,
      });
      socket?.emit("message", { id: user.uid, time: seconds });
      allCancel({id:user?.uid}).then(()=>{
        window.location.replace('/home')
      })
    }else{
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      dispatch(accionTime(seconds))
      setTimer({
        s: Math.round(seconds % 0x3c),
        h: Math.floor(seconds / 0xe10),
        m: Math.floor(seconds / 0x3c) % 0x3c,
      });
      socket?.emit("message", { id: user.uid, time: seconds });
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <AccessAlarmIcon />
      {`${timer.h}H ${timer.m} M ${timer.s}S`}
    </>
  );
}

export default RelojLimit;
