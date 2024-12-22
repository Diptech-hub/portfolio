import React from "react";
import "../style/map.css";

const EmbeddedMap: React.FC = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317149.64467062466!2d3.1777140460405363!3d6.524379272302702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93c6b5b1b219%3A0x681aa99e11e98168!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1689999999999!5m2!1sen!2sng`;

  return (
    <div className="map-container">
      <h2 className="map-title">Based in Lagos, Nigeria</h2>
      <iframe
        src={mapSrc}
        className="map-frame"
        allowFullScreen
        loading="lazy"
        title="Lagos Map"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
