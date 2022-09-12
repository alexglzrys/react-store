import React from "react";
import { Layout } from "../containers/Layout";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { RecoveryPasswordSendEmail } from "../containers/RecoveryPasswordSendEmail";

export const App = () => {
  return (
    <Layout>
      <RecoveryPassword />
      <RecoveryPasswordSendEmail />
    </Layout>
  );
};
