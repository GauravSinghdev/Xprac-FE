export default function Navbar() {
  const handleLoginfn = () => {
    console.log("Login button clicked");
  };
  return (
    <div className="border-b-2">
      <div className="flex items-center justify-between my-2 mx-20">
        <a href="/">
          <img
            src="/src/assets/favicon.ico"
            alt="Logo"
            className="w-12 h-12 mr-2"
          />
        </a>
        <button
          onClick={handleLoginfn}
          className="bg-black rounded-xs py-2 px-3 text-white hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}
