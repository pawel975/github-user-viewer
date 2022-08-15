import ActiveRepoDetailsSection from "../ActiveRepoDetailsSection/ActiveRepoDetailsSection";
import UserInfoSection from "../UserInfoSection/UserInfoSection";
import UserReposSection from "../UserReposSection/UserReposSection";
import "../UserContent/UserContent.scss";
import { useEffect, useState } from "react";
import data from '../../mockReposEndpoint.json';

const UserContent = ({userData}) => {
    
    const {repos_url} = userData;

    const [userReposList, setUserReposList] = useState(data);
    const [viewedRepoId, setViewedRepoId] = useState(null);

    // useEffect(() => {

    //     fetch(repos_url)
    //     .then(res => res.json())
    //     .then(data => setUserReposList(data))
    //     .catch(err => console.error(err));

    // }, [repos_url, userReposList]);

    const handleRepoClick = (e) => {
        if (e.target.className === "single-repo") {
            setViewedRepoId(Number(e.target.id))
        }
        // If repo's container child elements are clicked, click is assigned only to parent element
        else if (e.target.parentElement.className === "single-repo") {
            setViewedRepoId(Number(e.target.parentElement.id))
        }
    }

    return (
        <section
            className="user-content"
            data-testid="user-content"
        >
            <UserInfoSection userData={userData} />
        {
            userReposList &&
                <div className="repos-section-wrapper">
                    <UserReposSection 
                        userReposList={userReposList} 
                        handleRepoClick={handleRepoClick}    
                    />

                    <ActiveRepoDetailsSection 
                        viewedRepoId={viewedRepoId} 
                        userReposList={userReposList}
                    />

                </div>
        }
            

        </section>
    )
}

export default UserContent;