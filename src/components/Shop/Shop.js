import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import "./Shop.css";
import { useState } from "react";
import MessageSuccess from "../MessageSucsess/MessageSuccess";
import { CartContext } from "../Context/CartContext";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

//Formik & Yup
import * as yup from "yup";
import { Formik } from "formik";

const yupSchema = yup
  .object()
  .shape({
    nombre: yup
      .string()
      .min(3, "Es necesario un minimo de 3 caracteres")
      .required("El campo es requerido"),
    telefono: yup
      .number()
      .min(3, "Es necesario un minimo de 3 caracteres")
      .required("El campo es requerido"),
    email: yup
      .string()
      .email("Debe ingresar un caracter valido, ejemplo test@test.com")
      .required("El campo es requerido"),
    emailRepeat: yup
      .string()
      .oneOf([yup.ref("email"), null], "Los email no coinciden")
      .required("El campo es requerido"),
  })
  .required();

const Shop = () => {
  const { getTotal, items } = useContext(CartContext);

  const purchaseOrder = {
    items: items.map((game) => ({
      title: game.title,
      price: game.price,
    })),

    total: getTotal(),
  };

  const [valuesOrder, SetValuesOrder] = useState(purchaseOrder);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    SetValuesOrder({ ...valuesOrder, [name]: value });
  };

  const onSubmit = async (values, resetForm) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    // SetValues(purchaseOrder);
    console.log(values);

  };

  return (
    <div>
      <h3 className="titleForm">
        Por favor, complete el formulario para finalizar la compra
      </h3>

      <Formik
        initialValues={{ nombre: "", telefono: "", email: "", emailRepeat: "" }}
        onSubmit={(values, { resetForm }) => {
          const purchaseOrder = {
            buyer: {
              nombre: values.nombre,
              telefono: values.telefono,
              email: values.email,
            },
            items: items.map((game) => ({
              title: game.title,
              price: game.price,
            })),
            date: new Date(),
            total: getTotal(),
          };
          resetForm();
          onSubmit(purchaseOrder);
        }}
        onChange={handleOnChange}
        validationSchema={yupSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              placeholder="Ingrese un Nombre"
              style={{ margin: 10, width: 400 }}
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.nombre && touched.nombre && errors.nombre}

            <TextField
              placeholder="Ingrese un Telefono"
              type="number"
              style={{ margin: 10, width: 400 }}
              name="telefono"
              value={values.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.telefono && touched.telefono && errors.telefono}

            <TextField
              placeholder="Ingrese un Email"
              style={{ margin: 10, width: 400 }}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && errors.email}

            <TextField
              placeholder="Confirme el Email"
              style={{ margin: 10, width: 400 }}
              name="emailRepeat"
              value={values.emailRepeat}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.emailRepeat && touched.emailRepeat && errors.emailRepeat}

            <Button
              variant="contained"
              type="submit"
              sx={{ width: "400px", height: "54px" }}
              disabled={!(isValid && dirty)}
            >
              Finalizar
            </Button>
          </form>
        )}
      </Formik>

      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default Shop;
