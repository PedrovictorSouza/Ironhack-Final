/*
        <div className="form-group">
          <label htmlFor="name">
            Is there any reason to suspect motivated errors, or errors driven by
            the self-interest of the recommending team or individual?
          </label>
          <small>
            Review the proposal with extra care, especially for overoptimism.
          </small>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            Has the team fallen in love with its proposal?
          </label>
          <small>
            Rigorously apply all the quality controls on the checklist.
          </small>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            Were there dissenting opinions within the team? • Were they explored
            adequately?
          </label>
          <small>Solicit dissenting views, discreetly if necessary.</small>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>
        </div>

        <h2>02 ASK THE TEAM</h2>

        <div className="form-group">
          <label htmlFor="name">
            Could the diagnosis of the situation be overly influenced by salient
            analogies?
          </label>
          <small>
            ask for descriptions of five recent deals, other than the recently
            acquired company, that were somewhat similar to the one being
            considered
          </small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            Have credible alternatives been considered?
          </label>

          <small>What alternatives did you consider?</small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <small>At what stage were they discarded?</small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <small>
            Did you actively look for information that would disprove your main
            hypothesis or only for the confirming evidence described in your
            final recommendation?
          </small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            If you had to make this decision again in a year, what information
            would you want, and can you get more of it now?
          </label>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>

          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            Do you know where these numbers came from?
          </label>
          <small>
            Can there be …unsubstantiated numbers? …extrapolation from history?
            …a motivation to use a certain anchor?
          </small>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>

          <small>
            Which numbers in this plan are facts and which are estimates?
          </small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <small>
            Were these estimates developed by adjusting from another number?
          </small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <small>Who put the first number on the table?</small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            Is the team assuming that a person, organization, or approach that
            is successful in one area will be just as successful in another?
          </label>
          <small>
            Eliminate false inferences, and ask the team to seek additional
            comparable examples.
          </small>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>

          <label htmlFor="name">
            Does the team making the recommendation have specific information
            regarding the other company's decision, or is the team making
            assumptions based on the company's overall reputation?
          </label>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>
              They have specific information regarding the other company's
              decision
            </p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>
              The team is making assumptions based on the company’s overall
              reputation
            </p>
          </div>

          <small>
            If the investment was indeed a success, how much of that success is
            attributable to chance events such as lucky timing?
          </small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <small>
            And is the situation of the other company truly similar to the
            situation of Lisa's company?
          </small>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>

          <small>
            What other companies in our industry invested in a declining
            business, and how did it turn out for them?”
          </small>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="name">
            9. Are the people making the recommendation overly attached to past
            decisions?
          </label>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>
        </div>

        <h2>ASK ABOUT THE PROPOSAL</h2>

        <div className="form-group">
          <label htmlFor="name">10. Is the base case overly optimistic?</label>
          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>Yes</p>
          </div>

          <div class="checkbox_container">
            <label>
              <input type="checkbox" />
            </label>
            <p>No</p>
          </div>
        </div>

        
*/