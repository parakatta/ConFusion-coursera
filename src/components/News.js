import React,{useState,useEffect} from "react"; 

 const News=()=>{


    /* const [news,setNews]=useState([]); */
    const [query,setQuery]=useState('react');
    const handleChange=(e)=>{
        setQuery(e.target.value)
    }


    
         return (
             <div>
             <h2>Loading</h2>
             <form >
                 <input type="text" value={query} onChange={handleChange}></input>
                 <button>Search</button>
             </form>
             {/* {news.map((n,i)=>(<p key={i}>{n.title}</p> */}

             )

             )
             </div>
         );
     }


export default News;

