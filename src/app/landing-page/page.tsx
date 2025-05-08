import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 z-50 p-5">
        <div className="flex justify-between items-center text-white px-6">
          <Image
            src="/logo/netcent-logo.png"
            alt="Netcent Logo"
            width={120}
            height={40}
            priority
          />
          <div
            className="flex space-x-4 items-center"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <a href="#" className="px-3 text-xs hover:text-yellow-400">
              <span className="text-yellow-400">01.</span> About
            </a>
            <a href="#" className="px-3 text-xs hover:text-yellow-400">
              <span className="text-yellow-400">02.</span> Experience
            </a>
            <a href="#" className="px-3 text-xs hover:text-yellow-400">
              <span className="text-yellow-400">03.</span> Work
            </a>
            <a href="#" className="px-3 text-xs hover:text-yellow-400">
              <span className="text-yellow-400">04.</span> Contact
            </a>
            <div className="wrapper">
              <a className="cta" href="#">
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <aside className="fixed top-20 left-0 w-38 h-[calc(100vh-5rem)] bg-gray-800 z-40 flex flex-col items-center justify-end">
        {/* Icon Stack */}
        <div className="flex flex-col items-center space-y-6">
          {/* GitHub */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transform transition hover:-translate-y-1 duration-300ms">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.086 10.947c.59.107.806-.256.806-.572v-2.048c-3.29.716-3.983-1.582-3.983-1.582-.537-1.361-1.311-1.723-1.311-1.723-1.071-.732.081-.717.081-.717 1.183.083 1.805 1.214 1.805 1.214 1.053 1.805 2.764 1.284 3.437.982.107-.763.412-1.285.75-1.58-2.63-.3-5.393-1.314-5.393-5.85 0-1.292.46-2.348 1.215-3.176-.122-.298-.526-1.503.116-3.135 0 0 .99-.317 3.24 1.21a11.26 11.26 0 015.9 0c2.25-1.527 3.238-1.21 3.238-1.21.644 1.632.24 2.837.118 3.135.757.828 1.214 1.884 1.214 3.176 0 4.548-2.767 5.548-5.407 5.842.424.368.801 1.096.801 2.21v3.278c0 .32.214.684.81.57A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transform transition hover:-translate-y-1 duration-300ms">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transform transition hover:-translate-y-1 duration-300ms">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M22.46 6.003c-.77.34-1.6.57-2.47.67a4.3 4.3 0 001.88-2.37c-.84.5-1.77.86-2.76 1.05a4.27 4.27 0 00-7.27 3.9A12.13 12.13 0 013.15 4.57a4.27 4.27 0 001.32 5.69 4.25 4.25 0 01-1.94-.54v.05a4.27 4.27 0 003.43 4.18 4.29 4.29 0 01-1.93.07 4.27 4.27 0 003.99 2.97A8.58 8.58 0 012 19.54a12.06 12.06 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57a8.73 8.73 0 002.15-2.22z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transform transition hover:-translate-y-1 duration-300ms">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M19 0h-14C2.239 0 1 1.239 1 3v18c0 1.761 1.239 3 3 3h14c1.761 0 3-1.239 3-3V3c0-1.761-1.239-3-3-3zm-11 20H5v-11h3v11zm-1.5-12.3c-.966 0-1.5-.688-1.5-1.5 0-.846.562-1.5 1.481-1.5.919 0 1.5.654 1.5 1.5 0 .812-.581 1.5-1.481 1.5zm13.5 12.3h-3v-5.604c0-1.337-.478-2.25-1.673-2.25-.913 0-1.457.613-1.697 1.204-.087.212-.108.507-.108.803V20h-3s.039-9.739 0-10.739h3v1.521c.398-.615 1.111-1.488 2.704-1.488 1.973 0 3.474 1.288 3.474 4.058V20z" />
            </svg>
          </a>
        </div>

        {/* Vertical Line */}
        <div className="mt-6 h-32 w-[1px] bg-white" />
      </aside>

      {/* Fixed Right Sidebar */}
      <aside className="fixed top-20 right-0 w-38 h-[calc(100vh-5rem)] bg-gray-700 z-40 flex items-center justify-center">
        <span className="text-white rotate-90">Right</span>
      </aside>

      {/* Main Content */}
      <main
        className="min-h-screen bg-gray-800 pt-38 px-15"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          marginLeft: "6rem",  // same as sidebar width
          marginRight: "6rem", // same as sidebar width
        }}
      >
        <div className="text-white py-6">
          <h1 className="text-sm text-yellow-400">Given name,</h1>
          <p className="mt-8 text-7xl font-bold text-purple-700" style={{ fontFamily: "sans-serif" }}>
            Muzaffar Amir.
          </p>
          <p className="mt-8 text-7xl font-bold text-gray-500" style={{ fontFamily: "sans-serif"}}>
            Fullstack Developer in the making.
          </p>
          <p className="mt-8 text-lg">
            Fullstack Developer in the making.
          </p>
          <div className="h-[200vh]" /> {/* Just for demo scroll */}
        </div>
      </main>
    </>
  );
}
