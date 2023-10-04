import React from "react";

function Parent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAuth } = useAuth();
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   try {
  //     axios
  //       .post("/api/users/login", { email, password })
  //       .then((response) => {
  //         // Access the data from the response once the Promise is fulfilled
  //         const data = response.data;
  //         console.log(data.data);
  //         // Now you can access specific properties from the data object
  //         const accessToken = data?.data?.accessToken;
  //         const useremail = data?.data?.user?.email;
  //         const id = data?.data?.user?._id;
  //         const designation = data?.data?.user?.designation;
  //         setAuth({ accessToken, useremail, id, designation });

  //         navigate("/admin");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="w-full flex items-center bg-gray-100 flex-col h-screen">
      <div className="lg:w-1/4 w-full bg-white rounded-lg p-4 flex flex-col mt-10">
        <h2 className="login">Login</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Parent Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="bg-orange-300 w-full">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="./register" className="text-orange-400">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Parent;
