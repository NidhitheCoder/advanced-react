const FixedBgSection = ({url}) => {
  return (
    <div className="">
      <div className={`App bg-fixed h-screen`} style={{backgroundImage: `url('${url}')`}} >
        <h1 className="text-3xl font-bold underline tablet:text-red-400 desktop:text-green-600 text-blue-300">
          Hello world!
        </h1>
        <div className='h-96 bg-midnight w-screen'>
          <p>lorem lorem</p>
        </div>
        <div className="h-96 bg-transparent" >
          Microsoft is conducting an online survey to understand your opinions about the Microsoft Azure website. 
          If you choose to participate, the online survey will be presented to you when you leave the website.
        </div>
      </div>
      <div className='h-26'>
        <p>lorem lorem</p>
      </div>
    </div>
  )
}

export default FixedBgSection;