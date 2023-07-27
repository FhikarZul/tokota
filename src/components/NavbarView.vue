<template>
  <!-- top navbar -->
  <div class="bg-primary1 w-full p-2">
    <div class="container mx-auto flex md:justify-between justify-center">
      <p class="text-white hidden md:flex">
        <img src="../assets/image/call.svg" alt="call" class="mr-1" />
        0823-2233-2211
      </p>
      <p class="text-white">Dapatkan Promo Beli 1 Gratis 1</p>
      <p class="text-white hidden md:flex">
        <img src="../assets/image/location.svg" alt="location" class="mr-1" />
        Makassar, Indonesia
      </p>
    </div>
  </div>
  <!-- end top navbar -->

  <!-- navbar -->
  <nav class="sticky bg-white z-20 top-0 left-0 border-b border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/" class="flex items-center">
        <img
          src="../assets/image/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
      </router-link>
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-white bg-primary1 hover:bg-green-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
        >
          Masuk
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <router-link
              to="/"
              class="font-bold flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary1 md:p-0 md:w-auto"
              aria-current="page"
              >Home</router-link
            >
          </li>

          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="font-bold flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary1 md:p-0 md:w-auto"
            >
              Kategori
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul class="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Baju</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Sepatu</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Celana</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <router-link
              to="/promo"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary1 md:p-0 font-bold"
              >Promo
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- end navbar -->
</template>
