import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { RecoveryPasswordSendEmail } from "../containers/RecoveryPasswordSendEmail";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const App = () => {
  return (
    // Agregar soporte para navegación entre rutas
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route
            path="/recovery-password-send-email"
            element={<RecoveryPasswordSendEmail />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
