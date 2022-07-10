
const RecommentedList = ({list}) => {

  return (
    <div className="w-screen bg-dark">
      <div className='flex  w-2/4 mx-auto pt-8'>
        <p className='pr-2 text-white'>Recommended by Pocket</p>
        <a href="http://123.com" className='text-active-color'>learn more</a>
      </div>
      <div className='w-2/4 mx-auto grid grid-cols-3 gap-4 py-4'>
        {list.map((recommentItem)=> (
          <div key={recommentItem.title} className=' group w-full h-96 overflow-hidden rounded-lg bg-light text-white'>
            <div className="w-full h-2/4 bg-cover bg-no-repeat rounded-t-md" style={{ backgroundImage: `url(${recommentItem.image})`}}></div>
            <div className="p-4 overflow-hidden">
              <span className="pr-2 text-xs">{recommentItem.source}</span>
              <span className="text-xs">{recommentItem.time}</span>
              <p className="text-sm font-semibold  group-hover:text-active-color">{recommentItem.title}</p>
              <p className="text-ellipsis text-xs overflow-hidden">{recommentItem.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommentedList;
