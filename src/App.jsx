import pizzaData from './data'

export default function App() {
  return (
    <section className="app">
      <Header />

      {pizzaData.map(pizza => {
        return (
          <Pizza
            key={pizza.name}
            {...pizza}
          />
        )
      })}
      <Pizza />

      <Footer />
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
  return <p>Header</p>
}

function Footer() {
  return <p>Footer</p>
}
