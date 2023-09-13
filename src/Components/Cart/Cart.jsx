/* eslint-disable react/prop-types */

const Cart = ({ selectActors }) => {
  // console.log(selectActors);
  return (
    <div>
      <h2 className="text-4xl underline text-white animate-bounce font-bold">
        Total Actors: {selectActors.length}
      </h2>
      {
        selectActors.map((actors) => (
            <li key={actors.id} className="text-red-600 font-semibold text-2xl">{actors.name}</li>
        ))
      }
    </div>
  );
};

export default Cart;
