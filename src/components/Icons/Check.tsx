import imgSrc from '@/assets/check.svg';

const Check = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'check'} {...props} />
);

export default Check;
