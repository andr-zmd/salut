import UserMessage from "../components/UserMessage";

function Chat() {
  return (
    <div className="flex h-full w-1/4 min-w-40 flex-col bg-[#3b3b3b]">
      <UserMessage name="Jhef Andre Zamudio" />
      <UserMessage name="Sabrina Nelmida" />
    </div>
  );
}

export default Chat;
