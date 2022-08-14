import ActiveRepoDetailsSection from "../ActiveRepoDetailsSection/ActiveRepoDetailsSection";
import UserInfoSection from "../UserInfoSection/UserInfoSection";
import UserReposSection from "../UserReposSection/UserReposSection";

const UserContent = ({userData}) => {
    
    return (
        <section
            className="user-content"
            data-testid="user-content"
        >
            <UserInfoSection userData={userData} />
            <UserReposSection />

            <ActiveRepoDetailsSection />
        </section>
    )
}

export default UserContent;