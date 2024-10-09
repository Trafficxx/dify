import SearchBox from './search-box'

const Marketplace = () => {
  return (
    <div className='w-full'>
      <h1 className='mb-2 text-center title-4xl-semibold text-text-primary'>
        Empower your AI development
      </h1>
      <h2 className='flex justify-center items-center mb-4 text-center body-md-regular text-text-tertiary'>
        Discover
        <span className="relative ml-1 body-md-medium text-text-secondary after:content-[''] after:absolute after:left-0 after:bottom-[1.5px] after:w-full after:h-2 after:bg-text-text-selected">
          models
        </span>
        ,
        <span className="relative ml-1 body-md-medium text-text-secondary after:content-[''] after:absolute after:left-0 after:bottom-[1.5px] after:w-full after:h-2 after:bg-text-text-selected">
          tools
        </span>
        ,
        <span className="relative ml-1 mr-1 body-md-medium text-text-secondary after:content-[''] after:absolute after:left-0 after:bottom-[1.5px] after:w-full after:h-2 after:bg-text-text-selected">
          extensions
        </span>
        and
        <span className="relative ml-1 mr-1 body-md-medium text-text-secondary after:content-[''] after:absolute after:left-0 after:bottom-[1.5px] after:w-full after:h-2 after:bg-text-text-selected">
          bundles
        </span>
        in Dify Marketplace
      </h2>
      <div className='flex items-center justify-center'>
        <SearchBox onChange={() => {}} />
      </div>
    </div>
  )
}

export default Marketplace