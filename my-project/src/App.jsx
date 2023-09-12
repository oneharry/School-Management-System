import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <main>
        <Header />
        <section className="w-full h-screen bg-gray-500 bgImage flex items-center justify-center">
          <div className="flex flex-col w-2/4 items-center space-y-2">
            <div className="text-5xl text-white font-bold ">
              School Management Portal
            </div>
            <button className="w-[70%] bg-gray-700 px-2 py-2 rounded-xl text-white font-semibold">Get Started</button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
