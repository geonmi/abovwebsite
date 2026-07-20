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

            {/* header.html */}
            <div className="container header-container">
                <div className="logo">
                    <a href="mainPage.html">
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
            </div>

            {/* mainPage.html */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-text">
                        <h1>더 안전한 연결, 더 지능적인 제어</h1>
                        <p className="sub">ABOV MCU/Connectivity로 완성되는 스마트한 미래</p>
                        <p className="desc">고성능 · 초저전력 · 강력한 보안 기술력을 바탕으로 시장을 선도합니다.</p>
                        <a href="#" className="hero-btn">자세히 보기 &gt;</a>
                    </div>
                    <div className="hero-graphic">
                        <img src="image/banner_main_header.png" alt="ABOV Chip" />
                    </div>
                </div>
            </section>

            {/* footer.html - 목표 이미지 스타일에 맞게 수정 */}
            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-content">
                        {/* 좌측 카테고리 링크 메뉴 */}
                        <div className="footer-links-area">
                            <div className="footer-col">
                                <h5>제품</h5>
                                <ul>
                                    <li><a href="#">32-bit MCU</a></li>
                                    <li><a href="#">8-bit MCU</a></li>
                                    <li><a href="#">센서 솔루션</a></li>
                                    <li><a href="#">파워 솔루션</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h5>투자정보</h5>
                                <ul>
                                    <li><a href="#">IR자료</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h5>채용</h5>
                                <ul>
                                    <li><a href="#">채용공고</a></li>
                                    <li><a href="#">채용절차</a></li>
                                    <li><a href="#">인재상</a></li>
                                    <li><a href="#">복리후생</a></li>
                                    <li><a href="#">사내문화</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h5>연락처</h5>
                                <ul>
                                    <li><a href="#">연락처</a></li>
                                    <li><a href="#">위치정보</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h5>소식</h5>
                                <ul>
                                    <li><a href="#">신제품소식/</a></li>
                                    <li><a href="#">뉴스레터</a></li>
                                    <li><a href="#">회사소식</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* 우측 사이드 영역 (인증/SNS/뉴스레터 구독) */}
                        <div className="footer-side-area">
                            <div className="side-section">
                                <h6>Authentication</h6>
                                <div className="auth-logos">
                                    <span className="auth-badge">가족친화</span>
                                    <span className="auth-badge">기상청</span>
                                    <span className="auth-badge">KRX</span>
                                </div>
                            </div>

                            <div className="side-section">
                                <h6>Network Services</h6>
                                <div className="sns-icons">
                                    <a href="#" className="sns-icon">f</a>
                                    <a href="#" className="sns-icon">in</a>
                                    <a href="#" className="sns-icon">▶</a>
                                    <a href="#" className="sns-icon">Ch</a>
                                    <a href="#" className="sns-icon">💬</a>
                                    <a href="#" className="sns-icon">W</a>
                                    <a href="#" className="sns-icon">Youku</a>
                                    <a href="#" className="sns-icon">Bili</a>
                                </div>
                            </div>

                            <div className="side-section">
                                <h6>Sign-Up For Newsletter</h6>
                                <div className="newsletter-form">
                                    <select className="country-select">
                                        <option>국가를 선택해주세요.</option>
                                    </select>
                                    <div className="email-input-group">
                                        <input type="email" placeholder="Your E-mail address" />
                                        <button type="button">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TOP 버튼 */}
                        <a href="#top" className="btn-top">
                            <span>∧</span>
                            <span>TOP</span>
                        </a>
                    </div>

                    {/* 하단 약관 및 저작권 */}
                    <div className="footer-bottom-area">
                        <div className="footer-policy">
                            <a href="#">개인정보처리방침</a> | <a href="#">이용약관</a> | <a href="#">이메일수집거부</a> | <a href="#">사이트맵</a>
                        </div>
                        <p className="copyright">
                            어보브반도체 주식회사 COPYRIGHT 2021 ABOV Semiconductor Co., Ltd. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App