import React from "react";
import "./style.scss";
import Header from "../../components/header/Header";
import NewSubForm from "./new-subscriber-form/NewSubForm";
import Call from "../../components/call/Call";

function NewSubscriber() {
  return (
    <div>
      <Header />
      <div className='new-subscriber-call d_flex j_content_between'>
        <NewSubForm />
        <Call />
      </div>
    </div>
  );
}

export default NewSubscriber;
