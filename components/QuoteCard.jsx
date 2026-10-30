import Image  from 'next/image'
import Icon from './Icon';

const QuoteCard = ({quote}) => {
  const {quote: text, author, image} = quote;
  
  return (
    <div>
      <div className='shadow-2xl rounded-2xl bg-white w-auto h-90 p-6 flex flex-col justify-between'>
        <h3 className='text-[25px] font-bold'>
          <Icon name="quote"/>{text}<Icon name="quote"/>
        </h3>
        
        <div className='flex items-center gap-3 mt-6'>
          <Image
          width={"48"}
          height={"48"}
            src={image} 
            alt={author}
            className='w-12 h-12 rounded-full object-cover shrink-0' 
          />
          <p className='font-semibold'>{author}</p>
        </div>
      </div>
    </div>
  )
}

export default QuoteCard