/* frontend/src/styles/PhotoDetailsModal.scss */

.photo-details-modal {
  /* Add your modal styles here */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1000;
}

.photo-details-modal__close-button {
  /* Add your close button styles here */
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}

.photo-details-modal__close-button img {
  width: 20px; /* Adjust the size as needed */
  height: 20px; /* Adjust the size as needed */
}

/* Add any additional styling for your modal content here */
