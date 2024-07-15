import { useState } from "react"    
import { useSelector } from "react-redux"
import { addUser } from "../state/reducers/Index"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const AddUser = ()=>
{
    const {users} = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user,setUser] = useState(
    {
        id :0,
        name :"",
        age :0
    })

    const adduser=()=>
    {
        alert("adduser")
        console.log({user})

         dispatch(addUser(user))
         navigate("/");
    }
    return(
        <>
        <h1> Add User </h1>
        <form>

            <div>
                <label> ENter ID </label>
                <input type="number" name="id" value={user.id} onChange={(event)=> setUser({...user, id:event.target.value})}></input>
            </div>

            <div>
                <label> ENter name </label>
                <input type="text" name="name" value={user.name} onChange={(event)=> setUser({...user, name:event.target.value})}></input>
            </div>

            <div>
                <label> ENter age </label>
                <input type="number" name="id" value={user.age} onChange={(event)=> setUser({...user, age:event.target.value})}></input>
            </div>

            <div>
                <button onClick={adduser}> Add User </button>
            </div>
        </form>
        </>
    )
}