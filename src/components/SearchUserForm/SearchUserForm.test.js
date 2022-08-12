import { render, screen } from "@testing-library/react";
import SearchUserForm from "./SearchUserForm";

describe('<SearchUserForm/> should', () => {

    test('contain input for user name', () => {
        render(<SearchUserForm/>);
        const searchUserInput = screen.getByPlaceholderText("Search for user...");
        expect(searchUserInput).toBeInTheDocument();
    });

    test('contain button to submit user name for search', () => {
        render(<SearchUserForm/>);
        const searchUserBtn = screen.getByText("Search");
        expect(searchUserBtn).toBeInTheDocument();
    });
});