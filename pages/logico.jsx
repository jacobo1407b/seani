import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { accionTest, accionTipe } from "../redux/accion";
import data from "../assets/json/exam_PensaLogic.json";
import Logic from "../components/Exam/Logic";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const logico = ({ alumno }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(accionTest(true));
    dispatch(accionTipe("Comprensión lectora"));
    if (!alumno?.data?.activeLogic) {
      router.push("/home");
    }
    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);

  const handleChange = (event, value) => {
    router.push(`/logico?page=${value}`);
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Logic
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.logico ? alumno?.data?.logico : []}
        todos={alumno?.data}
        posision={numero}
      />
    );
  }
  return (
    <>
      <Head>
        <title>SEANI | Comprensión lectora</title>
      </Head>
      <Container>
        {elegir(parseInt(router.query.page))}
        <div className={classes.root}>
          <Pagination
            className=" transparent center-align"
            count={data.length - 1}
            defaultPage={1}
            page={parseInt(router.query.page)}
            color="primary"
            onChange={handleChange}
          />
        </div>
      </Container>
    </>
  );
};

export default logico;
