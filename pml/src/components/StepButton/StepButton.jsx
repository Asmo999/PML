const StepButton = ({ direction, handleClick }) => (
    <button onClick={() => handleClick(direction)}>
      {direction === 'next' ? 'Arrow-Circle-Right' : 'Arrow-Circle-Left'}
    </button>
  );
  
  export default StepButton;
  