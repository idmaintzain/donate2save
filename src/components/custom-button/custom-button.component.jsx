import './custom-button.styles.css';
const CustomButton = ({children, handleOnClick}) => {
  return(
    <div>
      <button className="custom-button" onClick={handleOnClick}> 
        {children}
        
        </button>
    </div>
  )
}

export default CustomButton;