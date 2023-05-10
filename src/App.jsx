import {TwitterFollowCard} from "./TwitterFollowCars"
import "./app.css"

const users=[
  {
    id:1,
    userName:"midudev",
    name:"Miguel Angel Duran",
    isFollowing:true
  },
  {
    id:2,
    userName:"vane88",
    name:"Sandra Vanesa Cignani",
    isFollowing:false
  },
  {
    id:3,
    userName:"morenita",
    name:"Morena",
    isFollowing:true
  },
  {
    id:4,
    userName:"Martiu",
    name:"Martinaa",
    isFollowing:false
  }
]

export default function App() {
/* const format=(userName)=>`@${userName}` */ 


return(
  <section className="App">
   {
      users.map(({userName, name, isFollowing, id})=> (
      <TwitterFollowCard
      key={id}
      userName={userName}
      initialIsFallowing={isFollowing}>
       {name}
      </TwitterFollowCard>
    ))}


    {/* <TwitterFollowCard 
    isFollowing={false}
    userName="vane88"
    name= "Vanesa Cignani"/> */}

    {/* <TwitterFollowCard 
   <h1> Miguel Durán</h1> />
   
   Y este se le pasa al componente de TwitterFollow... y se le pasa la prop como {children}
   
   */}
  </section>
)
}


