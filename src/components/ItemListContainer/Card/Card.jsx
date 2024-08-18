import { Botonera } from "./components/Botonera"
import { InfoUser } from "./components/InfoUser"

export const Card = ({name, username, details}) => {
    return (
    <>
    <div className="estiloCards">
    <img src="https://media.licdn.com/dms/image/v2/D4D03AQHb9zB0ksGc3A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723678133855?e=1729123200&v=beta&t=bxtQJqtK6jQghjc8jqBB0mO-nMI-BLPVd1vf8aT2t0s" alt="Imagen de perfil" />
    <div className="container">
        <InfoUser  name={name} username={username} details={details}/>
        <Botonera></Botonera>
    </div>
    </div>
    </>
)
}




