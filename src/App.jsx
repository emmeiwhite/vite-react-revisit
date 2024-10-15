import pizzaData from './data'

export default function App() {
  return (
    <section className="container">
      <Header />
      <Menu />
      <Footer />
    </section>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map(pizza => {
          return (
            <Pizza
              key={pizza.name}
              {...pizza}
            />
          )
        })}
      </div>
    </main>
  )
}

function Pizza() {
  return (
    <article className="pizza">
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
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footer() {
  // Let's write some JavaScript within this function
  let hour = new Date().getHours()
  let openHour = 11
  let closeHour = 22

  let isOpen = hour >= openHour && hour <= closeHour

  console.log(isOpen)

  if (isOpen) {
    console.log('Restaurant is open to take orders!')
  } else {
    console.log('Sorry, we are closed and we serve at 12:00 clock')
  }
  return (
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()} We are currently open!</p>
    </footer>
  )
}
