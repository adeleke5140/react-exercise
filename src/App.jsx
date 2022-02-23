import "./index.css";
import testFiles from "./testFiles";
import FileList from "./components/FileList";


export default function App() {
  return (
    <div className="App">
      <FileList files={testFiles} />
    </div>
  );
}

