import './App.css';
import PasswordInput from './components/PasswordInput';

function App() {
  const [formValid, setFormValid] = useState([false, false, false, false])

  return (
    <div>
      <h1>Change Password</h1>
      <form>
        <div>
          <label>Old Password</label>
          <PasswordInput required="true"></PasswordInput>
        </div>
        <div>New
          <label> Password</label>
          <PasswordInput passwordPattern="(?=.*\d)(?=.*\w)(?!.*\s).{8,}"></PasswordInput>
        </div>
        <div>
          <label>Confirm Password</label>
          <PasswordInput passwordPattern="(?=.*\d)(?=.*\w)(?!.*\s).{8,}"></PasswordInput>
        </div>
        <div>
          <button>Cancel</button>
          <button>Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default App;
