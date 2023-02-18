import { useState } from "react";

const useUser = () => {
  const [users, setUser] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
  
const fetchUser = async (name) => {
      const URL = 'https://api.github.com/users/';
      console.log(name);
      
      const res = await fetch(`${URL}${name}`);
      const data = await res.json();
      setUser(data);
    };

    console.log(users);
  return {
    fetchUser,
    users,
    // isLoading
  };
};

export default useUser;
