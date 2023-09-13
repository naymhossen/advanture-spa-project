/* eslint-disable react/prop-types */

const Cart = ({ selectActors, cost, remaining }) => {
  // console.log(selectActors);
  return (
    <div>
      <h2 className="text-5xl underline text-white animate-bounce font-bold">
        Total Actors: {selectActors.length}
      </h2>
      <div className="text-3xl text-violet-200 font-bold border border-red-300 space-y-7 mt-5">
      <h4>Remaining Blance: ${remaining}</h4>
      <h4>Total Cost: ${cost}</h4>
      </div>
      {
        selectActors.map((actors) => (
            <li key={actors.id} className="text-red-600 font-semibold text-2xl">{actors.name}</li>
        ))
      }
    </div>
  );
};

export default Cart;
