import './SingleRepo.scss';

const SingleRepo = ({repoDetails, handleRepoClick}) => {

    const {name, html_url, language, id} = repoDetails;

    return (
        <div 
            className="single-repo"
            onClick={handleRepoClick}
            id={id}
        >
            <div>
                <a 
                    href={html_url}
                    className="single-repo__repo-link"
                >
                    {name}
                </a>
                <span 
                    className='single-repo__privacy-status'
                >
                    {repoDetails.private ? "private" : "public"}
                </span>
            </div>
            <div>
                <span 
                    className='single-repo__language'
                >
                    {language}
                </span>
            </div>
        </div>
    )
}

export default SingleRepo;