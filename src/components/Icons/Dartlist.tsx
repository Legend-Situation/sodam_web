import imgSrc from '@/assets/dartlist.svg';

const Dartlist = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'dartlist'} {...props} />
);

export default Dartlist;
