import "./LoaderNetwork.scss";

const ContentLoader = () => {
  return (
    <div className="loader_container">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
      <div className="mt-5 text-center">
        <h1>
          <strong>You are offline</strong>
        </h1>
        <h6 className="mx-2">
          make sure you are online, the website works best with an internet
          connection.
        </h6>
      </div>
    </div>
  );
};

export default ContentLoader;
