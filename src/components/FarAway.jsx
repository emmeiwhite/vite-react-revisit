import { useState } from 'react'

export default function FarAwayApp() {
  // One Source of Truth!
  const [list, setList] = useState([])

  // we need data in the form so that we can add it to the lists
  // Simultaneously we need to pass the list down the component tree to be rendered in the UI
  // Because the UI is the reflection of current state! So this much happen immediately
  function getObject(object) {
    console.log(object)

    setList([...list, object]) // We are updating state, As soon as state updates, React Re-renders the component
  }

  function handleChecked(id) {
    setList(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, isPacked: !item.isPacked } : item))
    )
  }

  return (
    <section className="faraway-container">
      <FarAwayHeader />

      <FarAwayForm getObject={getObject} />

      <FarAwayTravelList
        list={list}
        handleChecked={handleChecked}
      />

      <FarAwayStats list={list} />
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

function FarAwayTravelList({ list, handleChecked }) {
  console.log(list)
  return (
    <section className="faraway-travel-list">
      <ul className="list-items">
        {list.map(item => (
          <Item
            {...item}
            key={item.id}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
    </section>
  )
}

//       const itemObj = {
//     id: new Date().toISOString(),
//     itemName: item,
//     totalItems: itemCount,
//     isPacked: false
//   }

function Item({ id, itemName, totalItems, isPacked, handleChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={isPacked}
        onChange={() => handleChecked(id)}
      />

      <span style={isPacked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
        {totalItems} {itemName}
      </span>

      <span>❌</span>
    </li>
  )
}

function FarAwayStats({ list }) {
  const totalItems = list.length
  const totalChecked = list.filter(item => item.isPacked).length
  const totalPercentage = ((totalChecked / totalItems) * 100).toFixed(2) || 0
  return (
    <div className="faraway-stats">
      <p>
        You have {totalChecked} items in the list & you area already {totalPercentage} % packed
      </p>
    </div>
  )
}
