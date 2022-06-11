import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
            <div className="col-span-2">
                <span className="text-dark_blue uppercase text-xl tracking-widest">About</span>
                <h2 className='py-4'>Who I am</h2>
                <p className="py-2 text-gray-600">// I am not your normal <span className="text-dark_blue">Developer</span></p>
                <p className="py-2 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis et consectetur nemo explicabo officia quia minus eligendi sed aperiam rerum. Perferendis possimus neque natus ex!</p>
                <p className="py-2 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis et consectetur nemo explicabo officia quia minus eligendi sed aperiam rerum. Perferendis possimus neque natus ex!</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-lx flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img
                    className='rounded-xl'
                    src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
                    alt='/'
                />
            </div>
        </div>
    </div>
  )
}

export default About