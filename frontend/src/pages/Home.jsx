import {Link} from 'react-router-dom';
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa';

function Home() {
    return (
        <>
            <section className='heading'>
                <h1>Before proposal</h1>
                <p>A better way to make recurring decisions</p>
            </section>

            <Link to='/new-ticket' className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> Create New Ticket
            </Link>

            <Link to='/tickets' className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> View My Tickets
            </Link>

            <p>Dont have an account?
                <Link style={{color: "blue"}} to='/register'> click here to register.</Link></p>
        </>
    )
}

export default Home