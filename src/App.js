import './App.css';
import PaymentScreen from './components/paymentScreen/PaymentScreen';
import Header from './layout/header/Header';
import SideBar from './layout/sidebar/SideBar';

function App() {
    return (
        <div className='main'>
            <Header section={'Payment'} />
            <SideBar />
            <PaymentScreen />
        </div>
    );
}

export default App;
