import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/counterSlice';
import Login from './Login'
import Logout from './Logout';



const App = () => {
  const user = useSelector(selectUser)
  return (
    <div className="">
     {user ? <Logout/> : <Login/>}
    </div>
  );
};

export default App;
