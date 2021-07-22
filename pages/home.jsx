import React, { Fragment } from "react";
import { Container, Button, Grid } from "semantic-ui-react";
import { useSnackbar } from "notistack";
import Logo from 'assets/images/utt.png'
import Escene from 'components/Escena';
import Tipe from 'components/Tipe';
import { useRouter } from "next/router";
import Vid from 'assets/video/camara-micro.mp4';
import Qwerty from 'assets/images/qwerty.mp4'
import Head from "next/head";
import { useSelector } from "react-redux";

const home = () => {
  const router = useRouter();
  const alumno = useSelector((state) => state.alumno);
  const { enqueueSnackbar } = useSnackbar();

  const handlerExam1 = () => {
    if (!alumno.data.activeExam1) {
      enqueueSnackbar("Este modulo esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      router.push("/exam?page=1");
    }
  };

  const logica = () => {
    if (!alumno.data.activeLogic) {
      enqueueSnackbar("Este modulo esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      router.push("/logico?page=1");
    }
  };
  const mate = () => {
    if (!alumno.data.activeMat) {
      enqueueSnackbar("Este modulo esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      router.push("/mate?page=1");
    }
  };
  const lengua = () => {
    if (!alumno.data.activeLengua) {
      enqueueSnackbar("Este modulo esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      router.push("/lengua?page=1");
    }
  };

  return (
    <Container textAlign="center">
      <Head>
        <title>SEANI | Home</title>
      </Head>
      <Fragment>
        <img
          className="responsive-img center"
          src={Logo}
          alt="utt-img"
          width="250px"
        />
        <TextIng dataAlumno={alumno} />
        <Grid.Row>
          <blockquote>
            <p className="flow-text">
              La evaluación, que estas a punto de iniciar, consta de 90
              preguntas que deberás responder en un tiempo máximo de 2 horas,
              mismas que corresponden a las siguientes áreas:
            </p>
          </blockquote>
        </Grid.Row>
        <Grid.Row>
          <Tipe />
        </Grid.Row>

        <blockquote>
          <p className="flow-text">
            Por favor, habilita los permisos necesarios en tu navegador como se
            muestra a continuación:
          </p>

          <div className="card-panel">
            <video
              className="responsive-video"
              controls={false}
              autoPlay
              loop
              preload="auto"
            >
              <source src={Vid} type="video/mp4" />
            </video>
          </div>
        </blockquote>

        <blockquote>
          <p className="flow-text">
            Todas las preguntas son de opción múltiple, no olvides que, al
            seleccionar la respuesta, tendrás que dar clic en el botón "Guardar
            respuesta", como se muestra a continuación.
          </p>

          <div className="card-panel">
            <video
              className="responsive-video"
              controls={false}
              autoPlay
              loop
              preload="auto"
            >
              <source src={Qwerty} type="video/mp4" />
            </video>
          </div>
        </blockquote>

        <Escene />
        <blockquote>
          <p className="flow-text">
            El sistema guardará las respuestas y el tiempo también, así que
            mantén la calma, en caso de cualquier duda sobre alguna situación
            puedes comunicarte al Grupo de{" "}
            <a
              href="https://t.me/utt_seani_2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram.
            </a>
          </p>
        </blockquote>
        <Container>
          <Grid columns="equal">
            <Grid.Row>
              <Button
                content="Pensamiento analítico"
                icon="settings"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={handlerExam1}
              />
            </Grid.Row>
            <Grid.Row>
              <Button
                content="Comprensión lectora"
                icon="cog"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={logica}
              />
            </Grid.Row>
            <Grid.Row>
              <Button
                content="Pensamiento matemático"
                icon="react"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={mate}
              />
            </Grid.Row>
            <Grid.Row>
              <Button
                content="Estructura de la lengua"
                icon="male"
                labelPosition="right"
                fluid
                color="orange"
                size="huge"
                onClick={lengua}
              />
            </Grid.Row>
          </Grid>
        </Container>
      </Fragment>
    </Container>
  );
};

const TextIng = ({ dataAlumno }) => {
  return (
    <>
      <h1>
        BIENVENIDO {"(A)"}, {dataAlumno?.data?.username}
      </h1>
    </>
  );
};

export default home;