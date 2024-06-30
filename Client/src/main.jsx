import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import VideoListPage from "./pages/VideoListPage.jsx";
import VideoDetailsPage from "./pages/VideoDetailsPage.jsx";
import ChannelEmptyPage from "./pages/ChannelEmptyPage.jsx";
import ChannelVideoListPage from "./pages/ChannelVideoListPage.jsx";
import ChannelEmptyPlaylist from "./pages/ChannelEmptyPlaylist.jsx";
import ChannelPlaylistPage from "./pages/ChannelPlaylistPage.jsx";
import ChannelPlaylistVideoPage from "./pages/ChannelPlaylistVideoPage.jsx";
import ChannelEmptyTweet from "./pages/ChannelEmptyTweet.jsx";
import ChannelTweetPage from "./pages/ChannelTweetPage.jsx";
import ChannelEmptySubscriber from "./pages/ChannelEmptySubscriber.jsx";
import ChannelSubscriberPage from "./pages/ChannelSubscriberPage.jsx";
import Login from "./pages/login/Login.jsx";
import MyChannelEmptyPage from "./pages/MyChannelEmptyPage.jsx";
import UploadVideoModal from "./pages/UploadVideoModal.jsx";
import MyChannelEmptyTweet from "./pages/MyChannelEmptyTweet.jsx";
import MyChannelTweets from "./pages/MyChannelTweets.jsx";
import EditPersonalInfo from "./pages/EditPersonalInfo.jsx";
import EditChannelInfo from "./pages/EditChannelInfo.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import EditVideoModal from "./pages/EditVideoModal.jsx";
import DeleteVideoModal from "./pages/DeleteVideoModal.jsx";
import Privacy from "./pages/Privacy.jsx";
import TermsAndCondition from "./pages/TermsAndCondition.jsx";
import VideoListingPageByList from "./pages/VideoListingPageByList.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="videoList-page-by-card" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="" element={<Register />} />
      <Route
        path="videoList-page-by-list"
        element={<VideoListingPageByList />}
      />
      <Route path="video-details/:id" element={<VideoDetailsPage />} />
      <Route path="channel-empty-page" element={<ChannelEmptyPage />} />
      <Route
        path="channel-video-list-page"
        element={<ChannelVideoListPage />}
      />
      <Route
        path="channel-empty-playlist-page"
        element={<ChannelEmptyPlaylist />}
      />
      <Route path="channel-playlist-page" element={<ChannelPlaylistPage />} />
      <Route
        path="channel-playlist-video-page"
        element={<ChannelPlaylistVideoPage />}
      />
      <Route path="channel-empty-tweet-page" element={<ChannelEmptyTweet />} />
      <Route path="channel-tweet-page" element={<ChannelTweetPage />} />
      <Route
        path="channel-empty-subscriber-page"
        element={<ChannelEmptySubscriber />}
      />
      <Route
        path="channel-subscriber-page"
        element={<ChannelSubscriberPage />}
      />
      <Route path="login" element={<Login />} />
      <Route path="My-channel-empty-page" element={<MyChannelEmptyPage />} />
      <Route path="uplaod-video" element={<UploadVideoModal />} />
      <Route path="my-channel-empty-tweet" element={<MyChannelEmptyTweet />} />
      <Route path="my-channel-tweets" element={<MyChannelTweets />} />
      <Route path="edit-personal-info" element={<EditPersonalInfo />} />
      <Route path="edit-channel-info" element={<EditChannelInfo />} />
      <Route path="change-password" element={<ChangePassword />} />
      <Route path="admin" element={<Admin />} />
      <Route path="edit-video-modal" element={<EditVideoModal />} />
      <Route path="delete-video-modal" element={<DeleteVideoModal />} />
      <Route path="privacy-policy" element={<Privacy />} />
      <Route path="terms-condition" element={<TermsAndCondition />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
