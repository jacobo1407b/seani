import { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import PropTypes from 'prop-types';
//materiañ
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
//custom
import {useSelector} from 'react-redux'
import {mateExam} from 'utils/api';
import {IMG} from './styled';
import Alert from '../Alert/Alert';
const Mat = ({ dtajs, dataAlumno, posision }) => {

  const user = useSelector(state => state.user)
  let conver = parseInt(posision);
  let valorActive = dataAlumno[conver] ? dataAlumno[conver] : "";
  const [tempResp, setTempResp] = useState({});
  const [selectValue, setSelectValue] = useState(valorActive.respuesta);
  const [alertState, changeAlertState]=useState(false);
  const [alert, changeAlert]=useState({});

  useEffect(() => {
    setSelectValue(valorActive.respuesta);
  }, [valorActive.respuesta]);

  useEffect(()=>{
    let respValue = dataAlumno[posision]?.respuesta;
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

    if (!tempResp?.pregunta || !tempResp?.pregunta) {
      return false;
    } else {
      dataAlumno[conver] = tempResp;
      mateExam({id:user?.uid,arre:dataAlumno})
      .then(()=>{
        changeAlertState(true);
        changeAlert({
          tipo: 'exito', mensaje: 'Se guardo con exito'
        });
      }).catch(()=>{
        changeAlertState(true);
        changeAlert({
          tipo: 'error', mensaje: 'Existio un error, intentalo nuevamente'
        });
      })
      setTempResp({});
    }
  };
  return (
    <div className="container">
      {dtajs?.pregunta_txt ? <h1>{dtajs?.pregunta_txt}</h1> : null}
      {dtajs?.pregunta_url ? (
        <IMG
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
      <Alert tipo={alert.tipo} mensaje={alert.mensaje} estadoAlerta={alertState} cambiarEstadoAerta={changeAlertState} />
    </div>
  );
};

Mat.propTypes ={
  dtajs: PropTypes.object,
  dataAlumno:PropTypes.array,
  posision: PropTypes.number
}
export default Mat;
