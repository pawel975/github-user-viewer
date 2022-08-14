import {useState } from 'react';
import ActiveRepoDetailsSection from '../ActiveRepoDetailsSection/ActiveRepoDetailsSection';
import FailedSearchMessage from '../FailedSearchMessage/FailedSearchMessage';
import SearchUserForm from '../SearchUserForm/SearchUserForm';
import UserContent from '../UserContent/UserContent';
import UserInfoSection from '../UserInfoSection/UserInfoSection';
import UserReposSection from '../UserReposSection/UserReposSection';
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
