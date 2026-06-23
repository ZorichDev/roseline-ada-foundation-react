export default function BlogSlider() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Blog Slider</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Blog Slider</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Blog Slder area start */}
    <div className="blog-slider-page pt-120 pb-90 rel z-1">
        <div className="container">
            <div className="blog-page-slider">
                <div className="blog-item">
                    <div className="blog-item__img">
                        <img src="/assets/img/blog/blog1.jpg" alt="Blog"/>
                        <div className="post-date">
                            <b>13</b>
                            <span>dec</span>
                        </div>
                    </div>
                    <div className="blog-item__content">
                        <ul className="blog-meta">
                            <li><i className="flaticon-user"></i> <a href="#">Wade Warren</a></li>
                            <li><i className="flaticon-bubble-chat"></i> <a href="#">05 Comment</a></li>
                        </ul>
                        <h4><a href="/blog-details">tincidunt egeting semper</a></h4>
                        <p>Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......
                        </p>
                        <a href="/blog-details" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-item__img">
                        <img src="/assets/img/blog/blog2.jpg" alt="Blog"/>
                        <div className="post-date">
                            <b>15</b>
                            <span>dec</span>
                        </div>
                    </div>
                    <div className="blog-item__content">
                        <ul className="blog-meta">
                            <li><i className="flaticon-user"></i> <a href="#">Wade Warren</a></li>
                            <li><i className="flaticon-bubble-chat"></i> <a href="#">05 Comment</a></li>
                        </ul>
                        <h4><a href="/blog-details">Aenean viverra rhoncus </a></h4>
                        <p>Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......
                        </p>
                        <a href="/blog-details" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-item__img">
                        <img src="/assets/img/blog/blog3.jpg" alt="Blog"/>
                        <div className="post-date">
                            <b>18</b>
                            <span>dec</span>
                        </div>
                    </div>
                    <div className="blog-item__content">
                        <ul className="blog-meta">
                            <li><i className="flaticon-user"></i> <a href="#">Wade Warren</a></li>
                            <li><i className="flaticon-bubble-chat"></i> <a href="#">05 Comment</a></li>
                        </ul>
                        <h4><a href="/blog-details">Donec vitae sapien libro</a></h4>
                        <p>Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......
                        </p>
                        <a href="/blog-details" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="blog-item">
                    <div className="blog-item__img">
                        <img src="/assets/img/blog/blog5.jpg" alt="Blog"/>
                        <div className="post-date">
                            <b>20</b>
                            <span>dec</span>
                        </div>
                    </div>
                    <div className="blog-item__content">
                        <ul className="blog-meta">
                            <li><i className="flaticon-user"></i> <a href="#">Wade Warren</a></li>
                            <li><i className="flaticon-bubble-chat"></i> <a href="#">05 Comment</a></li>
                        </ul>
                        <h4><a href="/blog-details">tincidunt egeting semper</a></h4>
                        <p>Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......
                        </p>
                        <a href="/blog-details" className="read-more">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Blog Slder area end */}

    
        </>
    )
}
