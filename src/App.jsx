import './App.css';
import { ShopItemFunc } from './component';
import { ShopItemClass } from './component';
import item from './component/item';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <>
          <ShopItemFunc info={item}/>
        </>
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <>
          <ShopItemClass info={item}/>
        </>
      </div>
    </div>
  );
}

export default App;
