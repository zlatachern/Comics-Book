import './container.scss';

const Container = (props) => {
  console.log('props :>> ', props.children);
  return (
    <div className="container">
      {props.children}
    </div>
  )

}

export default Container;