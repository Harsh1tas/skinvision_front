import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
  title={<div style={{ paddingTop: "50px" }}>Schedule Your Appointment | SKINVISION</div>}
  imageUrl={"/signin.png"}
/>

      <AppointmentForm/>
    </>
  );
};

export default Appointment;
