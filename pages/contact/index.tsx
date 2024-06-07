import React from "react";
import ContextLayout from "../../layouts/ContextLayout";

const Index = () => {
  return (
    <ContextLayout>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row h-full">
          <div className="w-1/3 bg-gray-200">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6115.553614026713!2d-75.17871064986761!3d39.96874255860054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7ceaf352c7b%3A0xc1ad932f69f4d963!2sFairmount%2C%20Philadelphia%2C%20PA%2019130!5e0!3m2!1sen!2sus!4v1717698755194!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-1/3 bg-gray-300">
            {/* Get to know me */}
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/assets/kelsie.jpg"
                alt="Headshot"
                className="w-40 h-40 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold">Kelsie Roberton</h2>
              <p className="text-black-600 p-20">Highly motivated professional with experience in advocating and effectively communicating optimal sustainability strategies. Experienced in project management and competent at fostering relationships with both internal and external stakeholders.
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-gray-400">
            {/* Contact */}
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold">Contact Me</p>
              <p className="text-gray-600">Phone: 630-715-61140</p>
              <p className="text-gray-600">Email: kelsieroberton@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </ContextLayout>
  )
};

export default Index;


// const Index = () => {
//   return (
//     <ContextLayout>
//       <div className="flex flex-col h-screen">
//       <Plant />
//       <div className="flex items-center justify-center absolute inset-0 mt-12 m-20">
//         <div className="bg-white p-4">
//           <h1 className="text-center text-2xl font-bold">Contact!</h1>
//         </div>
//       </div>
//     </div>
//     </ContextLayout>
//   );
// }; <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6115.553614026713!2d-75.17871064986761!3d39.96874255860054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7ceaf352c7b%3A0xc1ad932f69f4d963!2sFairmount%2C%20Philadelphia%2C%20PA%2019130!5e0!3m2!1sen!2sus!4v1717698755194!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>