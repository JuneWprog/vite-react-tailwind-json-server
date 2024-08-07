import GridLoader from 'react-spinners/GridLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <GridLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={30}
    />
  );
};
export default Spinner;