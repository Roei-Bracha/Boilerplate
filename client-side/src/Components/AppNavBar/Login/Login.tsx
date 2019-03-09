import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import LoginModal from './LoginModal/LoginModal';
export default function Login () : JSX.Element{
    const [open , setOpen] = useState(false)
    return (
        <div>
            <Button onClick={()=>{setOpen(true)}} color="inherit">Login / Regiter</Button>
            {open &&
                <Modal open={open} onClose={()=>{setOpen(false)}} className={"Modal"}>
                    <LoginModal/>
                </Modal>
            }
        </div>
    )
}