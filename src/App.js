import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    const resp = await axios.get("https://api.randomuser.me/");
    console.log("Response: ", resp)
    setPosts(resp.data.results);
    }
    fetchData()
  }, []);


  return (
    <div>
      { posts.map((p,i) => <div key={i}>{p.email}</div>)}
    </div>
  );
}

export default App;
