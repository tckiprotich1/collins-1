export default function Foter(props) {
    return(
        <>
        <footer className="bg-white dark:bg-black">
    <div className="container px-6 py-40 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe to  my  newsletter to get update on new articles.</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-blue dark:border-blue focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-blue focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="/" className="text-blue transition-colors duration-300 dark:text-blue dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="https://github.com/tckiprotich" className="text-blue transition-colors duration-300 dark:text-blue dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who am I</a>
                    <a href="#" className="text-blue transition-colors duration-300 dark:text-blue dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blogs</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Socials</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="/posts" className="text-blue transition-colors duration-300 dark:text-blue dark:hover:text-blue-400 hover:underline hover:text-blue-500">Wakatime</a>
                    <a href="#" className="text-blue transition-colors duration-300 dark:text-blue dark:hover:text-blue-400 hover:underline hover:text-blue-500">Twitter</a>
                    <a href="#" className="text-blue transition-colors duration-300 dark:text-blue dark:hover:text-blue-400 hover:underline hover:text-blue-500">Reddit</a>
                </div>
            </div>
        </div>
        
        
    </div>
</footer>
        </>
    )
}