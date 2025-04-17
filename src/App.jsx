import React from "react";

const App = () => {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <div className="relative">
            <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute size-6 left-16 -top-1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m17.85 19.95l-4.425-4.425l2.1-2.1l4.425 4.425q.425.425.425 1.05t-.425 1.05t-1.05.425t-1.05-.425m-13.8 0q-.425-.425-.425-1.05t.425-1.05L9.9 12l-1.7-1.7q-.275.275-.7.275t-.7-.275l-.575-.575v2.25q0 .35-.3.475t-.55-.125L2.65 9.6q-.25-.25-.125-.55T3 8.75h2.25L4.7 8.2q-.3-.3-.3-.7t.3-.7l2.85-2.85q.5-.5 1.075-.725T9.8 3q.5 0 .938.15t.862.45q.2.125.213.35t-.163.4l-1.9 1.9l.55.55q.275.275.275.7t-.275.7L12 9.9l2.25-2.25q-.1-.275-.162-.575t-.063-.6q0-1.475 1.013-2.488t2.487-1.012q.2 0 .375.013t.35.062q.225.075.288.313t-.113.412L16.8 5.4q-.15.15-.15.35t.15.35l1.1 1.1q.15.15.35.15t.35-.15l1.625-1.625q.175-.175.413-.125t.312.3q.05.175.063.35t.012.375q0 1.475-1.012 2.487t-2.488 1.013q-.3 0-.6-.05t-.575-.175l-10.2 10.2q-.425.425-1.05.425t-1.05-.425"
                />
              </svg>
            </p>
          </div>
          <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            A pagina da Golen esta fora do ar
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Entre em contato através do Linkedin.
          </p>

          <div class="flex items-center mt-6 gap-x-3">
            <a
              href="https://www.linkedin.com/in/cl%C3%A1udio-frag%C3%A3o-792889a9/"
              class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
