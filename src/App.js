import './App.css'
import Header from './Components/header/header';
import Projectcontainer from './Components/project_container/projectcontainer';
import Skillcontainer from './Components/skill_container/skillcontainer';
import Topcontainer from './Components/top_container/topcontainer';
import Contactcontainer from './Components/contact/contactcontainer';

function App() {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Contactcontainer />
    </div>
  );
}

export default App;
