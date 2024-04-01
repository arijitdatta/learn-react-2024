const PicDisplay = ({ name }) => {
  console.log("In Pic display", name);
  return (
    <div>
      <h1>Hello This is a picture displayer, {name}</h1>
    </div>
  );
};

export default PicDisplay;
