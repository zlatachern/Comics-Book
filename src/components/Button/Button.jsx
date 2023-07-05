import './button.scss';

const Button = ({title}) => (
  <button type='submit' className='button--primary'>
    <p className='button--primary__text'>{title}</p>
  </button>
)

export default Button;