import { useState } from "react";

const useUsers = (props) => {
  const [users, setUser] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  
    const fetchUser = async () => {
      const res = await fetch(`https://api.github.com/users/frankva12`);
      const data = await res.json();
      setUser(data);
    //   setIsLoading(false);
    };

  return {
    fetchUser,
    users,
    // isLoading
  };
};

export default useUsers;
