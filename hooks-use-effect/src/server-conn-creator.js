import { useEffect } from "react";

const ServerConnCreator = () => {
  console.log("2");
  useEffect(() => {
    console.log("3");
    window.alert("Connection to Server Created");
  });
  console.log("4");

  return (
    <div>
      <h1> I am a server Connection Creator</h1>
    </div>
  );
};

export default ServerConnCreator;
