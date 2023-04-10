function App() {
  return (
    <>
      <h1 className="flex justify-center pb-10 pt-4 text-center text-5xl font-bold">
        Games
      </h1>
      <main className="w-100 flex justify-evenly">
        <div className="w-1/4 px-1">
          <img
            src="src/javier-martinez-hUD0PUczwJQ-unsplash.jpg"
            alt="xbox controller"
            // className="w-1/4 px-1"
          ></img>
          <div className="flex justify-between px-3">
            <h4>Juego</h4>
            <h4>$399.00</h4>
          </div>
        </div>
        <div className="w-1/4 px-1">
          <img
            src="src/kenny-eliason-209FvE_57H8-unsplash.jpg"
            alt="red helmet"
            className="h-60"
          ></img>
          <div className="flex justify-between px-3">
            <h4>Casco</h4>
            <h4>$699.00</h4>
          </div>
        </div>
        <div className="w-1/4 px-1">
          <img
            src="src/pictures/carl-raw-m3hn2Kn5Bns-unsplash.jpg"
            alt="gaming room"
            // className="w-1/4 px-1"
          ></img>
          <div className="flex justify-between px-3">
            <h4>Game room</h4>
            <h4>$1,999.00</h4>
          </div>
        </div>
        <div className="w-1/4 px-1">
          <img
            src="src/pictures/aleks-dorohovich-zufXg9Zc9Ig-unsplash.jpg"
            alt="nintendo switch"
            // className="w-1/4 px-1"
          ></img>
          <div className="flex justify-between px-3">
            <h4>Nintendo Switch</h4>
            <h4>$349.00</h4>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
