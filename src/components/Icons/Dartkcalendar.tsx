import imgSrc from '@/assets/dartkcalendar.svg';

const Dartkcalendar = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'dartkcalendar'} {...props} />
);

export default Dartkcalendar;
