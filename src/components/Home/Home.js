import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeCart from '../QuizeCart/QuizeCart';
import'./Home.css';


const Home = () => {
    const quizes = useLoaderData();
    return (
        <>
        <section className="benar-section">
             <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div>
                      
                        </div>
                        </div>
                    <div className="col-6 benar">
                       <div className="benar-details">
                       <h1>Develop your Skills Online with Edum</h1>
                       <p>The online Master of Business Administration program prepares you to tackle challenging situations and drive the success of your organization through intelligent decision-making.</p>
                       </div>
                    </div>
                </div>
            
            </div>
        </section>
        <section className='quiz-section pt-5'>
            <div className="container">
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