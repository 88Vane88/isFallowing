import {TwitterFollowCard} from "./TwitterFollowCars"
import "./app.css"

export default function App() {
/* const format=(userName)=>`@${userName}` */ 


return(
  <section className="App">
    <TwitterFollowCard 
    initialIsFollowing={true}
    userName="midudev"
    name= "Miguel Durán"/>
    <TwitterFollowCard 
    isFollowing={false}
    userName="vane88"
    name= "Vanesa Cignani"/>
    {/* <TwitterFollowCard 
   <h1> Miguel Durán</h1> />
   
   Y este se le pasa al componente de TwitterFollow... y se le pasa la prop como {children}
   
   */}
  </section>
)
}


