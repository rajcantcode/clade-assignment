import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate("/jobs");
    }, 5000);

    return () => {
      clearTimeout(redirect);
    };
  });
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
      <p className="text-[2rem] text-center">This is Home page</p>
      <p className="text-[1.5rem] text-center">
        You will be redirected to{" "}
        <Link to="/jobs" className="text-purple-300">
          /jobs
        </Link>{" "}
        page in 5 seconds
      </p>
    </div>
  );
};

export default Home;
