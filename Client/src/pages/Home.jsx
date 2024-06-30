import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Home() {
  const [videos, setVideos] = useState([]);
 

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://youtubeapp-ug12.onrender.com/api/v1/videos/');
      setVideos(response.data.videos);
      console.log('Fetched videos:', response.data.videos);
    } catch (error) {
      console.error('Error fetching videos:', error.message);
      toast.error(' Please try again later.');

    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">

          <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
              {Array.isArray(videos) && videos.length > 0 ? (
                videos.map((video) => (
                  <div className="w-full" key={video._id}>
                    <div className="relative mb-2 w-full pt-[56%]">
                      <div className="absolute inset-0">
                        <iframe allowFullScreen className="w-full h-full" src={video.videoFile}></iframe>
                      </div>
                      <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">{video.duration}</span>
                    </div>
                    <div className="flex gap-x-2">
                      <div className="h-10 w-10 shrink-0">
                        <img src={video.thumbnail} alt="codemaster" className="h-full w-full rounded-full" />
                      </div>
                      <div className="w-full">
                        <h6 className="mb-1 font-semibold">{video.title}</h6>
                        <p className="flex text-sm text-gray-200">{video.views} Views · 44 minutes ago</p>
                        <p className="text-sm text-gray-200">{video.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400">No videos available</div>
              )}
            </div>
          </section>
        </div >
      </div >
    </>
  );
}
