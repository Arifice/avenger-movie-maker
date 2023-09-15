/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
   const [allActors,setAllactors]=useState([]);
   const [selectedActors,setSelectedActors]=useState([]);
   const [remain,setRemain]=useState(0);
   const [totalcost,setTotalCost]=useState(0);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setAllactors(data));
    },[])

    const handeSelectActor=(actor)=>{
        console.log(actor);

        const isExist=selectedActors.find(item=>item.id==actor.id);
        let count=actor.salary; 

        if(isExist){
           return alert('Already selected');
          
        }
        else{
            selectedActors.forEach(item=>{
                count=count+item.salary;
            })
            const totalRemain=50000-count;
            
            if(count>50000){
                return alert('No Available balance');
            }
            else{
                setRemain(totalRemain) 
                setTotalCost(count);
                setSelectedActors([...selectedActors,actor]);
                
            }
            
        }

    }
    console.log(selectedActors);

    


    return (
        <div className='container flex my-20'>
                        
            <div className='card-container text-white w-2/3 grid gap-8 grid-cols-3'>
                {/* card */}
                {
                    allActors.map(actor=>(
                        <div key={actor.id} className='card text-center space-y-2'>
                            <div className='flex justify-center items-center'>
                                <img className='rounded-full w-20' src={actor.image} alt="" />
                            </div>
                            <h1 className='text-3xl font-bold'>{actor.name} </h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, tempora?</p>
                            <div className='flex justify-between'>
                                <p className='text-xl'>salary : {actor.salary} $</p>
                                <p className='text-xl'>{actor.role}</p>
                            </div>
                            <button  onClick={()=>handeSelectActor(actor)} className='bg-blue-500 px-3 py-1 text-2xl font-semibold rounded-md '>select</button>

                        </div>
                    ))
                }

            </div>
                {/* cart */}
            <div className='text-white w-1/3'>
                    <Cart selectedActors={selectedActors}
                    remain={remain} totalcost={totalcost}
                    ></Cart>
            </div>
        
        </div>
    );
};

export default Home;