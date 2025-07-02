import imgSrc from '@/assets/graynote.svg';

const Graynote = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'graynote'} {...props} />
);

export default Graynote;
