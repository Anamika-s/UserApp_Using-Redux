import { useState } from "react"    
import { useSelector } from "react-redux"
import { editUser } from "../state/reducers/Index"
import { useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

export const EditUser = ()=>
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

    const edituser=()=>
    {
        // alert("edituser")
        console.log({user})
        setUser({name:"", age:0})
        dispatch(editUser({
            id : params.id,
            name : user.name,
            age : user.age
        }))
        navigate("/")

         dispatch(editUser(user))
    }
    return(
        <>
        <h1> Add User </h1>
        <form>

            {/* <div>
                <label> ENter ID </label>
                <input type="number" name="id" value={user.id} onChange={(event)=> setUser({...user, id:event.target.value})}></input>
            </div> */}

            <div>
                <label> ENter name </label>
                <input type="text" name="name" value={user.name} onChange={(event)=> setUser({...user, name:event.target.value})}></input>
            </div>

            <div>
                <label> ENter age </label>
                <input type="number" name="id" value={user.age} onChange={(event)=> setUser({...user, age:event.target.value})}></input>
            </div>

            <div>
                <button onClick={edituser}> Edit User </button>
            </div>
        </form>
        </>
    )
}