import {useState } from 'react';
import Message from '../Message/Message';
import SearchUserForm from '../SearchUserForm/SearchUserForm';
import UserContent from '../UserContent/UserContent';
import './App.scss';
import data from "../../mockUserEndpoint.json";

const App = () => {

  const [userData, setUserData] = useState(data);
  const [isSearchValid, setIsSearchValid] = useState(true);

  return (
    <div className="app">
      
      <SearchUserForm 
        setUserData={setUserData}
        setIsSearchValid={setIsSearchValid} 
      />

      {
        (isSearchValid && userData) ?
          <UserContent userData={userData}/>
          :
          (
            isSearchValid ?
            <Message message={"Type user's name to display profile"} type={"info"} />
            :
            <Message message={"This user doesn't exist"} type={"error"} />
          )
        }
      
    </div>
  );
}

export default App;
