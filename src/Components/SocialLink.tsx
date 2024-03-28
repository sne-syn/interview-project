type Props = {
  link: any;
  key: never;
};

const SocialLink = ({ link, key }: Props) => {
  return (
    <li key={key}>
      <a href={link.path} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    </li>
  );
};

export default SocialLink;
