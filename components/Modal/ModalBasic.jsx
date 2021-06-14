import React from "react";
import {useRouter} from 'next/router'
import Swal from "sweetalert2";
import { Menu } from "semantic-ui-react";
import {useSelector,useDispatch} from 'react-redux';
import {accionAlumno} from '../../redux/accion'
import {mateCancel,logiCancel,lenguaCancel,examCancel,getInitial} from '../../utils/api';
import styled from 'styled-components';

const Modal = () => {

  const dispatch = useDispatch()
  const router = useRouter();
  const typeTest = useSelector(state => state.typeTest);
  const time = useSelector(state => state.time);
  const user = useSelector(state => state.user);
  const primer = () => {
    if (time > 0) {
      Swal.fire({
        title: `¿Terminar módulo ${typeTest}?`,
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: "¿Estas seguro?",
            text: "Tienes tiempo para revisar tu módulo",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si estoy totalmente seguro!",
          }).then((result) => {
            if (result.value) {
              // localStorage.setItem('time', 0)
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  examCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;
                case "Estructura de la lengua":
                  //lengua
                  lenguaCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;
                case "Comprensión lectora":
                  //logico
                  logiCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  });
                  break;
                case "Pensamiento matemático":
                  //mate
                  mateCancel({id:user?.uid}).then(async ()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;

                default:
                  examCancel({id:user?.uid}).then(async()=>{
                    const {data} = await getInitial(user.uid)
                    dispatch(accionAlumno({data}))
                    router.push('/home')
                  })
                  break;
              }
            }
          });
        }
      });
    }
  };
  
  //<Menu.Item name="Terminar este módulo" onClick={primer} className="my-color" />
  return (
    <div>
      <BtnEnd onClick={primer} >Terminar este módulo</BtnEnd>
    </div>
  );
};

const BtnEnd = styled.button`
  background: #ee9b00;
  color: #fff;
  padding: 5px 12px;
  border-radius: 8px;
  &:hover{
    background: #da8403;
  }
`;

export default Modal;

/***
 *
 *
 *
 */
