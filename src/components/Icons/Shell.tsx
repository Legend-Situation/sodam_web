import imgSrc from '@/assets/shell.svg';

const Shell = (props: any) => (
  <img src={imgSrc} alt={props.alt ?? 'shell'} {...props} />
);

export default Shell;
