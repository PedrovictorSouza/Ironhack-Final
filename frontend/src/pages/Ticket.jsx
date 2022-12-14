import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux';
import {getTicket, reset, closeTicket} from '../features/tickets/ticketSlice';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';

function Ticket() {
    const {ticket, isLoading, isSuccess, isError, message} = useSelector((state) => state.tickets);

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {ticketId} = useParams()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId));
        toast.success('Decision Closed');
        // eslint-disable-next-line
    }, [isError, message, ticketId])

    //Close ticket
    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
    }

    if(isLoading) {
        return <Spinner/>
    }

    if(isError) {
        return <h3>Something went wrong</h3>
    }

    

    console.log(ticket);
    return <div className='ticket-page'>
        <header className="ticket-header">
            <BackButton url='/tickets' />
            <h2>
                Ticket ID: {ticket._id}
                <span className={`status status-${ticket.status}`}>
                    {ticket.status}
                </span>
            </h2>
            <h3>Date Submitted: {new Date(ticket.createAt).toLocaleString('en-US')}</h3>
            <div className='ticket-title'>
                <h3>Title of decision</h3>
                <p>{ticket.title}</p>
            </div>
            <div className='ticket-desc'>
                <h3>Description of the issue</h3>
                <p>{ticket.description}</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>{String(ticket.answer1)}</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p></p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta </p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta </p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
            <div className='ticket-desc'>
                <h3>Answer</h3>
                <p>resposta</p>
            </div>
        </header>

        {ticket.status !== 'closed' && (
            <button onClick={onTicketClose} className='btn btn-block btn-danger'>Close Decision.</button>
        )}
    </div>
}

export default Ticket