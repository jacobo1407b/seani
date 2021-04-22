import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { accionTest, accionTipe } from "../redux/accion";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "semantic-ui-react";
import data from "../assets/json/examen_PensaMatematico.json";
import Maste from "../components/Exam/Mat";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const mate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const alumno = useSelector((state) => state.alumno);

  useEffect(() => {
    dispatch(accionTest(true));
    dispatch(accionTipe("Pensamiento matemático"));
    if (!alumno?.data?.activeMat) {
      router.push("/home");
    }

    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);
  const handleChange = (event, value) => {
    //window.location.replace(`/mate?page=${value}`);
    router.push(`/mate?page=${value}`);
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Maste
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.matematico ? alumno?.data?.matematico : []}
        todos={alumno?.data}
        posision={numero}
      />
    );
  }

  return (
    <>
      <Head>
        <title>SEANI | Pensamiento matemático</title>
      </Head>
      <Container>
        {elegir(router.query.page)}
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

export default mate;
