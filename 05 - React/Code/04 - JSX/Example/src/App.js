// Here, I can import various stuff from other sources
import './App.css';

// This is my component
function App() {

  // Our JavaScript code
  const name = 'Nino';
  const user = {
    lastName: 'Škuflić',
    age: 26
  };

  // This is my "HTML" where I will be using the JSX syntax
  return (
    <div className="App">
      <h1>User information</h1>
      <h2>{name} {user.lastName} is {user.age} years old.</h2>
    </div>
  );
}

export default App;