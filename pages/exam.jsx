import React, { useEffect } from "react";
import { useRouter } from "next/router";
import data from "../assets/json/Examen_PensaAnlitico.json";
import { useDispatch } from "react-redux";
import { accionTest, accionTipe } from "../redux/accion";
import { useStyleExam } from "../assets/style";
import Pagination from "@material-ui/lab/Pagination";
import Pagina1 from "../components/Exam/Pregunta1";
import Head from "next/head";

const exam = ({ alumno, user }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyleExam();

  useEffect(() => {
    if (user) {
      router.push("/home");
    } else {
      dispatch(accionTest(true));
      dispatch(accionTipe("Pensamiento analítico"));

      if (!alumno?.data?.activeExam1) {
        router.push("/home");
      }
    }

    return () => {
      dispatch(accionTest(false));
      dispatch(accionTipe(""));
    };
  }, []);

  const handleChange = (event, value) => {
    router.push(`/exam?page=${value}`);
  };

  function elegir(numero) {
    if (numero <= 0) {
      return false;
    }
    if (numero > 90) {
      return false;
    }
    return (
      <Pagina1
        dtajs={data[parseInt(numero)]}
        dataAlumno={alumno?.data?.test ? alumno?.data?.test : []}
        todos={alumno?.data}
        posision={numero}
      />
    );
  }

  return (
    <div>
      <Head>
        <title>SEANI | Pensamiento analítico</title>
      </Head>
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
    </div>
  );
};

export default exam;
