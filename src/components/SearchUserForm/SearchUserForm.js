import { useEffect } from "react";

const SearchUserForm = ({setUserData, setIsSearchValid}) => {

    useEffect(()=> {
    
        const URL = `https://api.github.com/users/pawel975`;
    
        fetch(URL)
        .then(res => res.json())
        .then(data => setUserData(data))
        .catch(err => {
            console.error(err); 
            setIsSearchValid(false)
        })
    
      }, [setIsSearchValid, setUserData]);

    return (
        <form 
            className="search-user-form"
            data-testid="search-user-form"
        >
            <input
                className="search-user-form__input"
                type="text"
                placeholder="Search for user..."
            />
            <input
                className="search-user-form__button"
                type="submit"
                value="Search"
            />
            
        </form>
    )
}

export default SearchUserForm;