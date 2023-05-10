import {useState} from 'react';


export function TwitterFollowCard({userName, children, initialIsFallowing}){
/* -para que img cambie. Crear constante y pasarle el {userName}
Si le quiero pasar por default un valor. Por ejemplo si el userName es unknown, que aparezca
por defecto----> userName="unknown"
*/

const [isFollowing, setIsFollowing]=useState(initialIsFallowing) /* SI SE PASA ASI, SE INICIALIZA UNA SOLA VEZ */

const text=isFollowing ? "Siguiendo" : "Seguir"
const buttonClassName = isFollowing ? "tw-followCard-button is-fallowing" : "tw-followCard-button"

const handleClick=()=>{
  setIsFollowing(!isFollowing) /* si es false, pasalo a true o viceversa  */
}

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" alt="Midu" src={`https://unavatar.io/${userName}`}/>
        <div className="tw-followCard-info">
          <strong> {children}</strong>
          <span className="tw-followCard-username">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'> Dejar de seguir </span>
        </button> 

      </aside>
    </article>
  )
}

export default TwitterFollowCard;