import React, {useState,useEffect} from 'react'
import DatingCards from 'react-tinder-card'
import'./DatingCard.css';
import axios from'axios';



const DatingCard=()=>{
  const [people,setpeople]= useState([])
  useEffect(()=>{
    async function fetchData(){
      const req =await axios.get("/dating/cards")
      setpeople(req.data)
    }
    fetchData()
  },[])
  const swiped = (direction, nameToDelete)=>{
    console.log("receiving"+ nameToDelete)
  }
  const outOfFrame = (name)=>{
    console.log(name+"left the screen!!")
  }
  return(
    <div className='datingCard'>
        <div className='datingCards_container'>
          {people.map((person)=>(
            <DatingCard
            className="swipe"
            key={person.name}
            prevenSwipe={['up','down']}
            onSwwipe={(dir)=>swiped(dir,person.name)}
            onCardleftScreen={()=>outOfFrame(person.name)}>
              <div style={{backgroundImage: `ulr(${person.imgUrl})`}} className="abs">
                <h3>{person.name}</h3>
              </div>
            </DatingCard>
          ))}

        </div>
    </div>
  )
}
export default DatingCards