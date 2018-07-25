import React from 'react';
import { Button, Modal } from 'react-materialize'
import ReserveForm from './Reserve_Form'

const Reserve = (props) => {
    const { path } = props;
    const { name } = props;
    return (
        <Modal
            header='Please enter your reservation info'
            trigger={<Button className="blue-grey darken-2" >reserve item</Button>}
            actions={<Button className="modal-close blue-grey darken-2">reserve</Button>}>
            <ReserveForm name={name} path={path} />
        </Modal>
    )
};

export default Reserve;