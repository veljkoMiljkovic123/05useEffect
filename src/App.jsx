import { useEffect, useState } from "react"
import SingleUser from "./components/SingleUser";


function App() {

  const [person,setPerson] = useState({      name:"Tihomir",
  age:22,
  address:"Rasovaca",
});

  


  return <div className="container mx-auto">
    <SingleUser person={person} setPerson={setPerson}/>

  </div>
   
  
}

export default App