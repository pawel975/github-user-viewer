import { useEffect, useState } from "react";
import Message from '../Message/Message';
import "../ActiveRepoDetailsSection/ActiveRepoDetailsSection.scss";

const ActiveRepoDetailsSection = ({viewedRepoId, userReposList}) => {

    const [viewedRepoData, setViewedRepoData] = useState();

    useEffect(() => {

        // Search for repo details based on repo clicked at repos list
        setViewedRepoData(userReposList.filter(repo => repo.id === viewedRepoId)[0])

    }, [userReposList, viewedRepoData, viewedRepoId])

    return (
        <section
            className="active-repo-details-section"
            data-testid="active-repo-details-section"
        >
        {viewedRepoData && viewedRepoId ?
            <>
                <h2 className="active-repo-details-section__repo-name">
                    {viewedRepoData.name}
                </h2>
                <p className="active-repo-details-section__param">
                    Stars: <strong><span>{viewedRepoData.stargazers_count}</span></strong>
                </p>
                <p className="active-repo-details-section__param">
                    Watchers: <strong><span>{viewedRepoData.watchers_count}</span></strong>
                </p>
                <p className="active-repo-details-section__param">
                    Forks: <strong><span>{viewedRepoData.forks_count}</span></strong>
                </p>
            </>
            :
            <Message message={"Click at any user's repo to view details"} type={"info"} />
        }
        </section>
    )
}

export default ActiveRepoDetailsSection;