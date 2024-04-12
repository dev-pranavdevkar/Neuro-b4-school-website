import React, { Component } from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import axiosInstance from '@/services/axios';
import { teamMembers } from '@/constants/db';

interface BranchData {
  id: string;
  name: string;
  city_name: string;
  mobile_number: string;
  map_url: string;
  facebook_url: string;
  google_plus_url: string;
  linkedin_url: string;
  instagram_url: string;
  branchData: {}; 
}

interface TeacherSliderProps {
  branchData: BranchData | null;
}

interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
}

class TeacherSlider extends Component<TeacherSliderProps> {
  slider: Slider | null = null;
  loggedBranchData: boolean = false;

  constructor(props: TeacherSliderProps) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {
    this.fetchBranchData();
  }

  componentDidUpdate(prevProps: TeacherSliderProps) {
    if (this.props.branchData !== prevProps.branchData) {
      console.log("Branch Data Updated:", this.props.branchData);
      this.loggedBranchData = true;
    }
  }

  fetchBranchData() {
    axiosInstance.get(`api/customer/v1/ourTeam/getAllTeam`)
      .then((response) => {
        const branchData: BranchData = response.data; // Assuming the response data is in the correct format
        console.log("Fetched Branch Data:", branchData);
        // Update state or do any necessary action with the fetched branchData
      })
      .catch((error) => {
        console.error('Error fetching Branch Data:', error);
      });
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
    const { branchData } = this.props;

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
          <p>{branchData ? `id: ${branchData.id}` : 'Branch data not available'}</p>
          <Slider className="team-carousel owl-carousel owl-theme dots-none" ref={(c: Slider | null) => (this.slider = c)} {...settings}>
            {teamMembers.map((item, index) => (
              <div className="item" key={index}>
                <div className="dlab-box box-frame1 team-box">
                  <div className="dlab-thum">
                    <Link href={`/team/${item.id}`}>
                      <Image src={item.image} width={285} height={228} alt={item.name} />
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
