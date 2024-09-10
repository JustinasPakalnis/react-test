import "./App.css";
import { Header } from "./components/header/Header";
import { Second } from "./components/second_app/second";
import { Counter } from "./components/first_app/First";
import { Footer } from "./components/footer/Footer";
import { Grocery } from "./components/grocery/Grocery";
import { Like } from "./components/like/Like";
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
          <Like></Like>
        </section>
        <section>
          <Grocery></Grocery>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
