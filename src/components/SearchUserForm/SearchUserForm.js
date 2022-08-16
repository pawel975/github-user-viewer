import { useEffect, useState } from "react";
import "./SearchUserForm.scss";

const SearchUserForm = ({setUserData, setIsSearchValid}) => {

    const [currentSearchValue, setCurrentSearchValue] = useState("");
    const [searchedUserName, setSearchedUserName] = useState(); 

    useEffect(() => {
    
        if (searchedUserName) {

            const URL = `https://api.github.com/users/${searchedUserName}`;
        
            fetch(URL)
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    setIsSearchValid(true);
                    setUserData(data)
                }
            })
            .catch(setIsSearchValid(false));

        }
    
    }, [searchedUserName, setIsSearchValid, setUserData]);

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
                data-testid="search-user-form__input"
                type="text"
                placeholder="Search for user..."
            />
            <input
                onClick={handlecurrentSearchValueSubmit}
                className="search-user-form__button"
                data-testid="search-user-form__button"
                type="submit"
                value="Search"
            />
            
        </form>
    )
}

export default SearchUserForm;