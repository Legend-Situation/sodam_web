import imgSrc from '@/assets/write.svg';

const Write = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'write'} {...props} />
);

export default Write;
