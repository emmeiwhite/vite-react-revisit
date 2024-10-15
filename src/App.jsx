import ProfileCard from './components/Challenge-profile-card'
import pizzaData from './data'

export default function App() {
  return (
    <section className="container">
      <Header />
      <Menu />
      <Footer />

      {/* Challenges Here! */}
      <ProfileCard />
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

function Pizza({ name, ingredients, photoName, soldOut, price }) {
  return (
    <article className={`pizza ${soldOut && 'sold-out'}`}>
      <img
        src={photoName}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <h4>Price $ {price}</h4>

      <h5>{soldOut ? 'Sold Out' : 'Available'}</h5>
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
