import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/properties/${id}/`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!property) return <p>Loading...</p>;

 return (
  <div>
    <h1>{property.title}</h1>
    <p><strong>Location:</strong> {property.location}</p>
    <p><strong>Price:</strong> Ksh {property.price}</p>
    <p>{property.description}</p>

    <h3>Images</h3>

    <div>
      {property.images && property.images.map((img) => (
        <img
          key={img.id}
          src={img.image}
          alt="property"
          width="300"
          style={{ margin: "10px" }}
        />
      ))}
    </div>
  </div>
);
}

export default PropertyDetail;