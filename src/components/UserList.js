import { useSelector } from "react-redux";
import { getUsers } from "../state/reducers/Index";
import { Link } from "react-router-dom";
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
export const UserList =()=>
{
    const {users} = useSelector((state => state));
    console.log({users})
    return(
        <>
        <Link to ="/adduser"> Add New User </Link>
      <h1> List of Users </h1>
      {users && users.length}
      {users ? users.map((user)=>
        <ListGroup>
      <ListGroup.Item> {user.id} -- {user.name}
      {user.age} <Link to = {`edit-user/${user.id}`}> Edit User </Link>
       <Link to = {`delete-user/${user.id}`}> Delete User </Link>
      </ListGroup.Item>
        </ListGroup>
       /* <ul> <li> {user.id} -- {user.name} 
       --   {user.age} <Link to = {`edit-user/${user.id}`}> Edit User </Link>
       <Link to = {`delete-user/${user.id}`}> Delete User </Link>
        </li>
        </ul> */ 
      ):<h1> There are no records </h1>}
      </>
    )
}