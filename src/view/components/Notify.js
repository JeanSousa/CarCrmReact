//rfc cria um componente em formato de função
import React from 'react'
//é aqui que importo o layout do material ui
import { Snackbar, SnackbarContent } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'

//make styles do material ui, para motrar cor do fundo do snack bar
import { makeStyles } from '@material-ui/core/styles';

import { green, red } from '@material-ui/core/colors';

//importando a funcao changenotify para poder passar um payload para ela 
//para mudar o status do componente
import { changeNotify} from '../../store/actions/notify.action';

const useStyles = makeStyles({
    success: {
      backgroundColor: green[500]
    },
    error: {
        backgroundColor: red[600]
    }
  });
  


export default function Notify() {
    const dispacth = useDispatch();
    //use selector recebe um parametro que é o state, que está todo o estado da aplicação
    // é um objeto com o estado de cada componente da aplicação
    const notify = useSelector(state => state.notifyReducer);
    const classes = useStyles(); //para aclicar a classe use classname={classes.success}
    return (
      <Snackbar
        anchorOrigin={{
            horizontal: notify.horizontal,
            vertical: notify.vertical
        }}
        open={notify.open}
        autoHideDuration={notify.time}
        onClose ={() => dispacth( changeNotify({open:false}) )}
      >
          <SnackbarContent  //notify.class vem do useSelector e esta no reducer notify, pode ser sucess ou error
            className={classes[notify.class] +' d-flex justify-content-center'}
            message={
                <span className="d-flex align-items-center">
                   {notify.msg}
                </span>
            }
          />
      </Snackbar>
    )
}
