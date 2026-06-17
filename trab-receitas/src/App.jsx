import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;