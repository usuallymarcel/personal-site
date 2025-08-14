
function Projects() {
  const SlackBotGit = 'https://github.com/usuallymarcel/slack-bot-ollama';
  const PersonalWebpageGit = 'https://github.com/usuallymarcel/personal-site';
  const InstaBotGit = 'https://github.com/usuallymarcel/Instabot-highschool-project';
  const homeLab = './IMG_1313-min.jpeg'
  return(
    <section id="projects" className="py-20 px-4 bg-green-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded shadow flex flex-col justify-between h-full hover:shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => {window.open(SlackBotGit)}}>
            <h3 className="text-xl font-semibold mb-2">AI Slack Helper</h3>
            <p className="text-gray-700">Slack app that Interfaces with an Ollama model to provide channel summarisation and message suggestions and answer queries about the messages within the channels.</p>
            <p className="mt-4 text-gray-900">Javascript, Express, SQlite</p>
          </div>
          <div className="p-6 bg-white rounded shadow flex flex-col justify-between h-full hover:shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => {window.open(PersonalWebpageGit)}}>
            <h3 className="text-xl font-semibold mb-2">Personal Webpage</h3>
            <p className="text-gray-700">Personal webpage to show my lackluster projects</p>
            <p className="mt-4 text-gray-900">React, Javascript, Tailwindcss, AWS EC2, Nginx</p>
          </div>
          <div className="p-6 bg-white rounded shadow flex flex-col justify-between h-full hover:shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => {window.open(InstaBotGit)}}>
            <h3 className="text-xl font-semibold mb-2">Instagram Bot</h3>
            <p className="text-gray-700">Automated Instagram account, controlled remotely using a Discord bot as the interface and logger. Used BeautifulSoup4 web scraper library to collect images from Reddit.
            </p>
            <p className="mt-4 text-gray-900">Python</p>
          </div>
          <div className="p-6 bg-white rounded shadow flex flex-col justify-between h-full hover:shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => {window.open(homeLab)}}>
            <h3 className="text-xl font-semibold mb-2">Home Lab</h3>
            <p className="text-gray-700 ">
              Proxmox as hypervisor, OpenMediaVault in VM for NAS solution, Pi-hole in a container for network-wide ad blocking and DNS resolution. configured Tailscale VPN for secure remote access. 
            </p>
            <p className="mt-4 text-gray-900">Proxmox, OpenMediaVault, Pi-hole, Tailscale</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;