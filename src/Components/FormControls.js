import React, { useState, useEffect } from "react";
import Form from "./Form";
import firebaseDb from "../firebase";
import OutputGrid from "./OutputGrid";
import Final from "./Final";

const FormControls = () => {
  const [cashObject, setCashObject] = useState({});

  useEffect(() => {
    firebaseDb.child("cash").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setCashObject({ ...snapshot.val() });
      } else setCashObject({});
    });
  }, []);

  const addOrEdit = (obj) => {
    firebaseDb.child("cash").push(obj, (err) => {
      if (err) console.log(err);
    });
  };

  const deleteHandler = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`cash/${key}`).remove((err) => {
        if (err) console.log(err);
        // else setCurrId("");
      });
    }
  };
  return (
    <div>
      <Form addOrEdit={addOrEdit} />
      <div className="display">
        <Final cashObject={cashObject} />
        <OutputGrid cashObject={cashObject} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};

export default FormControls;
