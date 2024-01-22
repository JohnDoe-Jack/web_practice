import { useNavigate, useSearchParams } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = () => {
    alert('この後、Contactページにリダイレクトします。');
    navigate('/contact');
  };
  return (
    <div>
      <h1>About</h1>
      <p>{searchParams.get('id')}</p>
      <button onClick={redirect}>Click</button>
    </div>
  );
};

export default About;
