import './App.css';
import Profile from "./Profile/Profile.jsx";
import userData from "../data/userData.json";
import FriendList from './FriendList/FriendList.jsx';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../data/transactions.json';


function App() {
  console.log(friends);
 return (
  <div className='style'>    
   <Profile {...userData}/>
   <FriendList friends={friends} />
   <TransactionHistory transactions={transactions}/>
  </div>
  );
}

export default App
