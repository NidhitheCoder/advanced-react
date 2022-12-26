import React, { useState } from "react";
// import { useEffect } from "react";

const About = () => {
  // const [sum, setSum] = useState(0);
  const [price, setPrice] = useState(0);

  // bad way
  // useEffect(() => {
  //   const total = sum + price;
  //   setSum(total);
  //   // eslint-disable-next-line
  // }, [price]);

  const changePrice = () => {
    setPrice(price + 5);
  };


  return (
    <div>
      <p>About page</p>
      <p>{price}</p>
      {/* <p>{sum}</p> */}
      <div>
        <p className="pl-2 py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          repellat voluptatum rerum asperiores! Modi cumque minima quaerat
          aperiam molestiae recusandae accusantium fugiat a, doloremque delectus
          porro eveniet inventore quae autem.
        </p>
        <a href="/">Back to home</a>
        <p className="w-full px-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
          architecto laudantium iure. Nesciunt placeat iste repudiandae
          reprehenderit ratione, vero dolorum rem delectus voluptate hic officia
          fugit commodi, magni libero.
        </p>
      </div>
      <button type="submit" onClick={changePrice}>
        Add Price
      </button>
    </div>
  );
};

export default About;
