import PropTypes from 'prop-types';

const Button=(props:any)=>{
 
  return (
    <button className = {props.className} onClick = {props.onClick}>
      {props.buttonText}

    </button>
  
  );
}
Button.proptypes={
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onclick: PropTypes.func.isRequired


}
export default Button;