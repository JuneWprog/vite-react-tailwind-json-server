// children is a special prop that is used to display whatever you include between the opening and closing tags when invoking a component.
const Card = ({ children, bg = 'bg-gray-100' }) => {
    return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
  };
  export default Card;