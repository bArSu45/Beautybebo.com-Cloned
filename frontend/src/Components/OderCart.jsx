import { useEffect } from "react";
import { useState } from "react";

export default function OderCart({ data }) {
  console.log(data);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    let x = "";
    for (let i = 0; i < 10; i++) {
      x += data.updatedAt[i];
    }
    setDate(x);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "ghostwhite",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          color: "green",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          padding: "12px",
          marginBottom: "15px",
          cursor: "ponter",
              }}
              onClick={handleClick}
      >
        <p style={{ fontSize: "25px" }} >
          {show ? "-" : "+"}
        </p>
        <p>Product Order Successfully on {date} </p>
      </div>
      {show && (
        <div>
          <p> Total Products: {data.products.length} </p>
          <p> Amount: Rs.{data.amount}.00 </p>
          <p>Delivery Time : Between 7 days </p>
        </div>
      )}
    </>
  );
}
