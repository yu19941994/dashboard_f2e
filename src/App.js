import Classes from './App.module.css';
import Header from './layout/Header';
import Main from './layout/Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App
library.add(fab, fas, far)
