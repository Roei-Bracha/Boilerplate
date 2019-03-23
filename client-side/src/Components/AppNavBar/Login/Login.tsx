import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import LoginModal from './LoginModal/LoginModal';
export default function Login () : JSX.Element{
    const [open , setOpen] = useState(false)

    return (
        <div>
            <Button onClick={()=>{setOpen(true)}} color="inherit">Login / Regiter</Button>
            {open &&
                <Dialog open={open} onClose={()=>{setOpen(false)}} className={"Modal"}>
                    <LoginModal/>
                </Dialog>
            }
        </div>
    )
}