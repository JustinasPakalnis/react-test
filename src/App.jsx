import "./App.css";
import { Header } from "./components/header/Header";
import { Second } from "./components/second_app/second";
import { Counter } from "./components/first_app/First";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <>
      <main>
        {" "}
        <Header></Header>
        <section className="container">
          <Counter name="Zalgiris"></Counter>
          <Counter name="Suodziai"></Counter>
        </section>
        <section className="container">
          {" "}
          <Second></Second>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
