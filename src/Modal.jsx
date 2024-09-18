import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ content, isOpen, onClose }) {
    // Close the modal if the user clicks outside the modal content
    useEffect(() => {
      if (isOpen) {
        const handleClickOutside = (event) => {
          if (event.target.classList.contains('modal-overlay')) {
            onClose(); // Close modal if clicked outside the content
          }
        };
  
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
      }
    }, [isOpen, onClose]);
  
    if (!isOpen) return null; // Render nothing if modal is not open

    
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>X</button>
          <div className="modal-body">
            {content} 
          </div>
        </div>
      </div>
    );
  }

  
export default Modal;