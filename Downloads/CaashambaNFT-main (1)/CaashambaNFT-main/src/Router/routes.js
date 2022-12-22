import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoutes";
import ExplorePage from "../View/Explore/ExplorePage";
import Forgetpassword from "../View/Forgetpassword";
import Home from "../View/Home/Home";
import KYCPage from "../View/kyc/KYCPage";
import Login from "../View/Login";
import ProfilePage from "../View/Profile/ProfilePage";
import Authentication from "../View/Register/Authentication";
import ICOPage from "../View/SingleNft/ICOPage";
import ItemPage from "../View/SingleNft/ItemPage";
import UploadPage from "../View/UploadPage/UploadPage";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<UploadPage />} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /> </ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><ExplorePage /> </ProtectedRoute>} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/kyc-verify" element={<KYCPage />} />
        <Route path="/forget" element={<ProtectedRoute><Forgetpassword /> </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="item/:network/:address/:tokenId" element={<ProtectedRoute><ItemPage /></ProtectedRoute>} />
        <Route path="item/ico/:address/:icoIndex" element={<ProtectedRoute><ICOPage /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
