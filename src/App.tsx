function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="w-full bg-boma-sky-blue p-2 shadow-md">
        {/* Small blue accent bar */}
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-boma-earth-brown">
            The Henri Boma Resort
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            Frontend is Live!
          </p>
          <p className="mt-4">
            <span className="inline-block bg-boma-sunset-orange text-white text-sm px-3 py-1 rounded-full">#FF7E5F</span>
            <span className="inline-block bg-boma-sunset-yellow text-boma-earth-brown text-sm px-3 py-1 rounded-full ml-2">#FFD194</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
