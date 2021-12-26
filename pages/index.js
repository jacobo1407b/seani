import React, { useState } from "react";
import { Form, Input, Button, Grid, Container } from 'semantic-ui-react'
import { useSnackbar } from "notistack";
import { Principal, Users, Slide } from 'common/Login'
import { logIn, getInitial } from 'utils/api'
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Cookies from 'cookies'
import { fechaActual, fechaAplicacion } from 'utils/variables'
import { accionUser, accionAlumno } from "../redux/accion";
import Swal from "sweetalert2";

const index = ({ user }) => {
  //hooks
  const router = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  //state
  const [isloadin, setIsloadin] = useState(false);
  const [formDta, setFormDta] = useState({ password: "", email: "" });


  const handlerChange = (e) => {
    const { value, name } = e.target;
    setFormDta({
      ...formDta,
      [name]: value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (fechaActual < fechaAplicacion) {
      Swal.fire({
        title: "El examen no esta disponible",
        text: "Espera la siguiente etapa",
        icon: "warning",
      });

      return false;
    } else {
      if (!formDta.email || !formDta.password) {
        enqueueSnackbar("Completa los campos", {
          variant: "error",
        });
        return false;
      }
      setIsloadin(true);
      logIn(formDta)
        .then(async (response) => {
          document.cookie = `user=${JSON.stringify(response.user)}; max-age=3600; path=/`;
          dispatch(accionUser(response.user));
          const { data } = await getInitial(response.user.uid);
          dispatch(accionAlumno({ data }));
          setIsloadin(false);
          router.push("/home");
        })
        .catch((err) => {
          setIsloadin(false);
          console.log(err);
          enqueueSnackbar(err.message, {
            variant: "error",
          });
        });
    }
  };

  return (
    <>
      <Head>
        <title>SEANI UTT</title>
      </Head>
      <Principal>
        <Container>
          <Grid stackable>
            <Grid.Column width={7}>
              <Form
                onChange={handlerChange}
                onSubmit={handlerSubmit}
                loading={isloadin}
              >
                <Form.Field
                  type="text"
                  name="email"
                  required
                  control={Input}
                  label='Email'
                  placeholder='example@example'
                />
                <Form.Field
                  type="password"
                  name="password"
                  required
                  control={Input}
                  label='Password'
                  placeholder='*******'
                />
                <Button color="green" fluid style={{borderRadius:"100px"}}>
                  Login
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={9}>
              <Users>
                <Slide>
                  <img src="https://image.freepik.com/vector-gratis/establecer-miembro-perfil-medios-sociales_24877-53571.jpg" alt="users" />
                  <img src="https://image.freepik.com/vector-gratis/establecer-miembro-perfil-medios-sociales_24877-53571.jpg" alt="users" />
                  <img src="https://image.freepik.com/vector-gratis/establecer-miembro-perfil-medios-sociales_24877-53571.jpg" alt="users" />
                </Slide>
              </Users>

            </Grid.Column>
          </Grid>
        </Container>
      </Principal>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const cookies = new Cookies(ctx?.req, ctx?.res);
  var isSesion = cookies.get('user');
  const login = isSesion ? true : false
  if (login) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      },
      props: { login }
    }
  }
  return {
    props: { login }
  }
}
export default index;