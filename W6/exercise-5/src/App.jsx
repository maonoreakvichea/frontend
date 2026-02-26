import Card from "./components/Card"
import { AVAILABLE_PLACES } from "./data"
export default function App() {
  return (
    <div className="App">
      <h1>IMAGE_GALLERY</h1>
      <ul>
        {AVAILABLE_PLACES.map((place) => (
          <Card  card={place} />
        ))}
      </ul>
    </div>
  )
}

