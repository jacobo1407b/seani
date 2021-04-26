import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";
import { logIn, getInitial } from "../utils/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fechaActual, fechaAplicacion } from "../utils/variables";
import { accionUser, accionAlumno } from "../redux/accion";
import Swal from "sweetalert2";

const index = ({ user }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, []);
  const [isloadin, setIsloadin] = useState(false);
  const [formDta, setFormDta] = useState({ password: "", email: "" });
  const { enqueueSnackbar } = useSnackbar();

  const handlerChange = (e) => {
    const { value, name } = e.target;
    setFormDta({
      ...formDta,
      [name]: value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (fechaActual > fechaAplicacion) {
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
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt="">
              <img
                src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                alt="IMG"
              />
            </div>

            <form
              onChange={handlerChange}
              onSubmit={handlerSubmit}
              className="login100-form"
            >
              <span className="login100-form-title">Login</span>

              <div
                className="wrap-input100 validate-input"
                data-validate={null}
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate={null}
              >
                <input
                  //className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="container-login100-form-btn">
                {isloadin ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <button className="login100-form-btn">Login</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
