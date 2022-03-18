import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setPostsList(response.data);
      // console.log(response.data);
    });
  }, []);
  return (
    <div className="">
      {postsList.map((value, key) => {
        return (
          <div className="post" key={value.id}>
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
