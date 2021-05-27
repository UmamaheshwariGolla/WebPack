// const View2 = () => {
//     return ( <h1>dsf</h1> );
// }
 
// export default View2; 
const ViewTwo = ({onClick}) => (
    <div>
    View 2 <br />
    <button onClick={() => onClick("view1")}>Go to view 1</button>
  </div>
);