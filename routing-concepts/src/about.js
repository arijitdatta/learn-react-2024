import { Link, useParams } from 'react-router-dom';

const About = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>About the person</h1>
      <h3>{name} is a great person</h3>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
};

export default About;
