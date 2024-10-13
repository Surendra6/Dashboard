import { useEffect, useState } from "react";
import Card from "../components/Card";
import APP_LIST from "../utils/config/appList";
import loading from "../assets/loading-snail.gif";

const Dashboard = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplashScreen(false); // Hide the splash screen after 3000ms
    }, 1500);
    return () => clearTimeout(splashTimeout);
  }, [setShowSplashScreen]);

  return showSplashScreen ? (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <img src={loading} alt="Logo" className="w-64 h-64" />
      </div>
    </div>
  ) : (
    <>
      <div className="grid gap-5 py-10 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {APP_LIST.filter((app) => app.isLive).map(
          ({ name, description, techStack, link }, index) => (
            <Card
              key={index}
              title={name}
              description={description}
              techStack={techStack}
              link={link}
            />
          )
        )}
      </div>
    </>
  );
};

export default Dashboard;
