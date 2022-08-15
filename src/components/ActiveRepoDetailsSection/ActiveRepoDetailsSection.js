import { useEffect, useState } from "react";
import "../ActiveRepoDetailsSection/ActiveRepoDetailsSection.scss";

const ActiveRepoDetailsSection = ({viewedRepoId, userReposList}) => {

    const [viewedRepoData, setViewedRepoData] = useState();

    useEffect(() => {
       setViewedRepoData(userReposList.filter(repo => repo.id === viewedRepoId)[0])
    }, [userReposList, viewedRepoData, viewedRepoId])
    
    // const {name, stargazers_count, watchers_count} = viewedRepoData;
    
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
            </>
            :
            <p>Choose repo to view details</p>
        }
        </section>
    )
}

export default ActiveRepoDetailsSection;