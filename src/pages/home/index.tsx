import { Terminal, Database, Server, GitBranch } from 'lucide-react';
import "./styles/index.scss";

// 컴포넌트
import KakaoLogin from "./components/snsLogin/index"

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="h-[60vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent mb-4">
            Geun Lee
          </h1>
          <p className="text-xl text-gray-400">Backend Developer</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl flex items-center hover:-translate-y-1 transition-transform">
              <Server className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-medium">Backend</h3>
                <p className="text-sm text-gray-400">Java, Spring Boot, Django</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl flex items-center hover:-translate-y-1 transition-transform">
              <Database className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-medium">DB / Cache</h3>
                <p className="text-sm text-gray-400">MySQL, Redis</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl flex items-center hover:-translate-y-1 transition-transform">
              <Terminal className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-medium">DevOps</h3>
                <p className="text-sm text-gray-400">Docker, AWS, CI/CD</p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl flex items-center hover:-translate-y-1 transition-transform">
              <GitBranch className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-medium">Version Control</h3>
                <p className="text-sm text-gray-400">Git, GitHub Actions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Team Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://mycooing.com/" target="_blank">
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">인플루언서 성장 전략 서비스</h3>
                  <p className="text-sm text-gray-400 mb-4">SNS 로그인 / 토스 결제 / 게시판</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Vue</span>
                    <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Django</span>
                    <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Redis</span>
                    <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Mysql</span>
                  </div>
                </div>
              </div>
            </a>
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">음식 레시피 추천 서비스</h3>
                <p className="text-sm text-gray-400 mb-4">SNS 로그인 / 일반 로그인 / 카카오 결제 / 게시판</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Vue</span>
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Django</span>
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Redis</span>
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Mysql</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">러닝화 판매 서비스</h3>
                <p className="text-sm text-gray-400 mb-4">일반 로그인 / 게시판</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Vue</span>
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Django</span>
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Redis</span>
                  <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs">Mysql</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <KakaoLogin />
      </main>
    </div>
  );
};

export default MainPage;