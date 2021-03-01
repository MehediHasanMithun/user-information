import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import User from './components/User/User';
import data from './Data/fakeData.json';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, []);
  // console.log(users);
 const [clickedUser,setClickedUser] = useState([]);
  const handleAddButton = (user) => {
    const newUser = [...clickedUser,user];
    setClickedUser(newUser);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="body">
        <div>
          {
            users.map(user => <User handleAddButton={handleAddButton} key={user.name} user={user}></User>)
          }
        </div>
        <div>
          <Cart user={clickedUser}></Cart>
        </div>
      </div>

    </div>
  );
}

export default App;
