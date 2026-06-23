export default function BlogClasic() {
    return (
        <>


    {/* page banner start */}
    <div className="page-banner-area bgs-cover overlay text-white py-165 rpy-125 rmt-65"
        style={{ backgroundImage: "url(\"/assets/img/background/page-banner.jpg\")" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                    <div className="breadcrumb-inner text-center">
                        <h2 className="page-title">Blog Clasic</h2>
                        <ul className="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Blog Clasic</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* page banner end */}

    {/* Blog Clasic area start */}
    <div className="blog-clasic-area py-120">
        <div className="container">
            <div className="row gap-60">
                <div className="col-lg-8">
                    <div className="blog-item blog-item--clasic">
                        <div className="blog-item__img">
                            <img src="/assets/img/close-up-kids-looking-smartphone.jpg" alt="Blog Clasic"/>
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
                            <h4><a href="/blog-details">Katie Stewart Your charity may be net zero </a></h4>
                            <p>A Bedfordshire-based charity for older people has announced it will be closing, after the
                                Covid-19 pandemic led to a drop in funding and an enduring decline in service users.
                                Does this mean getting lots of sleep would have the reverse effect? Would one become the
                                best person to ever have lived.</p>
                            <a href="/blog-details" className="read-more">Read More</a>
                        </div>
                    </div>
                    <div className="blog-item blog-item--clasic">
                        <div className="blog-item__img">
                            <img src="/assets/img/medium-shot-african-kids-window.jpg" alt="Blog Clasic"/>
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
                            <h4><a href="/blog-details">Charity to close after 60 years due to pandemic</a></h4>
                            <p>A Bedfordshire-based charity for older people has announced it will be closing, after the
                                Covid-19 pandemic led to a drop in funding and an enduring decline in service users.
                                Does this mean getting lots of sleep would have the reverse effect? Would one become the
                                best person to ever have lived.</p>
                            <a href="/blog-details" className="read-more">Read More</a>
                        </div>
                    </div>
                    <div className="blog-item blog-item--clasic">
                        <div className="blog-item__img">
                            <img src="/assets/img/medium-shot-kids-posing-outdoors.jpg" alt="Blog Clasic"/>
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
                            <h4><a href="/blog-details">Hedgehogs in charity bags and offensive sculptures</a></h4>
                            <p>A Bedfordshire-based charity for older people has announced it will be closing, after the
                                Covid-19 pandemic led to a drop in funding and an enduring decline in service users.
                                Does this mean getting lots of sleep would have the reverse effect? Would one become the
                                best person to ever have lived.</p>
                            <a href="/blog-details" className="read-more">Read More</a>
                        </div>
                    </div>
                    <div className="blog-item blog-item--clasic">
                        <div className="blog-item__img">
                            <img src="/assets/img/" alt="Blog Clasic"/>
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
                            <h4><a href="/blog-details">Katie Stewart Your charity may be net zero </a></h4>
                            <p>A Bedfordshire-based charity for older people has announced it will be closing, after the
                                Covid-19 pandemic led to a drop in funding and an enduring decline in service users.
                                Does this mean getting lots of sleep would have the reverse effect? Would one become the
                                best person to ever have lived.</p>
                            <a href="/blog-details" className="read-more">Read More</a>
                        </div>
                    </div>
                    <div className="pagination">
                        <a className="prev page-numbers" href="#"><i className="flaticon-left-chevron"></i></a>
                        <a className="page-numbers" href="#">1</a>
                        <span className="page-numbers current">2</span>
                        <a className="page-numbers" href="#">3</a>
                        <a className="page-numbers" href="#">4</a>
                        <span className="page-numbers"><i className="fa fa-ellipsis-h"></i></span>
                        <a className="next page-numbers" href="#"><i className="flaticon-chevron"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="main-sidebar rmt-75">
                        <div className="widget widget_search">
                            <h5 className="widget-title">Search Causes</h5>
                            <form className="search-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Search key word" required/>
                                </div>
                                <button className="submit-btn" type="submit"><i
                                        className="flaticon-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <div className="widget widget_catagory">
                            <h5 className="widget-title">News Categories</h5>
                            <ul className="catagory-items">
                                <li><a href="/blog">Foods for homeless Child</a></li>
                                <li><a href="/blog">African People</a></li>
                                <li><a href="/blog">Education all poor child</a></li>
                                <li><a href="/blog">Upcoming news about event</a></li>
                                <li><a href="/blog">Downation for help</a></li>
                            </ul>
                        </div>
                        <div className="widget widget-recent-post">
                            <h4 className="widget-title">Recent News</h4>
                            <ul>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="/assets/img/3.jpg " alt="Post"/>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="title"><a href="/blog-details">Desktop publishing sotware
                                                    like aldus page</a></h6>
                                            <ul className="post-info">
                                                <li><i className="flaticon-time"></i> <a href="#">12 Dec, 2022</a></li>
                                                <li><i className="fas fa-user"></i> <a href="#">Robert Fox</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="/assets/img/2.jpg" alt="Post"/>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="title"><a href="/blog-details">Desktop publishing sotware
                                                    like aldus page</a></h6>
                                            <ul className="post-info">
                                                <li><i className="flaticon-time"></i> <a href="#">12 Dec, 2022</a></li>
                                                <li><i className="fas fa-user"></i> <a href="#">Robert Fox</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="/assets/img/1.jpg" alt="Post"/>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="title"><a href="/blog-details">Desktop publishing sotware
                                                    like aldus page</a></h6>
                                            <ul className="post-info">
                                                <li><i className="flaticon-time"></i> <a href="#">12 Dec, 2022</a></li>
                                                <li><i className="fas fa-user"></i> <a href="#">Robert Fox</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget_tag_cloud">
                            <h5 className="widget-title">Tags</h5>
                            <div className="tagcloud">
                                <a href="#">Charity</a>
                                <a href="#">African people</a>
                                <a href="#">Community</a>
                                <a href="#">Food</a>
                                <a href="#">Clean Water</a>
                                <a href="#">Education</a>
                                <a href="#">Health</a>
                                <a href="#">Volunteers</a>
                                <a href="#">Homeless child</a>
                            </div>
                        </div>
                        <div className="widget widget_cta">
                            <div className="cta-widget-inner" style={{ backgroundImage: "url(\"/assets/img/widgets/cta-bg.jpg\")" }}>
                                <h5>We have provided financial help to 5 million people</h5>
                                <a className="btn ml-5" href="/donate">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Blog Clasic area end */}

    
        </>
    )
}
