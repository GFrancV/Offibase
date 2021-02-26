import './App.css';
import Form from './components/Form';
import Links from './components/Links';
import RegisterForm from './services/RegisterForm';

function App() {

  return (
    <div className="container p-2">
      <RegisterForm />
      <Links />
    </div>
  );
}

export default App;
