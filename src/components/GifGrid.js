//import React,{useState,useEffect} from 'react'
import React from 'react'
import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGits';

const GifGrid = ({category}) => {

//  const [count, setcount] = useState(0);
const {data:images ,loading} =useFetchGifs(category);



//const [images, setimages] = useState([])

 // useEffect(()=>{
   // getGifs();
 //  getGifs(category)
  //  .then(img=>setimages(img))
 // },[category])

 /* const getGifs= async()=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PzM98m7TtFZCi5m8IcoUg00RrOqYcHxU&q=${ encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json(); 
    
    const gifs= data.map(img=>{
        return{
          id:img.id,
          title:img.title,
          url:img.images.downsized_medium.url
        }
    })
    
    setimages(gifs);
  }
*/

  
    return (
      <>
        
        <h3 className="animate__animated animate__fadeIn">{category}</h3> 
        { loading ? 'Cargando ...' : 'Data Cargada' }

        <div className="card-grid">   
            {
              /* images.map(img=>(<li key={img.id}>{img.title}</li>))*/
              /*images.map(({id,title})=>(<li key={id}>{title}</li>))*/
              images.map(img=>(<GifGridItem key={img.id} {...img}/>))
            }
          
        </div>
      </>
       
    )
}

export default GifGrid
