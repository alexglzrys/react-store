import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Login } from "../pages/Login";
import { MyAccount } from "../pages/MyAccount";

import { SendEmail } from "../pages/SendEmail";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { CreateAccount } from "../pages/CreateAccount";
import { NewPassword } from "../pages/NewPassword";
import { Orders } from "../pages/Orders";
import { Checkout } from "../pages/Checkout";
import { PasswordRecovery } from "../pages/PasswordRecovery";

export const App = () => {
  return (
    // Agregar soporte para navegación entre rutas
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
