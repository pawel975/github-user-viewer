import { useEffect, useState } from 'react';
import FailedSearchMessage from '../FailedSearchMessage/FailedSearchMessage';
import SearchUserForm from '../SearchUserForm/SearchUserForm';
import UserInfoSection from '../UserInfoSection/UserInfoSection';
import './App.scss';

const App = () => {

  const [userData, setUserData] = useState({});
  const [isSearchValid, setIsSearchValid] = useState(true);

  return (
    <div className="app">
      
      <SearchUserForm 
        setUserData={setUserData}
        setIsSearchValid={setIsSearchValid} 
      />

      {
        isSearchValid ?
        <UserInfoSection userData={userData} />
        :
        <FailedSearchMessage message={"This user doesn't exist"} />
      }
      
    </div>
  );
}

export default App;
