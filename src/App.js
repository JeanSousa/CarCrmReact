import React from 'react';

//configuracao do redux
import { Provider } from 'react-redux'
import { store } from './store/store'

//faço a mudança do tema em app para toda a aplicação
import { createMuiTheme , ThemeProvider } from '@material-ui/core/styles';
//o import no core tem a possibilidade de importar outros componentes juntamente
//import { Button, TextField } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';


//importando o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//global css
import './global.css'

//importando as rotas 
import Routes from './Routes';


//importando um componente
//fazendo dessa forma o react automaticamente vai pegar o arquivo index
//no arquivo index dentro da pasta components foi importado e exportado
//todos os componentes da aplicação
import { Loading } from './view/components';


//criando constante para definir cor do tema
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
  },
  //Props serve para modificar a propriedade padrão
  //o nome do componente text field esta na biblioteca material ui como nome muitextfield
  props: {
    MuiTextField: {
       variant: 'outlined',
       fullWidth: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true
   }
  }
});

//o segundo parentese é o return do react
const App = () => (
  <Provider store={store}>
  <ThemeProvider theme={theme}>
     <Loading/>
      <Routes/>
  </ThemeProvider>
  </Provider>
)

export default App;