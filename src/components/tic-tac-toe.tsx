import { useParams } from 'react-router-dom';

const Works = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Works</h1>
      <p>{id}</p>
    </div>
  );
};

export default Works;
