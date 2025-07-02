import imgSrc from '@/assets/copyIcon.svg';

const CopyIcon = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'copyIcon'} {...props} />
);

export default CopyIcon;
