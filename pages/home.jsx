import React, { Fragment, useEffect,useState } from "react";
import { Container, Button, Grid } from "semantic-ui-react";
import { useSnackbar } from "notistack";
import Logo from "../assets/images/utt.png";
import { useRouter } from "next/router";
import Vid from "../assets/video/camara-micro.mp4";
import Qwerty from "../assets/images/qwerty.mp4";
import Head from "next/head";
import { useSelector } from "react-redux";
import Modulos from '../components/modules-examn/Modulos';
import styled from 'styled-components';

const home = () => {
  const router = useRouter();
  const alumno = useSelector((state) => state.alumno);
  const user = useSelector((state) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    console.log(user)
      if (!user) {
        router.push("/");
      }
    
  }, []);

  const handlerExam1 = () => {
    console.log(alumno.activeExam1);
    if (!alumno.data.activeExam1) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      //window.location.replace(`/exam?page=1`)
      router.push("/exam?page=1");
    }
  };

  const logica = () => {
    if (!alumno.data.activeLogic) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      //window.location.replace(`/logico?page=1`)
      router.push("/logico?page=1");
    }
  };
  const mate = () => {
    if (!alumno.data.activeMat) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      //window.location.replace(`/mate?page=1`)
      router.push("/mate?page=1");
    }
  };
  const lengua = () => {
    if (!alumno.data.activeLengua) {
      enqueueSnackbar("Este examen esta desactivado", {
        variant: "info",
      });
      return false;
    } else {
      //window.location.replace(`/lengua?page=1`)
      router.push("/lengua?page=1");
    }
  };

  return (
    <Container textAlign="center">

      <Head>
        <title>SEANI | Home</title>
      </Head>

      <Fragment>
        <ContainerGap>
        <Image
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
        <Grid.Row className="w-100">
          <div className="card-panel w-100">
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

        <div className="card-panel w-100">
          <Errores>
            <h2>En caso de que te encuentres en estas situaciones:</h2>
            <ul>
              <li><p> <span>1.-</span> Conexión a internet muy inestable.</p></li>
              <li><p> <span>2.-</span> Cerrar la pestaña por error.</p></li>
              <li><p> <span>3.-</span> Se termine la batería a tu celular.</p></li>
              <li><p> <span>4.-</span> Se interrumpa la energía eléctrica.</p></li>
              <li><p> <span>5.-</span> Se apague tu dispositivo.</p></li>
            </ul>
          </Errores>
          <p className="flow-text">
            El sistema guardará las respuestas y el tiempo también, así que
            mantén la calma, en caso de cualquier duda sobre alguna situación
            puedes comunicarte al Grupo de{" "}
            <a href="https://t.me/utt_seani_2020" target="_blank" rel="noopener noreferrer">Telegram.</a>
          </p>
        </div>

        <Mesage><p>Módulos para la evaluación</p></Mesage>
        <Modulos analitico={handlerExam1} lectora={logica} matematico={mate} lengua={lengua}></Modulos>
        </ContainerGap>
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

const Image = styled.img`
  margin: 25px;
`;

const Errores = styled.div`
  width: 48%;
  margin: auto;
  h2{
    color: #ff7b00;
    font-size: 22px;
  }
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li{
      width: 100%;
      margin: 10px 0px;
      padding: 0px 8px;
      p{
        color: #494949;
        margin: 0;
        font-size: 20px;
        text-align: left;
      }
      span{
        color: #268500;
      }
    }
  }
  @media (max-width: 992px){
    width: 90%;
    ul{
      li{
        p{
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 535px){
    ul{
      li{
        p{
          font-size: 14px;
        }
      }
    }
  }
`;

const Mesage = styled.div`
  width: 100%;
  background: #ff7b00;
  padding: 5px;
  border-radius: 5px;
  p{
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
`;

const ContainerGap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;
export default home;