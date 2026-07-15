import './App.css'

function App() {
    return (
        <>
            {/* header.html */
                <div className="container header-container">
                    <div className="logo">
                        <a href="mainPage.html">
                            {}
                            <img src="image/abovCI.png" alt="ABOV CI" />
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">제품</a></li>
                            <li><a href="#">솔루션</a></li>
                            <li><a href="#">개발도구</a></li>
                            <li><a href="#">기술문서</a></li>
                            <li><a href="#">리소스</a></li>
                            <li><a href="#">뉴스</a></li>
                            <li><a href="#">회사소개</a></li>
                        </ul>
                    </nav>
                    <div className="header-util">
                        <span>🌐 KOR</span>
                        <span>🔒 로그인</span>
                        <a href="#" className="btn-contact">문의하기</a>
                    </div>
                </div>            }

            {/*  mainPage.html */
                <section className="hero">
                    <div className="container hero-container">
                        <div className="hero-text">
                            <h1>더 안전한 연결, 더 지능적인 제어</h1>
                            <p className="sub">ABOV MCU/Connectivity로 완성되는 스마트한 미래</p>
                            <p className="desc">고성능 · 초저전력 · 강력한 보안 기술력을 바탕으로 시장을 선도합니다.</p>
                            <a href="#" className="hero-btn">자세히 보기 &gt;</a>
                        </div>
                        <div className="hero-graphic">
                            {}
                            <img src="image/banner_main_header.png" alt="ABOV Chip" />
                        </div>
                    </div>
                </section>}

            {/* footer.html */<div className="container">
                <div className="footer-top">
                    <div className="footer-info">
                        <div className="footer-logo">ABOV<span>●</span></div>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-link-group">
                            <h5>회사</h5>
                            <ul>
                                <li><a href="#">회사 개요</a></li>
                                <li><a href="#">연혁</a></li>
                                <li><a href="#">인재 채용</a></li>
                                <li><a href="#">오시는 길</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-group">
                            <h5>제품</h5>
                            <ul>
                                <li><a href="#">MCU</a></li>
                                <li><a href="#">Motor Control</a></li>
                                <li><a href="#">Touch Interface</a></li>
                                <li><a href="#">Wireless IoT</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-group">
                            <h5>개발 도구</h5>
                            <ul>
                                <li><a href="#">SDK & Tools</a></li>
                                <li><a href="#">Compiler</a></li>
                                <li><a href="#">Debugger</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-group">
                            <h5>기술 지원</h5>
                            <ul>
                                <li><a href="#">Reference Manual</a></li>
                                <li><a href="#">Datasheet</a></li>
                                <li><a href="#">App Notes</a></li>
                            </ul>
                        </div>
                        <div className="footer-link-group">
                            <h5>투자 정보</h5>
                            <ul>
                                <li><a href="#">경영진 소개</a></li>
                                <li><a href="#">재무 정보</a></li>
                                <li><a href="#">IR / ESG</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="f-bottom-left">
                        <span>개인정보처리방침</span> | <span>이용약관</span> | <span>사이트맵</span>
                        <p>경기도 성남시 분당구 판교로 255번길 9-22 | Tel: 031-707-1234 | E-mail: info@abov.co.kr</p>
                        <p>&copy; 2026 ABOV Semiconductor Co., Ltd. All rights reserved.</p>
                    </div>
                    <div className="f-bottom-right">
                        <strong>📞 +82-2-0000-0000</strong>
                        {}
                        <br />
                        <span>✉️ contact@abovsemi.com</span>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default App