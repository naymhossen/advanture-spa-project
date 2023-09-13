/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActor] = useState([]);
  const [selectActors, setSelectActors] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gias-uddin-swe/B8-final-Bpl-team-maker/main/public/data.json"
    )
      .then((res) => res.json())
      .then((data) => setAllActor(data));
  }, []);

  const handaleSelectActor = (actor) => {
    const isPurcheed = selectActors.find((person) => person.id == actor.id);
    if(isPurcheed){
      alert("Alrady Booking it's Actor");
    }else{
      setSelectActors([...selectActors, actor]);
    }
  };
  // console.log(selectActors);

  return (
    <>
      <div className="bg-image bg-cover">
        <div className=" flex w-11/12 mx-auto">
          {/* first section */}
          <div className="w-2/3 grid grid-cols-2 gap-5 pt-5">
            {allActors?.map((actor) => (
              <div
                key={actor.id}
                className="card border border-sky-400 text-white shadow-xl"
              >
                <figure className="px-10 pt-10">
                  <img src={actor.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-3xl animate-pulse font-bold">
                    {actor.name}
                  </h2>

                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="flex items-center gap-8">
                    <h4 className="text-2xl font-semibold">{actor.role}</h4>
                    <h4 className="font-bold">Salary: ${actor.salary}</h4>
                  </div>
                  <div className="card-actions">
                    <button
                      onClick={() => handaleSelectActor(actor)}
                      className="btn btn-primary animate-bounce"
                    >
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2nd section */}

          <div className="w-1/3 ml-4 text-center pt-5">
            <Cart selectActors={selectActors}></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
