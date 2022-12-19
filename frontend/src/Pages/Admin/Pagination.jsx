import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";



export default function Paginations({ totalUser, styles, getALlUser }) {
    const [active, setActive] = useState(1);

    const handleClick = (number) => {
      
        getALlUser(number)
        console.log(number);
        setActive(number)
    }


    useEffect(() => {
        
    },[active])
  
  let items = [];
  for (let number = 1; number <= Math.ceil(+totalUser/5); number++) {
    items.push(
      <Pagination.Item onClick={()=>handleClick(+number)} key={number} disable={number===active} active={number === active}>
        {number}
      </Pagination.Item>
    );
    console.log("kkk");
  }
  return (
    <div>
      <Pagination className={styles.pagination2}>{items}</Pagination>
      <br />

      {/* <Pagination size="lg">{items}</Pagination>
      <br />

      <Pagination size="sm">{items}</Pagination> */}
    </div>
  );
}
 

