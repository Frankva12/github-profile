import { useState } from "react";

const useUser = () => {
  const [users, setUser] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  
    const fetchUser = async (name) => {
      const res = await fetch(`https://api.github.com/users/${name}`);
      const data = await res.json();
      console.log(name);
      setUser(data);
      console.log(data);
    //   setIsLoading(false);
    };

  return {
    fetchUser,
    users,
    // isLoading
  };
};

export default useUser;
