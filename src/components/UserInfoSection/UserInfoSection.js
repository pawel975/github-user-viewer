import "../UserInfoSection/UserInfoSection.scss";

const UserInfoSection = ({userData}) => {

    const {avatar_url, login, name} = userData;

    return (
        <section 
            className="user-info-section"
            data-testid="user-info-section"
        >
            <div className="avatar-wrapper">
                <img src={avatar_url} alt="user avatar"/>
            </div>

            <div className="info-wrapper">
                <header className="info-wrapper__name">{name}</header>
                <p className="info-wrapper__login">{login}</p>
            </div>

        </section>
    )
}

export default UserInfoSection;