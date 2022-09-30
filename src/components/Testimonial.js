import React from "react";

// Imgs
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";

const Testimonial = () => {

const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.user-name')
const role = document.querySelector('.role')
  
const testimonials = [
  {
    name: "Apoorva Sharma",
    place: "Faridabad",
    photo: "https://randomuser.me/api/portraits/women/41.jpg",
    text: "One Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
  },
  {
    name: "Aishwarya Ananthraman",
    place: "Chennai",
    photo: "https://randomuser.me/api/portraits/women/42.jpg",
    text: "Two Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
  },
  {
    name: "Litesh Mehta",
    place: "Australia",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    text: "Three Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
  },
  {
    name: "Shreya Sharma",
    place: "Kolkata",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Four Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the."
  }
  ]
  
  let idx = 1;

  const updateTestimonial = () => {
    const { name, place, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.src = name
    role.src = place

    idx++;

    if (idx > testimonials.length - 1) {
      idx = 0
    } 
  }

  setInterval(updateTestimonial, 10000);

  return (
    <section className="testimonial-container flex flex-col justify-center items-center gap-6">
      <div className="user flex items-center gap-4">
        <article className="flex items-center gap-4">
          <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="avatar" className="user-image w-20 h-20 rounded-full" />
          <div className="user-details">
            <h4 className="user-name font-bold">Ron Weasly</h4>
            <p className="role text-sm">Founder</p>
          </div>
        </article>

        {/* <article className="flex gap-6">
          <img src={instagram} alt="social icons" className="w-12"/>
          <img src={twitter} alt="social icons" className="w-12"/>
        </article> */}
      </div>
      <p className="testimonial text-center">
      Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.Lorem Ipsum has been the industry's Lorem Ipsum has been the.
      </p>
      <div className="progress-bar"></div>
    </section>
  )
};

export default Testimonial;