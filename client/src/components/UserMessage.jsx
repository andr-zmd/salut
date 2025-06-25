import profilePic from "../assets/pfp.jpg";

function UserMessage(prop) {
  return (
    <button className="rounded-lg  transition hover: flex flex-row items-center gap-2 p-2 hover:cursor-pointer hover:bg-[#5d5d5d]">
      <img src={profilePic} className="h-7 w-7 rounded-full"></img>
      <div className="flex flex-col">
        <p className="text-white">{prop.name}</p>
        <p className="text-sm text-[#a0a0a0]"> Messaged you! </p>
      </div>
    </button>
  );
}

export default UserMessage;
