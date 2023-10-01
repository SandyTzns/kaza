import '../styles/Ratings.css'

export const Ratings = ({ data }) => {
  const starsArray = [1, 2, 3, 4, 5]

  return (
    <div className="stars">
      {starsArray.map((element) => {
        const nbOfStars = parseInt(data[0].rating)
        return (
          <span
            key={'star-' + element}
            className={element <= nbOfStars ? 'span1' : 'span2'}
          >
            ★
          </span>
        )
      })}
    </div>
  )
}
