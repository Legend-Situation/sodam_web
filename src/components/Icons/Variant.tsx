import imgSrc from '@/assets/variant.svg';

const Variant = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'variant'} {...props} />
);

export default Variant;
