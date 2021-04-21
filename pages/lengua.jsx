import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { accionTest, accionTipe } from "../redux/accion";
import data from "../assets/json/exam_EstrucLengua.json";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "semantic-ui-react";
import Lenguaje from "../components/Exam/Lengua";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const lengua = ({ alumno, user }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (user) {
      router.push("/home");
    } else {
      dispatch(accionTest(true));
      dispatch(accionTipe("Estructura de la lengua"));
      if (!alumno?.data?.activeLengua) {
        router.push("/home");
      }
    }
    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);

  const handleChange = (event, value) => {
    router.push(`/lengua?page=${value}`);
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Lenguaje
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.lengua ? alumno?.data?.lengua : []}
        todos={alumno?.data}
        posision={numero}
      />
    );
  }

  return (
    <>
      <Head>
        <title>SEANI | Estructura de la lengua</title>
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

export default lengua;
