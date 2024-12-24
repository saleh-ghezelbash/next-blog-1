export default function Comment({ children }) {
    return (
        <div className="border-r px-6 mt-3">
            <div>
                <div className="flex items-center mb-6 gap-2">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" className="w-12 h-12 rounded-full" />
                    <div>
                        <div className="text-lg font-medium text-gray-800">صالح قزلباش</div>
                        <div className="text-gray-500">1403/10/25</div>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
                    nulla. Donec consequat urna a tortor sagittis lobortis.</p>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> لایک</a>
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}