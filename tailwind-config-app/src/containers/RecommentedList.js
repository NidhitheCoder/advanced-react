
const RecommentedList = ({list}) => {

  return (
    <div className="w-screen bg-dark">
      <div className='flex  w-2/4 mx-auto pt-8'>
        <p className='text-active-color pr-2'>Recommended by Pocket</p>
        <a href="http://123.com" className='text-white'>learn more</a>
      </div>
      <div className='w-2/4 mx-auto grid grid-cols-3 gap-6 py-4'>
        {list.map((recommentItem)=> (
          <div key={recommentItem.title} className='w-full rounded-lg bg-light text-white'>
            <div className="w-full h-2/4 bg-cover bg-no-repeat rounded-t-md" style={{ backgroundImage: `url(${recommentItem.image})`}}></div>
            <div className="p-4 overflow-hidden">
              <span className="pr-2 text-xs">{recommentItem.source}</span>
              <span className="text-xs">{recommentItem.time}</span>
              <p className="text-sm font-semibold ">{recommentItem.title}</p>
              <p className="text-ellipsis mb-2">{recommentItem.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommentedList;
