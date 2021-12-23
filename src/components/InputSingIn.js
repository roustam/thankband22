import '../styles/InputSignIn.css'

const InputSignIn= (props) => {
  if (props.password && props.password === true) {
    return (
    <input className='InputSignIn' type="password" placeholder={props.placeholder}/>)
  } else {
    return (
    <input className='InputSignIn' type="text" placeholder={props.placeholder}/>)
  }
}

export default InputSignIn