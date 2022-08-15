import {useState } from 'react';
import FailedSearchMessage from '../FailedSearchMessage/FailedSearchMessage';
import SearchUserForm from '../SearchUserForm/SearchUserForm';
import UserContent from '../UserContent/UserContent';
import './App.scss';

const App = () => {

  const [userData, setUserData] = useState();
  const [isSearchValid, setIsSearchValid] = useState(true);

  return (
    <div className="app">
      
      <SearchUserForm 
        setUserData={setUserData}
        setIsSearchValid={setIsSearchValid} 
      />

      {
        (isSearchValid && userData) ?
          <UserContent
            userData={userData}
          />
          :
          <FailedSearchMessage message={"This user doesn't exist"} />
      }
      
    </div>
  );
}

export default App;
