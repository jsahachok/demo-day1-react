// Workshop V1
// import Hello from "./Hello";

// const Workshop = () => {
//   const callHandler = (message) => {
//     console.log("Call back with " + message);
//   };
//   return (
//     <div>
//       <h2>Workshop component</h2>
//       <Hello initialName="Default name" onCall={callHandler} />
//     </div>
//   );
// };

// export default Workshop;




//Workshop V2
import Hello2 from "./Hello2";

const Workshop = () => {
  
  return (
    <div>
      <h2>Workshop component</h2>
      <Hello2/>
    </div>
  );
};

export default Workshop;