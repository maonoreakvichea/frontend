

export default function Card({ card }) {
  return (
    <>
    <div className="image">
      <img src={card.image.src} alt={card.image.alt} />
      <h3>{card.title}</h3>
      <p>{card.age}</p>
      </div>
      </>
    
  )
}