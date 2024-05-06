import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://acdn.mitiendanube.com/stores/430/263/products/1-32-batmovel-1966_011-a4f7118de5fcd5c95916789845019917-1024-1024.png">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
