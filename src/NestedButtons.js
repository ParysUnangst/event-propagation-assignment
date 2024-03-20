import React from 'react';

const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('Outer button clicked!');
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); // This stops the event from propagating to the outer button

    alert('Inner button clicked!');
  };

  return (
    <div>
      <button onClick={handleOuterClick}>
        Outer Button
        <div style={{ display: 'inline-block' }}> {/* Wrapper to make it valid HTML */}
          <button onClick={handleInnerClick} style={{ margin: '10px' }}>
            Inner Button
          </button>
        </div>
      </button>
    </div>
  );
};

export default NestedButtons;

