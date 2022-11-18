import './App.css';
import Header from './layout/header/Header';
import SideBar from './layout/sidebar/SideBar';

function App() {
    return (
        <div className='main'>
            <Header section={'Payment'} />
            <SideBar />
        </div>
    );
}

export default App;
