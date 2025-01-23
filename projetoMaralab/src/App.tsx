import { Header } from "./componentes/Header";
import { Nav } from "./componentes/Nav";
import { SessaoBeneficios } from "./componentes/SessaoBeneficios";
import { SessaoDoacao } from "./componentes/SessaoDoacao";

export function App() {

  return (
    <div>
      <Nav/>
      <Header/>
      <SessaoBeneficios/>
      <SessaoDoacao/>
    </div>
  )
}

