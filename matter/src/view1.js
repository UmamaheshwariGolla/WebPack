// const View1 = () => {
//     return ( <h1>dsf</h1> );
// }
 
// export default View1;
 import React from 'react';


const ViewOne = ({onClick}) => (
    <div>
      View 2 <br />
      <button onClick={() => onClick("view1")}>Go to view 1</button>
    </div>
  );

  export default ViewOne;