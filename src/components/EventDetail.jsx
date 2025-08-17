import React from "react";
import { useParams, Link } from "react-router-dom";
import musicEventImg from "./assets/images/events/music.jpg";
import Cluster2k25Img from "./assets/images/events/Cluster2k25.JPG";
import Elixir2K25Img from "./assets/images/events/Elixir2K25.JPG";
import MBCAsessionImg from "./assets/images/events/Evening-BCA-Session.JPG";
import galleryImg from "./assets/images/events/gallery.jpg";
import EBCAsessionImg from "./assets/images/events/Morning-BCA-Session.JPG";
import IOSnativeImg from "./assets/images/events/ios&native.png";
import talkImg from "./assets/images/events/talk.jpg";
import amruthamahotsavaImg from "./assets/images/events/amruthamahotsava.jpg";
import Spectrum2k24Img from "./assets/images/events/Spectrum2K24.JPG";
import RaniAbbakkaProgramImg from "./assets/images/events/Rani-Abbakka-Program.jpg";
import coldplayImg from "./assets/images/events/coldplay.jpg";
import ragudixitImg from "./assets/images/events/ragudixit.jpg";

// Repeat the same eventList here, or import from a shared file
const eventList = [
  {
    title: "Cluster 2k25.",
    date: "Jul 26, 2025",
    time: "1:00pm-2:30pm",
    desc: "Cluster 2k25.",
    image: Cluster2k25Img,
    type: "Talk",
    location: "A.V Hall",
  },
  {
    title: "An initiative dedicated to honoring & promoting history & legacy of a legendary queen & freedom fighter from Karnataka",
    date: "Aug 3 – Sep 3, 2025",
    time: "1:00pm-3:00pm",
    desc: "Small talk about Rani Abbakka.",
    image: RaniAbbakkaProgramImg,
    type: "History",
    location: "A.V Hall",
  },
  {
    title: "PG session for UG Evening BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "3:00pm-5:30pm",
    desc: "About MSc Computer Science.",
    image: EBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "1:00pm-2:30pm",
    desc: "About MSc Computer Science.",
    image: MBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Aug 13, 2025",
    time: "1:00pm – 2:30pm",
    desc: "About MSc Computer Science.",
    image: galleryImg,
    type: "Session",
    location: "Webinar",
  },
  {
    title: "Elixir 2K25: Chemistry Fest Oraganised by Manglore University",
    date: "Apr 3, 2025",
    time: "9:00am-5:00pm",
    desc: "Manglore University Elixir 2K25",
    image: Elixir2K25Img,
    type: "Fest",
    location: "Manglore University",
  },
  {
    title: "2 day Workshop on Basics of React Native and IOS Application.",
    date: "Apr 14-15, 2025",
    time: "9am – 5pm",
    desc: "Workshop on React Native & IOS App.",
    image: IOSnativeImg,
    type: "Workshop",
    location: "CS Lab",
  },
  {
    title: "Workshop on Hardware Implimentation on Internet of Things.",
    date: "Sep 3, 2025",
    time: "1:00pm-5:00pm",
    desc: "Workshop on IOT.",
    image: talkImg,
    type: "Workshop",
    location: "Gallery West",
  },
  {
    title: "Amrutha Mahotsava: Celebrating 75th year Anniversary of MGM College.",
    date: "Nov 29 - Dec 1, 2024",
    time: "8:30pm",
    desc: "Amrutha Mahotsava.",
    image: amruthamahotsavaImg,
    type: "Screening",
    location: "Field Lawn",
  },
  {
    title: "Spectrum 2k24: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2024",
    time: "5:30pm",
    desc: "Spectrum 2k24.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k23: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2023",
    time: "5:30pm",
    desc: "Spectrum 2k23.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k22: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2022",
    time: "5:30pm",
    desc: "Spectrum 2k22.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k21: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2021",
    time: "5:30pm",
    desc: "Spectrum 2k21.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k20: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2020",
    time: "5:30pm",
    desc: "Spectrum 2k20.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k19: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2019",
    time: "5:30pm",
    desc: "Spectrum 2k19.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k18: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2018",
    time: "5:30pm",
    desc: "Spectrum 2k18.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k17: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2017",
    time: "5:30pm",
    desc: "Spectrum 2k17.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k16: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2016",
    time: "5:30pm",
    desc: "Spectrum 2k16.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
];

// Helper slugify to match routes
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

const EventDetail = () => {
  const { slug } = useParams();

  const event = eventList.find((ev) => slugify(ev.title) === slug);

  if (!event) {
    return (
      <div className="p-6 font-sans">
        <h2 className="text-2xl font-semibold mb-4">Event not found</h2>
        <Link
          to="/event-calendar"
          className="text-indigo-700 font-bold hover:underline"
        >
          &larr; Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 px-4 font-sans">
      <Link
        to="/event-calendar"
        className="inline-block mb-5 text-indigo-900 font-bold hover:underline"
      >
        &larr; Back to Events
      </Link>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <span className="inline-block text-purple-700 font-semibold text-lg mb-2">
        {event.type}
      </span>
      <div className="text-gray-700 mb-4 text-lg flex gap-6">
        <span>{event.date}</span>
        <span>{event.time}</span>
      </div>
      <h1 className="text-3xl font-extrabold text-indigo-900 mb-6">
        {event.title}
      </h1>
      <p className="text-gray-800 text-lg leading-relaxed mb-8">{event.desc}</p>
      <div className="flex items-center gap-6 text-indigo-900 text-lg font-medium">
        <span className="bg-purple-100 text-purple-700 rounded-full px-5 py-2">
          {event.location}
        </span>
        <span>{event.time}</span>
      </div>
    </div>
  );
};

export default EventDetail;
