import React from 'react'

function OurTechnology() {
    return (
        <div className='flex flex-col items-center justify-center '>
            <section className="grid md:grid-cols-2 gap-5 ">

                <div className="flex flex-col gap-5 items-center">

                    <div className='   gap-5 max-w-150 '>
                        <h1 className='font-bold text-5xl text-gray-200'><span className='text-amber-500'>Technology</span> expertise to meet your needs</h1>
                    </div>

                    <div className='flex flex-col  items-start bg-gray-900 p-10 rounded-4xl gap-5 max-w-150'>


                        <h1 className='font-bold text-gray-200 ml-2'> Backend Development</h1>
                        <div className=" flex flex-wrap gap-5">
                            <p className='bg-gray-200 px-4 py-2 rounded'>HTML</p>
                            <p className='bg-gray-200 px-4 py-2 rounded'> CSS</p>
                            <p className='bg-gray-200 px-4 py-2 rounded'> JavaScript</p>
                            <p className='bg-gray-200 px-4 py-2 rounded'> React JS</p>
                            <p className='bg-gray-200 px-4 py-2 rounded'>Bootstrap</p>
                            <p className='bg-gray-200 px-4 py-2 rounded'>Tailwind Css</p>
                        </div>

                        <div>
                            <a href="#" className='text-gray-200 font-bold ml-2 hover:text-amber-500'>Hire Backend Developer -></a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center gap-4">


                    <div className='flex flex-col  items-start bg-gray-200 p-10 rounded-4xl gap-5 max-w-150'>
                        <h1 className='font-bold text-gray-900 ml-2'> Artificial Intelligence</h1>
                        <div className=" flex flex-wrap gap-5">
                            <p className='bg-gray-600 px-4 py-2 rounded text-gray-200'>Machina Learning</p>
                            <p className='bg-gray-600 px-4 py-2 rounded text-gray-200'> Learning</p>
                            <p className='bg-gray-600 px-4 py-2 rounded text-gray-200'> Learning</p>
                            <p className='bg-gray-600 px-4 py-2 rounded text-gray-200'> Learning</p>
                            <p className='bg-gray-600 px-4 py-2 rounded text-gray-200'>Machina Learning</p>
                            <p className='bg-gray-600 px-4 py-2 rounded text-gray-200'>Machina Learning</p>
                        </div>

                        <div>
                            <a href="#" className='text-gray-900 font-bold ml-2 hover:text-amber-500'>Hire Backend Developer -></a>
                        </div>
                    </div>

                    <div className='flex flex-col  items-start bg-gray-900 p-10 rounded-4xl gap-5 min-w-150'>
                        <h1 className='font-bold text-gray-200 ml-2'> Artificial Intelligence</h1>
                        <div className=" flex flex-wrap gap-5">
                            <p className='bg-gray-200 px-4 py-2 rounded'>Python</p>
                            <p className='bg-gray-200 px-4 py-2 rounded'> Django</p>
                            <p className='bg-gray-200 px-4 py-2 rounded'> NodeJs</p>
                        </div>

                        <div>
                            <a href="#" className='text-gray-200 font-bold ml-2 hover:text-amber-500'>Hire Backend Developer -></a>
                        </div>
                    </div>




                </div>


            </section>
        </div>
    )
}

export default OurTechnology