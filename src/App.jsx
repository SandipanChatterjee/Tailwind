import "./App.css";
import Navbar from "./components/common/Navbar/Navbar";
import { RootRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <aside>
        <Navbar />
      </aside>
      <main>
        <RootRoutes />
      </main>
    </div>
  );
}

export default App;
