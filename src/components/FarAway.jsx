import { useState } from 'react'

export default function FarAwayApp() {
  // One Source of Truth!
  const [lists, setLists] = useState([])

  // we need data in the form so that we can add it to the lists
  // Simultaneously we need to pass the list down the component tree to be rendered in the UI
  // Because the UI is the reflection of current state! So this much happen immediately
  function getObject(object) {
    console.log(object)
  }
  return (
    <section className="faraway-container">
      <FarAwayHeader />

      <FarAwayForm getObject={getObject} />

      <FarAwayTravelList lists={lists} />

      <FarAwayStats lists={lists} />
    </section>
  )
}

// Stateless component - Just for UI
function FarAwayHeader() {
  return (
    <header className="faraway-header">
      <h1 className="faraway-heading">🌴 FARAWAY APP 🏝</h1>
    </header>
  )
}

function FarAwayForm({ getObject }) {
  const [itemCount, setItemCount] = useState(1)
  const [item, setItem] = useState('')

  function handleChange(e) {
    setItemCount(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (itemCount && item.length > 0) {
      const itemObj = {
        id: new Date().toISOString(),
        itemName: item,
        totalItems: itemCount,
        isPacked: false
      }

      // Communicating data from child to parent
      getObject(itemObj)

      setItemCount(1)
      setItem('')
    } else {
      return
    }
  }

  function handleInputChange(e) {
    setItem(e.target.value)
  }

  return (
    <form
      className="faraway-form"
      onSubmit={handleSubmit}
    >
      <span className="faraway-form-text">What do you need for your 😍 trip</span>
      <select
        onChange={handleChange}
        value={itemCount}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <input
        type="text"
        name="items"
        placeholder="Item..."
        value={item}
        onChange={handleInputChange}
      />

      <button type="submit">Add</button>
    </form>
  )
}

function FarAwayTravelList({ item = 'Become a Master of Coding' }) {
  return (
    <section className="faraway-travel-list">
      <ul className="list-items">
        {/* Single List item | From Object to UI (Thinking in React) */}
        <li>
          <input
            type="checkbox"
            name=""
            id=""
          />

          <span>{item}</span>

          <span>❌</span>
        </li>

        {/* Single List item | From Object to UI (Thinking in React) */}
        <li>
          <input
            type="checkbox"
            name=""
            id=""
          />

          <span>JavaScript Advanced{item}</span>

          <span>❌</span>
        </li>

        {/* Single List item | From Object to UI (Thinking in React) */}
        <li>
          <input
            type="checkbox"
            name=""
            id=""
          />

          <span>"Next.JS"{item}</span>

          <span>❌</span>
        </li>
      </ul>
    </section>
  )
}

function FarAwayStats({ itemCount = 3, totalItems = 6 }) {
  const totalPercentage = (itemCount / totalItems) * 100
  return (
    <div className="faraway-stats">
      <p>
        You have {itemCount} items in the list & you area already {totalPercentage} % packed
      </p>
    </div>
  )
}
