const Home = ({ theme }) => {
  console.log('Home Render');
  return (
    <>
      <h1>Home page</h1>
      <p>Current Theme: {theme}</p>
    </>
  );
};

export default Home;