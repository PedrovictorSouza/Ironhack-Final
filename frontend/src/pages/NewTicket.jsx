import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../Components/Spinner";
import BackButton from "../Components/BackButton";

function NewTicket() {
  //get the user from the global state.
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [title, setTitle] = useState("");

  const [check, setCheck] = useState(false);

  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    dispatch(createTicket({ title, description, check }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <section className="heading">
        <h4>Create new reccomendation</h4>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-userInfo">
          <div>
            <label htmlFor="name">
              <small>Decider name</small>
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              disabled
            ></input>
          </div>
          <div>
            <label htmlFor="email">
              <small>Decider email</small>
            </label>
            <input
              type="text"
              className="form-control"
              value={email}
              disabled
            ></input>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">What's the title of your decision?</label>
            <input
              name="title"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="name">Describe your decision.</label>
            <textarea
              name="title"
              id="title"
              type="text"
              placeholder="max 150 characters."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <h2>01 ASK YOURSELF</h2>

          {/* QUESTION ONE */}
          <div className="form-group">
            <label htmlFor="name">
              1. Is there any reason to suspect motivated errors, or errors
              driven by the self-interest of the recommending team or
              individual?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q1"
                    value={check}
                    onChange={(e) => setCheck(e.target.value)}
                  />
                  <p>Yes</p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q1"
                    value={check}
                    onChange={(e) => setCheck(e.target.value)}
                  />
                  <p>No</p>
                </label>
              </fieldset>
            </div>
          </div>
          

          <div className="form-group">
            <label htmlFor="name">
              2. Has the group fallen in love with its proposal?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q2"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              3.  Were there dissenting opinions within the group? • Were they explored
            adequately?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q3"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q3"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <h2>02 ASK THE OTHERS</h2>

          <div className="form-group">
            <label htmlFor="name">
              4. Could the diagnosis of the situation be overly influenced by salient
            analogies??
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q4"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q4"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              5.  Have credible alternatives been considered?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q5"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q5"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              6. If you had to make
this decision again in
a year's time, what
information would
you want, and can
you get more of it
now?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q6"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q6"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
            7. If the you did a research, how much of that is a fact and how much is estimates?
            </label>
            <div className="checkbox_container">
              <fieldset>
                
                <label>
                <p>Fact</p>
                  <input
                    type="number"
                    name="Q7A"
                  />
                  
                </label>
                <label>
                <p>Estimate</p>
                  <input
                    type="number"
                    name="Q7B"
                  />
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              8. Is the team assuming
that a person, organization, or approach
that is successful
in one area will be
just as successful in
another?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q8"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q8"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              9. Are the recommenders overly attached
to a history of past
decisions?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q9"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q9"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <h2>03 ABOUT THE PROPOSAL</h2>

          <div className="form-group">
            <label htmlFor="name">
              10. Is the base case
overly optimistic?
            </label>

            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q10"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q10"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              11. Is the worst case
bad enough?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q11"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q12"
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              12. Is the recommending team overly
cautious?
            </label>
            <div className="checkbox_container">
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="Q11"
                    
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="Q12"
                    
                  />
                  No
                </label>
              </fieldset>
            </div>
          </div>
          
         

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>

        </form>
      </section>
    </>
  );
}

export default NewTicket;
