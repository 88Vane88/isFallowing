import {useState} from 'react';

export function TwitterFollowCard({userName, name/* children */}){
/* -para que img cambie. Crear constante y pasarle el {userName}
Si le quiero pasar por default un valor. Por ejemplo si el userName es unknown, que aparezca
por defecto----> userName="unknown"
*/

const [isFollowing, setIsFollowing]=useState(false)

const text=isFollowing ? "Siguiendo" : "Seguir"
const buttonClassName = isFollowing ? "tw-followCard-button is-fallowing" : "tw-followCard-button"

const handleClick=()=>{
  setIsFollowing(!isFollowing) /* si es false, pasalo a true o viceversa */
}

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" alt="Midu" src="https://avatars.githubusercontent.com/u/1561955?v=4"/>
        <div className="tw-followCard-info">
          <strong> {name}</strong>
          <span className="tw-followCard-username">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}> {text} </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard;