import React from 'react';
import './Navigation.css';

const Navigation = ({ 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  currentIndex, 
  totalItems 
}) => {
  return (
    <div className="navigation">
      <div className="nav-content">
        <button 
          className={`nav-button prev ${!hasPrevious ? 'disabled' : ''}`}
          onClick={onPrevious}
          disabled={!hasPrevious}
        >
          ← Previous
        </button>
        
        <div className="progress-info">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {currentIndex + 1} of {totalItems}
          </span>
        </div>
        
        <button 
          className={`nav-button next ${!hasNext ? 'disabled' : ''}`}
          onClick={onNext}
          disabled={!hasNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Navigation;
