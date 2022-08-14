import ActiveRepoDetailsSection from "../ActiveRepoDetailsSection/ActiveRepoDetailsSection";
import UserInfoSection from "../UserInfoSection/UserInfoSection";
import UserReposSection from "../UserReposSection/UserReposSection";
import "../UserContent/UserContent.scss";

const UserContent = ({userData}) => {
    
    return (
        <section
            className="user-content"
            data-testid="user-content"
        >
            <UserInfoSection userData={userData} />
        
            <div className="repos-section-wrapper">
                <UserReposSection />
                <ActiveRepoDetailsSection />
            </div>

        </section>
    )
}

export default UserContent;