import {Link} from 'react-router-dom';
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa';

function Home() {
    return (
        <>
            <section className='heading'>
                <h1 className='header-title'>Mind's i</h1>
                <p>A better way to make recurring decisions</p>
            </section>
            <div class="home">
                <Link to='/new-ticket' className='btn btn-reverse btn-block btn-prominent'>
                    New decision.
                </Link>

                <Link to='/tickets' className='btn btn-reverse btn-block btn-secondary'>
                    My decisions
                </Link>

            </div>

            <p>Dont have an account?
                <Link style={{color: "blue"}} to='/register'> click here to register.</Link></p>
        </>
    )
}

export default Home