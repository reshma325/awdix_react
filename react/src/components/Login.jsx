import { useNavigate } from "react-router-dom";

function Login(){

    const router= useNavigate();
    return(
        <div>
            <h1>
                Login
            </h1>
            <button onClick={()=>router('/')} >Go To Home</button>
        </div>
    )
}
export default Login;