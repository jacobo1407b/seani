import React, { useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Radio from "@material-ui/core/Radio";
import {useSelector} from 'react-redux'
import {testLogic} from '../../utils/api';
import Alert from '../Alert/Alert';
import styled from 'styled-components';

const Logic = ({ dtajs, dataAlumno, posision, todos }) => {

  const user = useSelector(state => state.user)
  let conver = parseInt(posision);
  let valorActive = dataAlumno[conver] ? dataAlumno[conver] : "";
  const [tempResp, setTempResp] = useState({});
  const [selectValue, setSelectValue] = useState(valorActive.respuesta);
  const [estadoAlerta, cambiarEstadoAlerta]=useState(false);
  const [alerta, cambiarAlerta]=useState({});

  useEffect(() => {
    setSelectValue(valorActive.respuesta);
  }, [valorActive.respuesta]);

  useEffect(()=>{

    let respValue = dataAlumno[posision].respuesta;

    respValue != "" ? console.log('contesta porfa') : 
    setSelectValue();

  }, [conver])

  const handlerElegirRespuesta = (e) => {
    setTempResp({
      pregunta: dtajs?._id,
      respuesta: e.target.value,
    });
    setSelectValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(false);
    cambiarAlerta({});

    if (!tempResp?.pregunta || !tempResp?.pregunta) {
      return false;
    } else {
      dataAlumno[conver] = tempResp;
      testLogic({id:user?.uid,arre:dataAlumno})
      .then(()=>{
        cambiarEstadoAlerta(true);
        cambiarAlerta({
          tipo: 'exito', mensaje: 'Se guardo con exito'
        });
      }).catch((error)=>{
        cambiarEstadoAlerta(true);
        cambiarAlerta({
          tipo: 'error', mensaje: 'Existio un error, intentalo nuevamente'
        });
      })
      setTempResp({});
    }
  };

  return (
    <div>
      {dtajs?.pregunta_txt ? <PreguntaTexto>{dtajs?.pregunta_txt}</PreguntaTexto> : null}
      {dtajs?.pregunta_url ? (
        <img
          className="responsive-img materialboxed"
          src={dtajs?.pregunta_url}
          alt="pregunta"
          width="900px"
          height="550px"
          // onClick={zoomHandler}
        />
      ) : null}
      <form onSubmit={handlerSubmit}>
        <FormControl component="fieldset">
          <RadioGroup
            //defaultValue={selectValue}
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label={dtajs?.respuesta1}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "A"}
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label={dtajs?.respuesta2}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "B"}
            />
            <FormControlLabel
              value="C"
              control={<Radio />}
              label={dtajs?.respuesta3}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "C"}
            />
            <FormControlLabel
              value="D"
              control={<Radio />}
              label={dtajs?.respuesta4}
              onChange={handlerElegirRespuesta}
              checked={selectValue === "D"}
            />
          </RadioGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Guardar Respuesta
          </Button>
        </FormControl>
      </form>
      <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambiarEstadoAerta={cambiarEstadoAlerta} />
    </div>
  );
};

const PreguntaTexto = styled.p`
  padding: 15px 0px;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 2px;
  @media (max-width: 600px){
    font-size: 18px;
  }
`;

export default Logic;
