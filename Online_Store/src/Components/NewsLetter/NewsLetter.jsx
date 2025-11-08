import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input type="email" placeholder="Your Email" aria-label="Email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
