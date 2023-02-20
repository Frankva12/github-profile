import { useUser } from './hooks';
import { UserCard } from './modules/UserCard';
import { UserSearch } from './modules/UserSearch';

function App() {
  const {fetchUser, users, isLoading} = useUser()
  return (
    <div className="main text-center">
       <UserSearch onSubmit={fetchUser}/>
       <UserCard data={users} isLoading={isLoading}/>
    </div>
  );
}

export default App;
