import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { SnackbarProvider } from "notistack";
//import Router from "next/router";
import { au, db } from "../utils/firebase";
import { collection } from "../utils/variables";
import Layout from "../Layout/Layout";
import "materialize-css/dist/css/materialize.css";
import "semantic-ui-css/semantic.min.css";
import "../assets/styles/index.css";
//import { route } from "next/dist/next-server/server/router";
/*
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const respuesta = {
    user: {
      apiKey: "AIzaSyDxblUMTsA7EQAGV3cgCcGMoYuaBN2_Ihk",
      appName: "[DEFAULT]",
      authDomain: "utt-examen.firebaseapp.com",
      createdAt: "1597202869305",
      displayName: null,
      email: "jacobohernandezmendieta7@gmail.com",
      emailVerified: true,
      isAnonymous: false,
      lastLoginAt: "1618968056675",
      uid: "MUymMC8LrBdY6X7lkof43omGgoU2",
      stsTokenManager: {
        accessToken:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjOGUyYjI5NmM2ZjMyODRlYzMwYjg4NjVkNzI5M2U2MjdmYTJiOGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXR0LWV4YW1lbiIsImF1ZCI6InV0dC1leGFtZW4iLCJhdXRoX3RpbWUiOjE2MTg5NjgwNTYsInVzZXJfaWQiOiJNVXltTUM4THJCZFk2WDdsa29mNDNvbUdnb1UyIiwic3ViIjoiTVV5bU1DOExyQmRZNlg3bGtvZjQzb21HZ29VMiIsImlhdCI6MTYxODk2ODA1NiwiZXhwIjoxNjE4OTcxNjU2LCJlbWFpbCI6ImphY29ib2hlcm5hbmRlem1lbmRpZXRhN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqYWNvYm9oZXJuYW5kZXptZW5kaWV0YTdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.XE7xsOV7uKOTwsbIP3RNQa9s4SjaxJ1BZiK4dUNRxo5DVpDV0je_YZfBSyj-8mqTU0BksTQY12xtye-tHNe2jp10z9EuryqlcwpZkpMq9hHIAhJatjIarwxf61F6RqbrC_IP8oHY98Dlf-DVfAhNEUFMnW65kku3wc9LTb76Pv9TViOrAq98QyVR3H0R1INepyP9WfuvQEkzr1NoJVWbGjEb2RaS7m1ipHOMY9eBQySCodrtnDeStEmr0341J7voBEZffJLw1j9hXHPDT7bLd14h09c7vEItlWgfmK2VwkDtmQ3LXSCdP4t2ilO35nXiVXQHK06vdYfoRbYMhh454Q",
        apiKey: "AIzaSyDxblUMTsA7EQAGV3cgCcGMoYuaBN2_Ihk",
        expirationTime: 1618971655816,
        refreshToken:
          "AGEhc0B-6oG33fsmr6TSFFHd4eWH2esoQs4XGHmvOBGYiUEpU32nsku7BQunsMBzAphrJbv_UTKqFuPq6GecM4SbTOVQPcCw5Ad6kkaLLiYfarbEHSP_TuCT4N6m-ZO8ujom2rwFx0A8O5CZxFV2CoXD1rVr5rDGWDfBG6zNEJPV5CmkxLbqG476FCBeuG9YB1H9vOdLlJjabcg7Du7baN29DLlAuj2xKA",
      },
    },
  };
  const alumno ={
    data:data
  }
  console.log(alumno)
  return {
    props: {
      respuesta,
      alumno
    },
  };
}*/

function MyApp({ Component, pageProps, respuesta, alumno }) {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Layout user={respuesta?.user} alumno={alumno}>
          <Component {...pageProps} user={respuesta?.user} alumno={alumno} />
        </Layout>
      </SnackbarProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const user = au.currentUser;
  const respuesta = { user: user };
  const data = user ? await db
      .collection(collection)
      .where("user", "==", respuesta?.user?.uid)
      .get() : null
    const alumno = { data: data?.docs[0]?.data() };
  // const respuesta = await getInitialData();
  /*if (!respuesta.user) {
    if (ctx?.req?.url !== "/") {
      ctx?.res?.writeHead(302, { Location: "/" })?.end();
      return {};
    }
    return {};
  } else {
    const data = await db
      .collection(collection)
      .where("user", "==", respuesta?.user?.uid)
      .get();
    const alumno = { data: data?.docs[0]?.data() };
    if (ctx?.req?.url === "/") {
      ctx?.res?.writeHead(302, { Location: "/home" })?.end();
      return { respuesta, alumno };
    }
    return { respuesta, alumno };
  }*/
  return { respuesta, alumno };
};
const makeStore = () => store;

export default withRedux(makeStore)(MyApp);

/*0
  const redirectOnError = () =>
    typeof window !== "undefined"
      ? window.location.replace("/")
      : ctx.res.writeHead(302, { Location: "/" })
  const redirectO = () =>
    typeof window !== "undefined"
      ? window.location.replace("/home")
      : ctx.res.writeHead(302, { Location: "/home" })
*/

/*
const user = au.currentUser;
  const respuesta = { user: user };
  const data = respuesta.user?.uid ? await db
        .collection(collection)
        .where("user", "==", respuesta?.user?.uid)
        .get() : null
  const alumno = { data: data?.docs[0]?.data() };
    if (!respuesta.user) {
      if (ctx?.req?.url !== "/") {
        ctx?.res?.writeHead(302, { Location: "/" })?.end();
        return {};
      }
      return {};
    } else {
      if (ctx?.req?.url === "/") {
        ctx?.res?.writeHead(302, { Location: "/home" })?.end();
        return { respuesta, alumno };
      }
      return { respuesta, alumno };
    }
*/
