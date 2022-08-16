import SingleRepo from '../SingleRepo/SingleRepo';
import '../UserReposSection/UserReposSection.scss';

const UserReposSection = ({userReposList, handleRepoClick}) => {

    const allRepos = userReposList.map(repoDetails => (
        <SingleRepo 
            key={repoDetails.id}
            repoDetails={repoDetails}
            handleRepoClick={handleRepoClick}
        />
    ))

    return (
        <section 
            className="user-repos-section"
            data-testid="user-repos-section"
        >
            {allRepos}
        </section>
    )
}

export default UserReposSection;