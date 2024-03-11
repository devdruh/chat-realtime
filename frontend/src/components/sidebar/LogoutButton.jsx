import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {

    const { loading, logout } = useLogout();
    return (
        <div className="pt-2">
            {!loading ? (
            
                <button className='btn btn-circle btn-sm bg-sky-500 text-white border-0' onClick={logout}>
                <svg viewBox="0 0 24 24"  fill="currentColor">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 100-12H4a9.985 9.985 0 018-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 01-8-4z" />
                </svg>
            </button>
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    )
}

export default LogoutButton