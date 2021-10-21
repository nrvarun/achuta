type Paragraph = {
  content: string;
  classes?: string;
  style?: React.CSSProperties;
};

const Paragraph = ({ content, classes, style }: Paragraph) => {
  return (
    <p
      className={`text-md md:text-xl text-black sf-medium ${
        classes ? classes : ""
      }`}
      style={style}
    >
      {content}
    </p>
  );
};

export default Paragraph;
