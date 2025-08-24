/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, Resources, Toolkit } from "../ui";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/resources" replace />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/toolkit" element={<Toolkit />} />
    </Routes>
  );
};

export default Allroutes;
