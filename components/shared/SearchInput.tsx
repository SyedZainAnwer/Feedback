import searchIcon from '@/public/assets/search.svg'
import Image from 'next/image';

const SearchInput = ({dataItems} : {dataItems: string[]}) => {
    return(
        <div className='bg-white flex flex-1 items-center p-2 border border-light_gray rounded-md'>
            <Image 
                src={searchIcon} 
                alt='searchIcon' 
                height={20} 
                width={20}
            />
            <input 
                type="text" 
                className="border-none items-center rounded-sm px-2 outline-none w-full" 
                placeholder='Search...'
                list={dataItems && ""}
            />
        </div>
    )
}

export default SearchInput;
