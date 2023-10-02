import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {
    const[gif, setGif] = useState('');

    const[loading, setLoading] = useState(false);
    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data} = await axios.get(url);
        // console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    }, [])

    function clickHandler() {
        fetchData();
    }
  return (
    <div style={{width:'50%', backgroundColor:'lightgreen', display:'flex', flexDirection:'column',borderRadius:'5px', alignItems:'center',justifyContent:'center', padding:'0.5rem', marginBottom:'1.5rem'}}>
        <h1 style={{marginTop:'15px' }}>Random Gif</h1>
        {
            loading? (<Spinner/>) : (<img src={gif} alt="" width={'450px'}></img>)
        }
        <button onClick={clickHandler} style={{marginBottom:'20px', marginTop:'10px', width:'80%',height:'30px', backgroundColor:'yellow', fontWeight:'bold' }}>Generate</button>
    </div>

  )
}

export default Random