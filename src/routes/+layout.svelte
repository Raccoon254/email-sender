<script>
	import "../app.css";
	let year = new Date().getFullYear();
</script>

<div class="app">
	<main class="flex align-middle min-h-[70vh] justify-center items-center flex-col">
		<slot />
	</main>
</div>

<div class="mt-32 max-w-7xl mx-auto px-4 md:px-8">
  <div class="footer text-white py-8 px-4 md:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <div class="text-center w-full flex flex-col items-center justify-center">
        <div class="relative">
          <img
          src="/ken.HEIC"
          alt="Ken Tom"
          class="rounded-full ring ring-offset-4 ring-white ring-opacity-15 ring-offset-custom object-cover w-32 h-32 mx-auto md:mx-0 mb-4"
        />
        <img
          src="/white.png"
          alt="Ken Tom"
          class="absolute mix-blend-screen opacity-40 object-cover w-20 h-20 mx-auto md:mx-0 mb-4 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        />
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src="/kentom.jpg" alt="KenTom logo" class="w-36" />
        <p class="text-gray-400 text-xs mt-1">All in one dev solutions</p>
        </div>
      </div>
      <div class="text-left col-span-2">
        <p class="mb-4">
          Hi, I'm Ken Tom, the developer behind TestFlight Hub. With a passion for creating
          intuitive and user-friendly mobile applications, I strive to enhance the way
          people interact with technology in their daily lives.
        </p>
        <p class="mb-4">
          Status Saver is just one of my projects aimed at simplifying and improving the
          WhatsApp experience for users. I'm always working on new ideas and improvements,
          so stay tuned for more exciting apps!
        </p>
        <div class="flex flex-wrap justify-start gap-4 mt-4">
          <a
            href="https://stevetom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
          >
            <i class="fas fa-briefcase mr-2"></i> Portfolio
          </a>
          <a
            href="mailto:tomsteve187@gmail.com"
            class="flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
          >
            <i class="fas fa-envelope mr-2"></i> Email
          </a>
          <a
            href="https://github.com/Raccoon254"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
          >
            <i class="fab fa-github mr-2"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/steve-tom-822a81230/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
          >
            <i class="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a
            href="https://wa.link/w1774n"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center bg-green hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ring-1 ring-white ring-offset-2 ring-offset-custom ring-opacity-10 hover:ring-opacity-100 hover:ring-green transition-colors duration-300 ease-in-out"
          >
            <i class="fab fa-whatsapp mr-2"></i> WhatsApp
          </a>
          </div>
      </div>
    </div>
    <div class="mt-8 flex w-full items-center flex-col justify-center gap-4">
      <div>
        <img src="/white.png" alt="Ken Tom" class="w-20 mx-auto" />
      </div>
      <p class="text-gray-500">&copy; {year} KenTom. All rights reserved.</p>
    </div>
  </div>
</div>

<style>
</style>
