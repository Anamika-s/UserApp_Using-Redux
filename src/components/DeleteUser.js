import { useState } from "react"    
import { useSelector } from "react-redux"
import { deleteUser } from "../state/reducers/Index"
import { useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
export const DeleteUser = ()=>
{
    const params  = useParams();
    console.log(params.id)
    const navigate = useNavigate();
    const {users} = useSelector((state)=>state);
    const dispatch = useDispatch();
    const existingUser = users.filter(user=>user.id == params.id);
    const {name, age} = existingUser[0];
    const [user,setUser] = useState(
    { 
        name,
        age
    })

    const deleteuser=()=>
    { 
        // setUser({name:"", age:0})
        dispatch(deleteUser({
            id : params.id
     }))
        navigate("/")
    }
        return(
        <>
        <h1> Delete User </h1>
        <form>

            <div>
                <label> ENter ID </label>
                <input type="number" name="id" value={user.id}></input>
            </div>

            <div>
                <label> ENter name </label>
                <input type="text" name="name" value={user.name} ></input>
            </div>

            <div>
                <label> ENter age </label>
                <input type="number" name="id" value={user.age} ></input>
            </div>

            <div>
            <Button variant="primary">Primary</Button>{' '}
                <button onClick={deleteuser}> Delete User </button>
            </div>
        </form>
        </>
    )
}