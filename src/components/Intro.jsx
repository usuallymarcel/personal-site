
function Intro() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-400 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Marcel 👋</h1>
      <p className="text-xl md:text-2xl text-gray-800 mb-8">Aspiring Software Developer and Self Hosting Dabbler</p>
      <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition scroll-smooth">See My Work</a>
    </section>
  );
}

export default Intro;