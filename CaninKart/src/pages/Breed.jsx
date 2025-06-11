import React, { useEffect } from "react";
import lab1 from '../assets/dogb1.png'; // Ensure the image exists at this path

const dogs = [
  {
    number: "01",
    breed: "Labrador",
    image: lab1,
    description: `Labradors are some of the most popular dogs around the world. Labradors are known for their loving and friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and for companionship. Labradors are incredibly intelligent, making them great for training and teaching tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double coat which sheds seasonally. Labrador is also one of the most popular breeds in India.`,
  },
  {
    number: "02",
    breed: "German Shepherd",
    image: lab1,
    description: `German Shepherds are known for their courage, confidence, and intelligence. Originally bred for herding, they are now widely used in police and military roles. They are very loyal and protective of their families, making them excellent guard dogs.`,
  },
  {
    number: "03",
    breed: "Golden Retriever",
    image: lab1,
    description: `Golden Retrievers are friendly, intelligent, and devoted dogs. They are extremely social and love to be around people. These dogs are also excellent swimmers and are often used in search and rescue operations.`,
  },
  {
    number: "04",
    breed: "Beagle",
    image: lab1,
    description: `Beagles are small hounds known for their keen sense of smell and tracking instincts. They are playful, curious, and great with children, making them ideal family pets. Beagles are vocal and love outdoor activities.`,
  },
  {
    number: "05",
    breed: "Pug",
    image: lab1,
    description: `Pugs are small dogs with a big personality. Known for their wrinkled face and curled tail, they are playful, affectionate, and charming. Pugs thrive on human companionship and adapt well to apartment living.`,
  },
  {
    number: "06",
    breed: "Rottweiler",
    image: lab1,
    description: `Rottweilers are strong and protective dogs. They are confident, calm, and very loyal. With proper training and socialization, they can be excellent family pets as well as reliable working dogs.`,
  },
  {
    number: "07",
    breed: "Doberman",
    image: lab1,
    description: `Dobermans are known for their sleek coat, athletic build, and loyalty. They are very intelligent, making them easy to train. Dobermans are often used in security roles and are very protective of their owners.`,
  },
  {
    number: "08",
    breed: "Shih Tzu",
    image: lab1,
    description: `Shih Tzus are small, affectionate, and friendly lap dogs. Originally bred for royalty, they have a luxurious coat and a sweet personality. Shih Tzus are great for families and are especially good with kids.`,
  },
  {
    number: "09",
    breed: "Boxer",
    image: lab1,
    description: `Boxers are energetic, playful, and loyal dogs. They are known for their boundless energy and strong protective instincts. Boxers are great with children and make excellent guard dogs when properly trained.`,
  },
  {
    number: "10",
    breed: "Dalmatian",
    image: lab1,
    description: `Dalmatians are easily recognizable by their spotted coat. They are energetic, outgoing, and great for active families. Historically used as carriage dogs, Dalmatians require regular exercise and love being around people.`,
  },
  {
    number: "11",
    breed: "Indian Pariah Dog",
    image: lab1,
    description: `The Indian Pariah Dog is an indigenous breed known for its resilience, intelligence, and loyalty. They are extremely adaptable, low maintenance, and have been companions to humans for thousands of years.`,
  },
];

const DogSection = ({ number, image, description, reverse , bread }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center md:items-start lg:gap-20 gap-4 p-4`}>
    {/* Image Section */}
    <div className="w-full md:w-1/3">
      <img src={image} alt="Labrador" className="w-full h-auto object-cover rounded-xl shadow-md" />
    </div>

    {/* Text Section */}
    <div className=" flex flex-col md:flex-row gap-4 md:gap-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#CDDCEA] ">{number}</h1>
      <div className="space-y-4 px-4 border-l-2 border-[#CDDCEA]">
        <h2 className="text-2xl md:text-4xl font-[Fredoka One] text-black ">{bread}</h2>
        <p className="font-[Poppins] text-black leading-relaxed whitespace-pre-line text-sm md:text-base max-w-lg">
          {description}
        </p>
      </div>
    </div>
  </div>
);




function App() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="bg-[#f9f5f3] text-gray-800 font-sans px-4 py-10 mt-16">
      <h2 className="text-center text-orange-500 text-sm font-semibold mb-10">
        🐾 KNOW ABOUT DOG BREEDS
      </h2>
      <div className="max-w-7xl mx-auto space-y-14">
        {dogs.map((dog, idx) => (
          <DogSection
            key={idx}
            number={dog.number}
            image={dog.image}
            description={dog.description}
            bread={dog.bread}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
