import './assets/main.css';
import './App.css';
import { Back, Cart, Checkmark, Delete } from './components/icons';

function App() {
  return (
    <div className="font-body bg-gray-medium">
      <h1 className="text-4xl font-bold text-blue-700 font-display">
        TAILWIND BABY
      </h1>
      <p>Mic check...</p>
      <Delete />
      <Back />
      <Checkmark />
      <Cart />
    </div>
  );
}

export default App;
