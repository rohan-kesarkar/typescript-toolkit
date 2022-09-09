import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [reservationInput, setReservationInput] = useState("")

const reservation = useSelector((state: RootState)=>state.reservations.value)

const customers = useSelector((state: RootState)=>state.customer.value)

const dispatch = useDispatch()

const handleAddReservation = ()=>{
  if(!reservationInput) return;
  dispatch(addReservation(reservationInput))
  setReservationInput("")
}

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index)=>{
                return(
                  <div>
                    <ReservationCard name={name} index={index}/>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input  value={reservationInput}  onChange={(e)=> setReservationInput(e.target.value)}/>
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer =>{
            return<div> <CustomerCard id={customer.id} name={customer.name} food={customer.food} /> </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
