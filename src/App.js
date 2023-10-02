// import logo from './logo.svg';
import './App.css';
import Tag from './components/Tag';
import Random from './components/Random';
function App() {
  return (
    <>
      <div className="Appcontainer" style={{height:'100vh', width:'100vw', overflowX:'hidden', overflowY:'auto', backgroundColor:'#880ED4'}}>
        <h1 style={{textAlign:'center', border:'1px solid black', marginLeft:'3rem', width:'1400px', backgroundColor:'white', borderRadius:'5px'}}>RANDOM GIFS</h1>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Random/>
          <Tag/>
        </div>
      </div>
    </>
  );
}

export default App;
