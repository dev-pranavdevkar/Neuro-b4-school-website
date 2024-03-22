import React, { Component } from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import { teamMembers } from '@/constants/db';

interface TeacherSliderProps {
  // Define props here if any
}

interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
}


class TeacherSlider extends Component<TeacherSliderProps> {
  slider: Slider | null = null;

  constructor(props: TeacherSliderProps) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    if (this.slider) {
      this.slider.slickNext();
    }
  }

  previous() {
    if (this.slider) {
      this.slider.slickPrev();
    }
  }

  render() {
    var settings = {
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };

    return (
      <>
        <div className="sprite-nav">
          <Slider className="team-carousel owl-carousel owl-theme dots-none  " ref={c => (this.slider = c)} {...settings}>
            {teamMembers.map((item, index) => (
              <div className="item" key={index}>
                <div className="dlab-box box-frame1 team-box">
                  <div className="dlab-thum">
                    <Link href={`/team/${item.id}`}>
                      <Image src={item.image}
                        width={285}
                        height={228}
                        alt="" />
                    </Link>
                    <div className="overlay-bx">
                      <h5 className="team-title"><Link href={`/team/${item.id}`}>{item.name}</Link></h5>
                      <span className="team-info">{item.role}</span>
                      <ul className="list-inline">
                        <li><Link href={'#'}><i className="fa fa-facebook"></i></Link></li>
                        <li><Link href={'#'}><i className="fa fa-google-plus"></i></Link></li>
                        <li><Link href={'#'}><i className="fa fa-linkedin"></i></Link></li>
                        <li><Link href={'#'}><i className="fa fa-instagram"></i></Link></li>
                        <li><Link href={'#'}><i className="fa fa-twitter"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="owl-nav" style={{ textAlign: "center" }}>
            <div className=" owl-prev " onClick={this.previous} />
            <div className="owl-next " onClick={this.next} />
          </div>
        </div>
      </>
    )
  }
}

export default TeacherSlider;
