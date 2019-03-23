import React , {useState , useEffect} from 'react'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
export default function LoginModal() : JSX.Element{
    let [mode , setMode] = useState< "Login" | "Register">("Login")
    const [userName , setUserName] = useState<string>("")
    const [userPassword , setPassword] = useState<string>("")
    const [retypePassword , setRetypePassword] = useState<string>("")
    const [passwordErrorMode , setPasswordErrorMode] = useState<boolean>(false)
    const [passwordErrorMessage , setPasswordErrorMessage] = useState<string>("")
    const [email , setEmail] = useState<string>("")
    const handlePasswordInput = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
        const tempPassword = e.target.value
        setPassword(tempPassword);
        if(mode==="Register"){
            if(tempPassword === ""){
                setPasswordErrorMessage("")
                return setPasswordErrorMode(false)
            } 
            else if (tempPassword.length<6){
                setPasswordErrorMessage("the password should me at list 6 characther long")
                return setPasswordErrorMode(true)
            }
            else{
                setPasswordErrorMessage("")
                return setPasswordErrorMode(false)
            }
        }
    }
    return(
        <div>
            <Tabs value={mode} variant={"fullWidth"} onChange={(event , value)=>{setMode(value)}}>
                <Tab value="Login" label="Login"></Tab>
                <Tab value="Register" label="Register"></Tab>
            </Tabs>
            <DialogTitle>{mode==="Login" ? "Login" : "Register"}</DialogTitle>
            <DialogContent>
                <FormControl fullWidth required={true}>
                    <TextField 
                    label={"Uesr name"}
                    value={userName}
                    onChange={(e)=>{setUserName(e.target.value)}}
                    ></TextField>
                </FormControl>
                <FormControl fullWidth required={true}>
                    <TextField 
                    label={"Password"}
                    value={userPassword}
                    error={passwordErrorMode}
                    onChange={(e)=>{handlePasswordInput(e)}}
                    type={"password"}
                    helperText={passwordErrorMessage}
                    ></TextField>
                </FormControl>
                {mode === "Register" && <FormControl fullWidth required={true}>
                    <TextField 
                    label={"Re-type Password"}
                    value={retypePassword}
                    error={(userPassword !== retypePassword && retypePassword.length!==0) }
                    onChange={(e)=>{setRetypePassword(e.target.value)}}
                    type={"password"}
                    ></TextField>
                </FormControl>}
            </DialogContent>
            <DialogActions>
                <Button color="primary">{mode}</Button>
                {/* <div className="g-signin2" data-theme="dark" /> */}
            </DialogActions>
        </div>
    )
}
// TOFIX: the login with google dont work
