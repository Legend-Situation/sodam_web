import imgSrc from '@/assets/dartprofile.svg';

const Dartprofile = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'dartprofile'} {...props} />
);

export default Dartprofile;
