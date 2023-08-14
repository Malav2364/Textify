import './App.css';
import './Media.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <> 
    <div id="main">
      <Navbar title='Textify' listc1='Home'></Navbar>  
        <div id="pg-1">
              <TextForm hold = 'Chaliye Shuru Karte Hai...' rs='20' cs='110' heading='Enter Your Text'></TextForm>
          </div>
    </div>
  </>
  );
}

export default App;