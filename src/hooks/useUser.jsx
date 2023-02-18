import { useState } from "react";

const useUser = () => {
  const [users, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
const fetchUser = async (name) => {
      const URL = 'https://api.github.com/users/';
      console.log(name);
      try {
        const res = await fetch(`${URL}${name}`);
        const data = await res.json();
        setUser(data);
        setIsLoading(true);
      } catch {
        setIsLoading(false)
      }
    };

    console.log(users);
  return {
    fetchUser,
    users,
    isLoading
  };
};

export default useUser;
