function index() {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">SNS Login</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform">
                    <div className="p-6">
                        <img src="/kakao_login.png" alt="" />
                    </div>
                </div>
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform">
                    <div className="p-6">
                        <img src="/google_login.png" alt="" />
                    </div>
                </div>
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform">
                    <div className="p-6">
                        <img src="/naver_login.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index