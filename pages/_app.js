import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import { SnackbarProvider } from "notistack";
import {host} from '../utils/variables'
import {getInitialData,getUser} from '../utils/api';
import Layout from '../Layout/Layout';
import "materialize-css/dist/css/materialize.css";
import "semantic-ui-css/semantic.min.css";
import '../assets/styles/index.css'



function MyApp({Component,pageProps,respuesta,alumno}) {
  
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

MyApp.getInitialProps = async({ctx})=>{
  const respuesta = await getInitialData();

   if(!respuesta.user){
     if(ctx?.req?.url !=="/"){
      ctx?.res?.writeHead(302, { Location: "/" })?.end();
      return {}
     }
     return {}
   }else{
     const alumno = await getUser(respuesta.user);
     if(ctx?.req?.url === "/"){
      ctx?.res?.writeHead(302, { Location: "/home" })?.end();
      return {respuesta,alumno}
     }
     return {respuesta,alumno}
   }
   
}
   const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
