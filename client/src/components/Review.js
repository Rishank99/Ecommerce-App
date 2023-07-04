import React from 'react'

const Review = () => {
  return (
    <section className="review" id="review">

    <h3 className="sub-heading"> Customer's Review </h3>
    <h1 className="heading"> What they say </h1>

    <div className="swiper-container review-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <div className="user-info">
                        <h3>Amit Singh</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores inventore atque nihil nemo mollitia commodi dolorem distinctio laborum facere nulla necessitatibus id perferendis reiciendis voluptatibus illo ea, qui modi ab.</p>
            </div>

            <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    
                    <div className="user-info">
                        <h3>Shreya Gupta</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in, tenetur praesentium veritatis iure exercitationem hic, sapiente ullam eum suscipit voluptatum ipsam incidunt aliquid cupiditate eaque quo, repudiandae fuga molestias.</p>
            </div>

            <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                  
                    <div className="user-info">
                        <h3>Ajay</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquam fugit. Reiciendis velit esse explicabo est, molestiae laudantium dignissimos quia ipsa distinctio nemo, obcaecati corrupti eveniet officiis magni ipsam ullam?</p>
            </div>

        </div>

    </div>
    
</section>
  )
}

export default Review
