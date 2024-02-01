// src/components/WineCard.jsx
const WineCard = ({ varietal, description, imageUrl, infoUrl }) => {
    return (
      <div style={{ margin: '1rem', flexBasis: 'calc(33.3333% - 2rem)', textAlign: 'center' }}>
        <img src={imageUrl} alt={varietal} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        <h3>{varietal}</h3>
        <p>{description}</p>
        <a href={infoUrl} target="_blank" rel="noopener noreferrer">
          <button>View More</button>
        </a>
      </div>
    );
  };
  
  export default WineCard;
  