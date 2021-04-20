import React,{Fragment} from 'react';
import { Container, Button, Grid } from "semantic-ui-react";
import { useSnackbar } from "notistack";
import Logo from '../assets/images/utt.png';
import { useRouter } from 'next/router'
import Vid from '../assets/video/camara-micro.mp4';
import Qwerty from '../assets/images/qwerty.mp4'
import Head from 'next/head'


const home = ({alumno}) => {
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter()

    const handlerExam1 = () => {
        if (!alumno.data.activeExam1) {
          enqueueSnackbar("Este examen esta desactivado", {
            variant: "info",
          });
          return false;
        } else {
            router.push('/exam?page=1')
        }
      };
    
      const logica = () => {
        if (!alumno.data.activeLogic) {
          enqueueSnackbar("Este examen esta desactivado", {
            variant: "info",
          });
          return false;
        } else {
            router.push('/logico?page=1')
        }
      };
      const mate = () => {
        if (!alumno.data.activeMat) {
          enqueueSnackbar("Este examen esta desactivado", {
            variant: "info",
          });
          return false;
        } else {
            router.push('/mate?page=1')
        }
      };
      const lengua = () => {
        if (!alumno.data.activeLengua) {
          enqueueSnackbar("Este examen esta desactivado", {
            variant: "info",
          });
          return false;
        } else {
            router.push('/lengua?page=1')
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
          <div className="card-panel">
            <span className="blue-text text-darken-2">
              <p className="flow-text">Lógico / Matemáticas</p>
            </span>
            <span className="blue-text text-darken-2">
              <p className="flow-text">Comprensión lectora</p>
            </span>
          </div>
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
              <source 
               src={Vid} type="video/mp4"
               />
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

        <div className="card-panel">
          <p className="flow-text">
            En caso de que te encuentres en estas situaciones:
          </p>
          <span className="red-text text-darken-2">
            <p className="flow-text">Conexión a internet muy inestable.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Cerrar la pestaña por error.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Se termine la batería a tu celular.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Se interrumpa la energía eléctrica.</p>
          </span>
          <span className="red-text text-darken-2">
            <p className="flow-text">Se apague tu dispositivo.</p>
          </span>
        </div>
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
        <div className="container">
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
        </div>
      </Fragment>
    </Container>
    )
}

const TextIng = ({dataAlumno}) => {

    return (
      <>
        <h1>
          BIENVENIDO {"(A)"}, {dataAlumno?.data?.username}
        </h1>
      </>
    );
  };

export default home
