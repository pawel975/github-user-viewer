import { useEffect, useState } from "react";
import "./SearchUserForm.scss";
import mockedData from '../../mockUserEndpoint.json';

const SearchUserForm = ({setUserData, setIsSearchValid}) => {

    const [currentSearchValue, setCurrentSearchValue] = useState("");
    const [searchedUserName, setSearchedUserName] = useState(""); 

    useEffect(() => {
    
        // const URL = `https://api.github.com/users/${searchedUserName}`;
    
        // fetch(URL)
        // .then(res => res.json())
        // .then(data => {
        //     setIsSearchValid(true);
        //     setUserData(data)
        // })
        // .catch(setIsSearchValid(false));

        setUserData(mockedData)
    
    }, []);

    const handlecurrentSearchValueChange = (e) => {
        setCurrentSearchValue(e.target.value)
    }

    const handlecurrentSearchValueSubmit = (e) => {
        e.preventDefault();
        setSearchedUserName(currentSearchValue);
        setCurrentSearchValue("");
    }
    
    return (
        <form 
            className="search-user-form"
            data-testid="search-user-form"
        >
            <input
                value={currentSearchValue}
                onChange={handlecurrentSearchValueChange}
                className="search-user-form__input"
                type="text"
                placeholder="Search for user..."
            />
            <input
                onClick={handlecurrentSearchValueSubmit}
                className="search-user-form__button"
                type="submit"
                value="Search"
            />
            
        </form>
    )
}

export default SearchUserForm;