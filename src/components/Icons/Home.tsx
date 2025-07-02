import imgSrc from '@/assets/home.svg';

const Home = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'home'} {...props} />
);

export default Home;
