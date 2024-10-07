import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import Modal from '../Modals/Modal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div>
      <div id='services' className="services">
        <div className="services-title">
          <h1>My Services</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
          {Services_Data.map((service, index) => (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              {/* Display truncated or full description based on service */}
              <p>
                {service.s_no === "01" ? service.s_desc : service.s_desc.substring(0, 50) + "..."}
              </p>
              <div className="services-read-more" onClick={() => handleReadMore(service)}>
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Read More */}
      <Modal show={showModal} onClose={handleCloseModal} service={selectedService} />
    </div>
  );
};

export default Services;
