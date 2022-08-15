import './SingleRepo.scss';

const SingleRepo = ({repoDetails, handleRepoClick}) => {

    const {name, html_url, language, id, description} = repoDetails;

    return (
        <button 
            className="single-repo"
            onClick={handleRepoClick}
            id={id}
            tabIndex="0"
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
                    <strong>{language}</strong>
                </span>
            </div>
            <div>
                <span 
                    className='single-repo__description'
                >
                    {description}
                </span>
            </div>
        </button>
    )
}

export default SingleRepo;