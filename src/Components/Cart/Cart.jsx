/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
const Cart = ({selectedActors,remain,totalcost}) => {
   
    return (
        <div>
            <h1 className="text-4xl text-white text-center font-bold">Remain balance : {remain}</h1>
            <h1 className="text-4xl text-white text-center font-bold">Total Cost : {totalcost}</h1>
            <h1 className="text-4xl text-white text-center font-bold">Total Actors : {selectedActors.length} </h1>
            {
                selectedActors.map((actor,idx)=>(
                    <ol key={idx}>
                        <li className="ml-4 text-2xl font-semibold"> {idx+1}. {actor.name}</li>

                    </ol>
                    ))
            }       
        </div>
    );
};

export default Cart;