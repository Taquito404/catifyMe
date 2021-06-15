import React, { useEffect, useState } from "react";
import { getPost } from "../services";

export default function Prueba() {
  const [data, setData] = useState({});

  useEffect(() => {
    const request = async () => {
      const json = await getPost();
      setData(json);
    };
    request();
  }, []);

  const imgUrl = `https://cataas.com/${data.url}`;
  return (
    <React.Fragment>
      <div>
        <h1>b</h1>
        <button
          onClick={() => {
            const request = async () => {
              const json = await getPost();
              setData(json);
            };
            request();
          }}
        >
          Reroll
        </button>
        <img className={``} src={imgUrl} alt={""} />
      </div>
    </React.Fragment>
  );
}
