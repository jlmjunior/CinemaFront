import './App.css';
import './styles/global.css'

import GlobalContext from './context/GlobalContext'
import Inicial from './pages/Inicial';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import theme from './temaConfig'
import { ThemeProvider } from '@material-ui/core';
import Carregamento from './componentes/all/Carregamento';
import Filmes from './pages/Filmes';

function App() {
  return (
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <Switch>
            <Route path="/" exact>
              <Inicial />
            </Route>
            <Route path={"/filmes"} component={Filmes}>
            </Route>
          </Switch>

        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext>
  );
}

export default App;
