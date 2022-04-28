import Hello from "./Hello";

const Workshop = () => {
  const callHandler = (message) => {
    console.log("Call back with " + message);
  };
  return (
    <div>
      <h2>Workshop component</h2>
      <Hello initialName="Default name" onCall={callHandler} />
    </div>
  );
};

export default Workshop;
