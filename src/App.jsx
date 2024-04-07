import { useEffect,useState } from "react"
import CardComponent from "./components/CardComponent";
import LoadingComponent from "./components/LoadingComponent";

function App() {
const [myData,setMyData] = useState([])
const[isLoading, setIsLoading] = useState(false)

//drugi hook useEfect 

useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data=>{
    setMyData(data.products)
    setIsLoading(true)
  })
  .catch(err=>console.log(err))
  
},[]);

  return <div className="container mx-auto ">
   <h1 className="text-4xl font-bold uppercase p-5 text-center bg-blue-500">Hello ReactJs</h1>

  {isLoading?<div className="flex flex-wrap gap-5 "> 
     {myData.map((el,i)=>{
      return <CardComponent key={i} item={el} />
     })}</div>:<LoadingComponent />}
      
    </div>
  
}

export default App
