import profilePic from '../assets/pfp.jpg'

function UserMessage(prop) {
  return (
    <div>
      <div className="flex flex-row gap-2 hover: hover:bg-[#5d5d5d] hover:cursor-pointer items-center p-2">
        <img src={profilePic} className='w-7 h-7 rounded-full'></img>
        <div className=" flex flex-col">
          <p className="text-white">{prop.name}</p>
          <p className="text-sm text-[#a0a0a0]"> Messaged you! </p>
        </div>
      </div>
    </div>
  )
}

export default UserMessage