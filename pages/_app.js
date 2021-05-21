import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { SnackbarProvider } from "notistack";
import Layout from "../Layout/Layout";
import "materialize-css/dist/css/materialize.css";
import "semantic-ui-css/semantic.min.css";
import "../assets/styles/index.css";
import "../assets/styles/modules.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </SnackbarProvider>
    </Provider>
  );
}

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
