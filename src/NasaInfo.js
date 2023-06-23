const NasaInfo = ({ nasaData }) => {
    return (
      <div>
        <img src={nasaData.hdurl} alt="" className="imag" />
        <span>{nasaData.date}</span>
        <h2>{nasaData.title}</h2>
        <p>{nasaData.explanation}</p>
        <p>{nasaData.copyright}</p>
      </div>
    );
  };
  
  export default NasaInfo;
  
  