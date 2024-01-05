import React from 'react'
import { useNavigate } from 'react-router-dom';


 const  Main = () => {

  const navigate = useNavigate();

  const handleTest = () => {
    navigate('/test '); // Navigating to '/test'
    console.log("next"); // This log might not be visible if the page changes immediately
  }

  const handledecs = () => {
    navigate('/decs');
  }

  return (
    <div>
        <section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Learniverse
        {/* <br class="hidden lg:inline-block" />readymade gluten */}
      </h1>
      <p class="mb-8 leading-relaxed">Education is the most powerful weapon which you can use to change the world.</p>
      <div class="flex justify-center">
        <button
        onClick={handleTest} 
        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 
        focus:outline-none hover:bg-indigo-600 rounded text-lg">Find your suitable major</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://firebasestorage.googleapis.com/v0/b/learniversebest.appspot.com/o/Screenshot%20(1).png?alt=media&token=ea372e37-aeeb-4db1-8f52-71e1c0291340 " />
    </div>
  </div>
<div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">Find your Favorite University</h1>
</div>


<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 object-contain">

 
    <div class="w-72 bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl">
            <img
            onClick={handledecs}
            className="w-full h-full object-cover rounded-xl"
            src="https://firebasestorage.googleapis.com/v0/b/learniversebest.appspot.com/o/download%20(1).png?alt=media&token=965c7347-eb1d-49b8-93c4-b2254db2df3a"
            alt="University" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
              
                <p class="text-lg font-bold text-black truncate block capitalize">Paragon International University</p>
                <span class="text-gray-400 mr-3 uppercase text-xs">Bacherlor, PhD, Master</span>
                <div class="flex items-center">
                    {/* <p class="text-lg font-semibold text-black cursor-auto my-3">More info</p> */}
                    {/* <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del> */}
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                        </svg></div>
                </div>
            </div>
    </div>


 
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img 
            onClick={handledecs}
            src="https://firebasestorage.googleapis.com/v0/b/learniversebest.appspot.com/o/download%20(1).jpg?alt=media&token=432887f1-8ca1-4c94-81ed-ff7fddd4a08b"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
             
                <p class="text-lg font-bold text-black truncate block capitalize">Royal University of Phnom Penh</p>
                <span class="text-gray-400 mr-3 uppercase text-xs">Bacherlor, pHD, Master</span>
                <div class="flex items-center">
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                        </svg></div>
                </div>
            </div>
    </div>
  

    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img
            onClick={handledecs} 
            src="https://firebasestorage.googleapis.com/v0/b/learniversebest.appspot.com/o/download%20(2).jpg?alt=media&token=94056946-ae96-4d8f-ad08-bc908ddc4afb"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">American University of Phnom Penh</p>
                <span class="text-gray-400 mr-3 uppercase text-xs">Bacherlor, PhD, Master</span>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                        </svg></div>
                </div>
            </div>
  
   
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img
            onClick={handledecs}
            src="https://firebasestorage.googleapis.com/v0/b/learniversebest.appspot.com/o/download%20(2).png?alt=media&token=37a2d078-6446-4dc9-ab23-619a05579dd1"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">Institute of Technology Cambodia</p>
                <span class="text-gray-400 mr-3 uppercase text-xs">Bacherlor, PhD, Master</span>

                <div class="flex items-center">
                   
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                    
                        </svg></div>
                </div>
            </div>
    </div>
    
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img 
            onClick={handledecs}
            src="https://firebasestorage.googleapis.com/v0/b/learniversebest.appspot.com/o/download%20(3).jpg?alt=media&token=ff26910b-9796-46e3-bc3f-d7e24d7f53e0"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                
                <p class="text-lg font-bold text-black truncate block capitalize">Build Bright University</p>
                <span class="text-gray-400 mr-3 uppercase text-xs">Bacherlor, PhD, Master</span>
                <div class="flex items-center">
                    
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                        </svg></div>
                </div>
            </div>
    </div>
    
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img 
            onClick={handledecs}
            src="https://firebasestorage.googleapis.com/v0/b/learniversebest.appspot.com/o/download%20(3).png?alt=media&token=1e55ff5e-b2c5-416a-adaf-c710056f0607"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
               
                <p class="text-lg font-bold text-black truncate block capitalize">Beltie International University</p>
                <span class="text-gray-400 mr-3 uppercase text-xs">Bachelor, PhD, Master</span>
                <div class="flex items-center">
                   
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">

                        </svg></div>
                </div>
            </div>
    </div>
   
</section>
<section class="text-gray-700 body-font border-t border-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg"> Education is a transformative force that empowers individuals, equipping them with knowledge, skills, and adaptability. It promotes social understanding, inclusivity, and opportunity. This platform serves as a resource where individuals can access the tools and guidance they need to pursue educational opportunities and unlock their full potential. From early childhood to lifelong learning, education shapes individuals and societies, paving the way for a better future.</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h6 class="text-gray-900 font-medium title-font tracking-wider text-sm">LEARNIVERSE</h6>
      {/* <p class="text-gray-500">Senior Product Designer</p> */}
    </div>
  </div>
</section>
<div class="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
    <h2 class="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
    <p class="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share
        with us!
    </p>
    <div class="mb-4">
        <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>
    <div class="mb-4">
        <label for="message" class="text-sm leading-7 text-gray-600">Message</label>
        <textarea id="message" name="message" class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
    </div>
    <button class="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button>
    <p class="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
</div>
    




  
  <footer>
    <div class="bg-gray-800 py-4 text-gray-400">
      <div class="container px-4 mx-auto">
        <div class="-mx-4 flex flex-wrap justify-between">
          <div class="px-4 my-4 w-full xl:w-1/5">
            <a href="/" class="block w-56 mb-10">
              <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(0 -75)">
                    <g transform="translate(0 75)">
                      <rect width="512" height="512" rx="128" fill="#3D5AFE"></rect>
                      <rect x="149" y="176" width="220" height="220" fill="#fff"></rect>
                      <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                      <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                    </g>
                    <text fill="white" font-family="Nunito-Bold, Nunito" font-size="512" font-weight="bold">
                      <tspan x="654" y="518">Learniverse</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </a>
            
          </div>

          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
            </div>
            <ul class="leading-8">
              <li><a href="#" class="hover:text-blue-400">About Us</a></li>
              <li><a href="#" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
              <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          <div class="px-4 my-4 w-full sm:w-auto">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
            </div>
            <ul class="leading-8">
              <li><a href="#" class="hover:text-blue-400">About Us</a></li>
              <li><a href="#" class="hover:text-blue-400">Terms &amp; Conditions</a></li>
              <li><a href="#" class="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          <div class="px-4 my-4 w-full sm:w-auto">
           
           
          </div>
          <div class="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <div>
              <h2 class="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
            </div>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    
  </footer>

  </section>
    </div>
  );
}
export default Main;
