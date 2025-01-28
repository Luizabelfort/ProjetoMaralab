import { Footer } from "./componentes/Footer";
import { Header } from "./componentes/Header";
import { Nav } from "./componentes/Nav";
import { SessaoBeneficios } from "./componentes/SessaoBeneficios";
import { SessaoContato } from "./componentes/SessaoContato";
import { SessaoDoacao } from "./componentes/SessaoDoacao";
import { SessaoParcerias } from "./componentes/SessaoParcerias";
import { SessaoRealizacoes } from "./componentes/SessaoRealizacoes";
import { SessaoSolucoes } from "./componentes/SessaoSolucoes";

export function App() {

  return (
    <div>
      <Nav/>
      <Header/>
      <SessaoBeneficios/>
      <SessaoDoacao/>
      <SessaoSolucoes/>
      <SessaoParcerias/>
      <SessaoRealizacoes/>
      <SessaoContato/>
      <Footer/>
    </div>
  )
}

