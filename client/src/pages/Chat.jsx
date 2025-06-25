import UserMessage from "../components/UserMessage";

function Chat() {
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-1/4 min-w-50 flex-col bg-[#3b3b3b] p-2">
        <UserMessage name="Jhef Andre Zamudio" />
        <UserMessage name="Sabrina Nelmida" />
      </div>
      <div className="p-2 bg-[#3b3b3b] grow">
        <div className="flex flex-col w-full h-full bg-[#222222] rounded-lg">
          <div className="grow">
            <p>this</p>
          </div>
          <div className="flex p-2 h-15 w-full">
            <input type="text" className="w-full bg-blue-500 rounded-full px-5"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
