import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
//material
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Radio from "@material-ui/core/Radio";
//custom
import {useSelector} from 'react-redux'
import {lenguaExam} from 'utils/api';


const Lengua = ({ dtajs, dataAlumno, posision }) => {
  let conver = parseInt(posision);
  let valorActive = dataAlumno[conver] ? dataAlumno[conver] : "";
  //state
  const user = useSelector(state => state.user)
  const [tempResp, setTempResp] = useState({});
  const [selectValue, setSelectValue] = useState(valorActive.respuesta);
  
  
  
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

    if (!tempResp?.pregunta || !tempResp?.pregunta) {
      return false;
    } else {
      dataAlumno[conver] = tempResp;
      lenguaExam({id:user?.uid,arre:dataAlumno})
      //aqui para actualizar
      setTempResp({});
    }
  };

  return (
    <div className="container">
      {dtajs?.pregunta_txt ? <h1>{dtajs?.pregunta_txt}</h1> : null}
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
    </div>
  );
};

Lengua.propTypes = {
  dtajs: PropTypes.object,
  dataAlumno:PropTypes.array,
  posision: PropTypes.number
}
export default Lengua;
