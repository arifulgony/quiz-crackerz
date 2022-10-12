import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import QuizeCart from '../QuizeCart/QuizeCart';
import'./Home.css';
import student from '../../img/student.png'


const Home = () => {
    const quizes = useLoaderData();
    return (
        <>
        <section className="benar-section">
             <div className="container-xl container-md">
                <div className="row">
                    <div className="col-xl-6  col-md-6">
                        <div className='benar-img'>
                             <img src={student} alt="" />
                        </div>
                        </div>
                    <div className="col-xl-6 col-md-6 benar">
                       <div className="benar-details">
                       <h1>Develop your Skills Online with Edum</h1>
                       <p>The online Master of Business Administration program prepares you to tackle challenging situations and drive the success of your organization through intelligent decision-making.</p>
                       <button><a href="#quiz">start now</a></button>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='quiz-section'>
            <div className="container bg-color pt-5">
               
                <Link  name="quiz" className='title'><h1 className='text-light text-center'>Our Tropics</h1></Link>
              <div className="row">
                 
                {
                    quizes?.data.map(quize => <QuizeCart key={quize.id} quize={quize}></QuizeCart> )
                }
              </div>

            </div>

        </section>
     </>
    );
};

export default Home;