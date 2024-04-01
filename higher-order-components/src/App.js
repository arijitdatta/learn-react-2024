import PicDisplay from "./PicDisplay";
import withLogging from "./WithLogging";

function App() {
  //applying HOC to normal component
  const WrappedComponent = withLogging(PicDisplay);
  return (
    <div className="App">
      <h1>This is app</h1>
      <h2>WrappedComponent</h2>
      <WrappedComponent name="Arijit" />
    </div>
  );
}

export default App;
