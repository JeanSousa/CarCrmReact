//trabalhando aqui com a biblioteca axios instalada

import Axios from 'axios'

//importando tambem a root url de app.js
import { rootUrl }  from './App'

//crio uma base url pelo axios com o valor de root Url, sera importada no auth.action
export const Http = Axios.create({
   baseURL: rootUrl
})