import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../view/HomePage";
import ExplorePage from "../view/ExplorePage";
import CreatePage from "../view/CreatePage";
import NFTPage from "../view/NFT/NFTPage";
import Profile from "../view/Profile/Profile";
import About from "../view/About/About";
import LoginPage from "../view/Login/LoginPage";
import RegisterPage from "../view/Register/Register";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/nft/nftpage" element={<NFTPage/>} />
          <Route path= "/profile" element={<Profile/>}/>
          <Route path= "/about" element={<About/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </div>
  );
};

export default Routing;
