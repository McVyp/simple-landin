
import './App.css';
import explore from './assets/lon.jpg';
import explore1 from './assets/sce.jpg';
import explore2 from './assets/zee.jpg';
import Main from './components/Main';
import Slider from './components/Slider';

function App() {
  return (
  <div className="App">
    <Main  imageSrc={explore2}/>
    <Slider 
    imageSrc={explore1} 
    title={"Be an douche"} 
    subtitle={"This is where we all say goodbye to each other!"}
    />
    <Slider 
    imageSrc={explore} 
    title={"Feels like 2020"} 
    subtitle={"This is where we all say goodbye to each other!"}
    flipped={true}
    />
  </div>
  );
}

export default App;
