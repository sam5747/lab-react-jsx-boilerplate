import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const images = imageData();
  const photos = images.map(image => (
    <div key={image.id} className="image-item">
    <img key={image.id} src={image.img} alt={`Image ${image.id}`} />
    </div>
  ));

  return (
    <div className="gallery">
      <h1>Kalvium Gallery</h1>
      <div className="image-container">
        {photos}
      </div>
    </div>
  );
}

export default App;
