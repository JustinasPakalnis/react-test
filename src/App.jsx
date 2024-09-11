import "./App.css";
import { Header } from "./components/header/Header";
import { Second } from "./components/second_app/Second";
import { Counter } from "./components/first_app/First";
import { Footer } from "./components/footer/Footer";
import { Grocery } from "./components/grocery/Grocery";
import { Like } from "./components/like/Like";
import { Tip } from "./components/tip_calculator/Tip";
function App() {
  return (
    <>
      <main>
        <Header></Header>
        <section className="container">
          <Counter name="Zalgiris"></Counter>
          <Counter name="Suodziai"></Counter>
        </section>
        <section className="container">
          <Second></Second>
        </section>
        <section className="containerTip">
          <Tip></Tip>
        </section>
        <section>
          <Grocery></Grocery>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

export default App;
