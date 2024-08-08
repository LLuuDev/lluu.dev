import './App.css';
import {useState} from "react";

function App() {
  const [like, setLike] = useState(0);
  return (
      <div>
        <h1>{like}</h1>
        <button onClick={() => {
          setLike(like + 1);
        }}>
          좋아요
        </button>
      </div>
  );
}

export default App;
