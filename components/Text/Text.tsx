type Paragraph = {
  content: string;
  classes?: string;
};

const Paragraph = ({ content, classes }: Paragraph) => {
  return (
    <p
      className={`text-md md:text-xl text-black sf-medium ${
        classes ? classes : ""
      }`}
    >
      {content}
    </p>
  );
};

export default Paragraph;
