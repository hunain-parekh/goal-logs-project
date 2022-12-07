import Header from './components/Header';
import GoalList from './components/GoalList';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <GoalList/>
        <i class="fa fa-book"></i>
      </main>
    </>
  );
}

export default App;
