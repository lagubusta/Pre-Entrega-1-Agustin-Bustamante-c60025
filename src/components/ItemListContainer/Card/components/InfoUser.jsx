

export const InfoUser = ({name, username, details}) => {
    return <>
        <div className="content">
            <h3 className="name">{name}</h3>
            <h5 className="username">{username}</h5>
            <p className="details">
                {details}
            </p>
        </div>
    </>
}