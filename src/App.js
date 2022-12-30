import { React } from "react";
//Mis componentes
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AppRouter } from "./router/AppRouter";


function App () {
  return(
    <>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer> 
    </>
  );
}

export default App