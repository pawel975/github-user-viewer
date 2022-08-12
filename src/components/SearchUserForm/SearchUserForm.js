
const SearchUserForm = () => {
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