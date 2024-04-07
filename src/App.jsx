import { useEffect,useState } from "react"
import CardComponent from "./components/CardComponent";

function App() {
const [myData,setMyData] = useState([])

useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data=>setMyData(data.products))
  .catch(err=>console.log(err))
  
},[]);

  return <div className="container mx-auto ">
   <h1 className="text-4xl font-bold uppercase p-5 text-center bg-blue-500">Hello ReactJs</h1>
  <div className="flex flex-wrap gap-5 "> 
     {myData.map((el,i)=>{
      return <CardComponent key={i} item={el} />
     })}</div>
      
    </div>
  
}

export default App
