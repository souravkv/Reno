import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import {useState} from "react"
import axios from "axios" ;
import { useNavigate } from "react-router-dom";

export function SignUp (){

    const navigate= useNavigate();
        const [username ,setUsername] = useState("")
        const [firstName ,setFirstName] = useState("")
        const [lastName ,setLastName] = useState("")
        const [password ,setPassword] = useState("")
        
    
    return (<div ><div className="bg-slate-800 h-screen flex justify-center ">
        <div className=" flex flex-col justify-center">

            <div className="bg-white rounded-lg p-5 px-10 text-center">
                
        
                <Heading label="SignUp"></Heading>
                <SubHeading label="Enter your information to create an account" ></SubHeading>
                <div className="py-3">
                <InputBox onChange={(e)=>{   setFirstName(e.target.value) }} title="First Name" inner="Jhon"></InputBox>

                <InputBox  onChange={(e)=>{setLastName(e.target.value) }} title="Last Name" inner="Doe"></InputBox>
                <InputBox onChange={(e)=>{  setUsername(e.target.value)}} title="Email" inner="siuuuu@gmail.com"></InputBox>
                <InputBox  onChange={(e)=>{  setPassword(e.target.value) }} title="Password" inner="xxxxx"></InputBox>
                <Button onClick={async()=>{
                   const response =  await axios.post("http://localhost:3000/api/v1/user/signup" , {
                        username,
                        firstName,
                        lastName,
                        password
                    });
                localStorage.setItem("token",response.data.token);
                navigate("/dashboard")

                }}  label="Sign Up"></Button>
                <BottomWarning label="Already have an account?" buttonText="SignIn" to="/signin" ></BottomWarning>


                </div>



                
                
            </div>

        </div>
        
        </div>
        </div>)

}