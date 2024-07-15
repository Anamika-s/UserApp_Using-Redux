import logo from './logo.svg';
import './App.css';
import { UserList } from './components/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import {DeleteUser} from './components/DeleteUser';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      {/* <UserList/> */}
       <Routes>
        <Route path="/" element={<UserList/>}></Route>
        <Route path="/adduser" element={<AddUser/>}></Route>
       <Route path='/edit-user/:id' element={<EditUser/>}></Route>
       <Route path='/delete-user/:id' element={<DeleteUser/>}></Route>
       
       </Routes>
     </div>
  );
}

export default App;
