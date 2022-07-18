const Footer = () => {
  return(
    <div className='w-2/4 mx-auto mb-8 bg-dark flex flex-row justify-between'>
      <div className='flex flex-row'>
        <span className='text-white mr-6 whitespace-nowrap'>Popular topics:</span>
        <ul className='flex flex-row text-white list-disc text-xs'>
          <li className='text-active-color whitespace-nowrap mr-4'>Self Improvement</li>
          <li className='text-active-color whitespace-nowrap mr-4'>Food</li>
          <li className='text-active-color whitespace-nowrap mr-4'>Entertainment</li>
          <li className='text-active-color whitespace-nowrap mr-4'>Health & fitness</li>
          <li className='text-active-color whitespace-nowrap mr-4'>Science</li>
          <li className='text-active-color whitespace-nowrap mr-4'>More recommendations</li>
        </ul>
      </div>
      <p className='text-active-color whitespace-nowrap pl-2 text-xs'>Privacy Notice</p>
    </div>
  );
}

export default Footer;