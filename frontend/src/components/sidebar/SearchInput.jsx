import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
import useGetCoversations from "../../hooks/useGetConversations";

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation()
    const { conversations } = useGetCoversations();

    const handleSubmit = (e) => { 
        e.preventDefault();

        if (!search) return;
        if (search.length < 3) {
           return toast.error('Search name must be at least 3 characters', {position: 'bottom-right'});
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            return toast.error("No user found!", {position: 'bottom-right'});
        }
    }
    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search...' className='input input-sm input-bordered rounded-full' required value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className='btn btn-sm btn-circle hover:bg-sky-700 bg-sky-900 text-white'>
                <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z" />
                </svg>
            </button>
        </form>
    )
}

export default SearchInput