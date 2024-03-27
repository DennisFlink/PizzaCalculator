import { ComponentPropsWithoutRef } from "react"

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  label: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick, ...props }) => {
  
  return (
     <button onClick={onClick} {...props}>
        {label}
     </button>
  )
}


export default Button;