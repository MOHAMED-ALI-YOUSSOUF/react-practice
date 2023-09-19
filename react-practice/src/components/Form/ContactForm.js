import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: 'maki',
    email: 'wizzi',
    message: 'hello',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données du formulaire au serveur ou effectuez une action souhaitée ici
    console.log(formData);
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Message :</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
