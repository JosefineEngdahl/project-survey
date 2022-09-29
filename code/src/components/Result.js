import React from 'react';

const Result = ({name, food, drink, email}) => {
  return (
    <section className="container">
        <h4>Nice job {name}</h4>
      <div className="Result">
        <p>{food} <b> - That's also our favourite pun! 🧡</b></p>
        <p>Why did the chicken cross the road? {drink} <b> - Sad, that's the worst chicken joke 🤷‍♀️...</b></p>
        <p>However, you definitely <b>have the potential</b> to become a stand-up comedian!</p>
        <p>✉️ We'll contact you at <b>{email}</b> for future gigs!</p>
      </div>
    </section>
  );
}

export default Result
