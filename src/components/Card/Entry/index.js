const Entry = ({ name, value }) => {
  return (
    <div className="Entry">
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};

export default Entry;
