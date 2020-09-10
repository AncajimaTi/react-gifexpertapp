import React,{useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
   // const categories = ['One Punch','Samurai x', 'Dragon Ball'];
   const [categories, setcategories] = useState(['One Punch'])

    /*const Addhandle=()=>{
        //setcategories([...categories,'Naruto']);
        
        setcategories(cats=>[...cats,'Naruto Shippuden'])
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
                <AddCategory setcategories = { setcategories }/>
            <hr />
                    {/*  <button onClick={Addhandle}> Agregar</button> */}   
            <ol>
                {
                    categories.map((category,i)=>(
                       
                       <GifGrid key={category} category={category}/>
                      
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
