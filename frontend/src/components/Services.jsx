import React from 'react'

// Services Component
const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Crafting responsive, dynamic, and user-focused interfaces using modern frameworks and clean design principles.',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'Building secure, scalable, and efficient server-side architectures with well-structured databases and APIs.',
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Full-Stack Web Development',
      description: 'Delivering end-to-end solutions by seamlessly integrating frontend and backend for high-performing web applications.',
      icon: '🚀'
    },
  ];

  return (
    <div className='bg-black text-white py-12 sm:py-16 md:py-20' id='service'>
      <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          My Services
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto'>
          {services.map(service => (
            <div 
              key={service.id}
              className='bg-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 group border border-gray-700 hover:border-green-400'
            >
              {/* Service Number & Icon */}
              <div className='flex justify-between items-start mb-6'>
                <div className='text-4xl sm:text-5xl'>{service.icon}</div>
                <div className='text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 group-hover:from-green-400 group-hover:to-blue-300 transition-all duration-300'>
                  0{service.id}
                </div>
              </div>
              
              {/* Service Title */}
              <h3 className='text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 group-hover:from-green-300 group-hover:to-blue-400 transition-all duration-300'>
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className='text-gray-300 group-hover:text-gray-200 mb-6 text-sm sm:text-base leading-relaxed'>
                {service.description}
              </p>
              
              {/* Read More Link */}
              <a 
                href="#" 
                className='inline-flex items-center text-green-400 hover:text-blue-500 transition-colors duration-300 font-semibold text-sm sm:text-base'
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Services
