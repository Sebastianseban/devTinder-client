import { useEffect } from "react";
import { useNavigate } from "react-router";
import { authApi } from "../../api/authApi";


const GitHubCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      authApi.githubAuth(code)
        .then((user) => {
          if (user.isProfileComplete) {
            navigate("/feed");
          } else {
            navigate("/auth/complete-profile");
          }
        })
        .catch((err) => {
          console.error("GitHub login failed:", err);
          navigate("/auth/signin");
        });
    }
  }, [navigate]);

  return (
    <div className="text-center text-white mt-20">
      Logging in with GitHub...
    </div>
  );
};

export default GitHubCallback;
