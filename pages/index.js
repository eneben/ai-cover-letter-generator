import styled from "styled-components";
import { useState } from "react";

const StyledInputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 50%;
  padding: 20px;
`;

// const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const [showCoverLetter, setShowCoverLetter] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // const { data: inputInformation, isLoading } = useSWR('/api/index.js');

    //Post request für api
    setShowCoverLetter(true);
  }

  function handleClick() {
    setShowCoverLetter(false);
  }

  if (showCoverLetter) {
    return (
      <>
        <h1>Access your personal cover letter below</h1>
        <article>
          AI is generating your cover letter...
          {/* Hier später Inhalt dynamisch generieren */}
        </article>
        <button onClick={handleClick}>Go back</button>
      </>
    );
  }

  return (
    <>
      <h1>Cover Letter Generator</h1>
      <form onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <StyledSection className="applicantDescription">
            <label htmlFor="applicant">Enter a few words about yourself</label>
            <textarea
              id="applicant"
              name="applicant"
              rows="10"
              cols="50"
              placeholder="I am ..."
              required
            />
          </StyledSection>
          <StyledSection className="jobDescription">
            <label htmlFor="job">Enter the job description</label>
            <textarea
              id="job"
              name="job"
              rows="10"
              cols="50"
              placeholder="Important skills are..."
              required
            />
          </StyledSection>
        </StyledInputWrapper>
        <section className="buttonSection">
          <button type="submit">Generate</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    </>
  );
}
