import pizzaData from './data'

export default function App() {
  return (
    <section className="app">
      <Header />
      <Menu />
      <Footer />
    </section>
  )
}

function Menu() {
  return (
    <section className="menu">
      {pizzaData.map(pizza => {
        return (
          <Pizza
            key={pizza.name}
            {...pizza}
          />
        )
      })}
    </section>
  )
}
function Pizza() {
  return (
    <article>
      <img
        src="./pizzas/salamino.jpg"
        alt="pizza salamino"
      />
      <h3>Pizza Salamino</h3>
      <p>Tomato, mozarella, and pepperoni</p>
    </article>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Footer() {
  return <p>{new Date().toLocaleTimeString()} We are currently open!</p>
}
