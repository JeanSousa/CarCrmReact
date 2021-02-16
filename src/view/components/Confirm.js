import React from 'react'

import {Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core'
                     //props sao as propriedades que a funcao recebe
export default function Confirm(props) {
     //aqui extraio essas propriedades
     const { open, title, onClose, onConfirm } = props;
    return (
        <Dialog
          open={open}
          onClose={() => onClose()}
        >
            {/* disable tipography vai desabilitar o tipo do titulo e permite colocar um h6 */}
            <DialogTitle disableTypography>
              <h6>{title || 'Tem certeza que deseja excluir ?'}</h6>
            </DialogTitle>
            <DialogActions className="justify-content-center mb-2">
                <Button onClick={() => onClose()}>
                    Não
                </Button>
                {/* onclick vai chamar duas funções, primeiro uma que fecha e depois on confirm */}
                <Button onClick={() => {
                    onClose();
                    onConfirm();
                }}
                variant="contained"
                color="primary"
                >
                    Sim
                </Button>
            </DialogActions>
        </Dialog>
    )
}
