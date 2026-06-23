export default function NotFound() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Error Page</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>404</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* 404 Error start */}
    <div className="error-page-area py-120 text-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <img src="/assets/img/404.png" alt="404 Error"/>
                    <div className="section-title pt-55 mb-50">
                        <h2>Opps! This page not fund</h2>
                        <p>Page does not fund or some other error occured. Go to our Home page</p>
                    </div>
                    <a href="/" className="btn">Go to home page</a>
                </div>
            </div>
        </div>
    </div>
    {/* 404 Error end */}

    
        </>
    )
}
