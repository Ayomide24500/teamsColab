const HomeScreen = () => {
  return (
    <div className="h-[calc(100vh-80px)] bg-white w-full flex justify-center items-center flex-col">
      <div className="w-[80%] h-full flex justify-center items-center">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center">
            Pass Your Task here
          </div>
          <div className="w-full justify-center items-center">
            <div className="border rounded-md shadow-md w-[500px] h-[450px]flex justify-center items-center flex-col">
              <div className="w-full">
                <label htmlFor="" className="text-indigo-800">
                  TaskName
                </label>
                <input
                  type="text"
                  className="w-[90%] h-[40px] pl-2"
                  placeholder="TaskName"
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-indigo-800">
                  TaskName
                </label>
                <input
                  type="text"
                  className="w-[90%] h-[40px] pl-2"
                  placeholder="Description"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="text-indigo-800">View Your Tasks here</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
