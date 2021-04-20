import React from "react";
import Swal from "sweetalert2";
import MenuItem from "@material-ui/core/MenuItem";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import {
  mateCancel,
  logiCancel,
  lenguaCancel,
  examCancel,
} from "../../utils/api";

const NoResponsive = () => {
  const typeTest = useSelector((state) => state.typeTest);
  const time = useSelector((state) => state.time);
  const user = useSelector((state) => state.user);

  const primer = () => {
    if (time > 0) {
      Swal.fire({
        title: `¿Terminar examen ${typeTest}?`,
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
            text: "Tienes tiempo para revisar tu examen",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si estoy totalmente seguro!",
          }).then((result) => {
            if (result.value) {
              switch (typeTest) {
                case "Pensamiento analítico":
                  //exam
                  examCancel({ id: user?.uid }).then(() => {
                    window.location.replace("/");
                  });
                  break;
                case "Estructura de la lengua":
                  //lengia
                  lenguaCancel({ id: user?.uid }).then(() => {
                    window.location.replace("/");
                  });
                  break;
                case "Comprensión lectora":
                  //logico
                  logiCancel({ id: user?.uid }).then(() => {
                    window.location.replace("/");
                  });
                  break;
                case "Pensamiento matemático":
                  //mate
                  mateCancel({ id: user?.uid }).then(() => {
                    window.location.replace("/");
                  });
                  break;

                default:
                  examCancel({ id: user?.uid }).then(() => {
                    window.location.replace("/");
                  });
                  break;
              }
            }
          });
        }
      });
    }
  };
  return (
    <MenuItem onClick={primer}>
      <IconButton aria-label="Exit examen" color="inherit">
        <DoneIcon />
      </IconButton>
      <p>Terminar Examen</p>
    </MenuItem>
  );
};

export default NoResponsive;
/***
 *
 *
 */
