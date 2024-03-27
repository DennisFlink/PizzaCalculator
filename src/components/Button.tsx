import PropTypes from 'prop-types';

const Button=(props:any)=>{
 
  return (
    <button className = {props.className} onClick = {props.onClick} >
      {props.buttonText}

    </button>
  
  );
}
Button.proptypes={
  buttonText: PropTypes.string,
  className: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  
}
export default Button;