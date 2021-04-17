import React, { useEffect } from "react";
import { Tit } from "./style.js";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
    console.log(1);
  }, []);
  return (
    <div>
        <Tit>This is the Home page</Tit>  
    </div>
  );
};

export default Home;
