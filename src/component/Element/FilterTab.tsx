import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Masonry from "react-masonry-component";
import SimpleReactLightbox, {
  SRLWrapper,
  useLightbox,
} from "simple-react-lightbox"; // Combined import statement for SimpleReactLightbox
import axiosInstance from "@/services/axios";
import { baseUrl } from "@/config";

// Define image paths
const gallery1 = "/images/gallery/pic1.jpg";
const gallery2 = "/images/gallery/pic2.jpg";
const gallery3 = "/images/gallery/pic3.jpg";
const gallery4 = "/images/gallery/pic4.jpg";
const gallery5 = "/images/gallery/pic5.jpg";
const gallery6 = "/images/gallery/pic6.jpg";

// Define image data
const imageBlog = [
  { Large_img: gallery1, tag: ["Art", "Math"] },
  { Large_img: gallery2, tag: ["Physical Education"] },
  { Large_img: gallery3, tag: ["Art", "Physical Education"] },
  { Large_img: gallery4, tag: ["English", "Physical Education"] },
  { Large_img: gallery5, tag: ["Art"] },
  { Large_img: gallery6, tag: ["Physical Education"] },
  { Large_img: gallery1, tag: ["English"] },
  { Large_img: gallery2, tag: ["English"] },
  { Large_img: gallery3, tag: ["Math"] },
  { Large_img: gallery4, tag: ["Math"] },
  { Large_img: gallery3, tag: ["Math"] },
  { Large_img: gallery6, tag: ["Math"] },
];

interface ActivitiesData {
  id: string;
  name: string;
  description: string;
  region_id: number;
  isShowOnHomePage: boolean;
}

interface ActivitiesProps {
  branchData: BranchData | null; // Assuming BranchData is the type of branchData
  activitiesData: ActivitiesData[]; // Pass activitiesData as prop
}
interface TeamListProps {
  branchData: BranchData | null; // Assuming BranchData is the type of branchData
}
// Light Gallery Icon component
const Iconimage = ({ imageToOpen }: { imageToOpen: string }) => {
  const { openLightbox } = useLightbox();

  return (
    <Link href="#" onClick={() => openLightbox(imageToOpen)} className="">
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  );
};

// Masonry section options
const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

// FilterTab component
function FilterTab({ branchData, activitiesData }: ActivitiesProps) {
  const filterOptions = [
    { label: "Show All", value: "" },
    { label: "English", value: "english" },
    { label: "Art", value: "art" },
    { label: "Math", value: "math" },
    { label: "Physical Education", value: "physical-education" },
  ];
  const [tag, setTag] = useState(filterOptions[0]);
  // const [filteredImages, setFilteredImages] = useState<{ Large_img: string; tag: string[]; }[]>([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`api/customer/v1/gallery/getAllImages`)

      .then((response) => {
        const sortedData = response.data.data.rows.sort((a, b) => {
          // Convert id values to numbers for comparison
          const idA = parseInt(a.id);
          const idB = parseInt(b.id);

          // Compare the numeric values of the ids
          if (idA < idB) {
            return -1; // idA comes before idB
          } else if (idA > idB) {
            return 1; // idA comes after idB
          } else {
            return 0; // ids are equal
          }
        });
        setTeamMembers(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });
  }, []);

  useEffect(() => {}, [teamMembers]);

  const filteredTeamMembers = useMemo(() => {
    return branchData?.id
      ? teamMembers.filter((data) => data.region_id === branchData.id)
      : teamMembers.filter((data) => data.isShowOnHomePage);
  }, [branchData, teamMembers]);

  useEffect(() => {
    setFilterData(
      tag.label !== "Show All"
        ? filteredTeamMembers.filter((e) => e.category === tag.value)
        : filteredTeamMembers
    );
  }, [tag, filteredTeamMembers]);
  console.log(
    filterData,
    filteredTeamMembers,
    filteredTeamMembers.filter((e) => e.category === tag.value),
    tag
  );

  return (
    <div className="section-full content-inner">
      <div className="container-fluid">
        <div className="section-head text-center">
          <h2 className="head-title text-secondry">Activities of B4-School</h2>
        </div>
        <div className="clearfix" id="lightgallery">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="site-filters filter-style1 clearfix m-b20">
                <ul className="filters" data-toggle="buttons">
                  {/* Render tag list */}
                  {filterOptions.map((name, index) => (
                    <TagLi
                      key={index}
                      name={name}
                      handlesettag={setTag}
                      tagActive={tag.label === name.label}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div
            className="row dlab-gallery-listing gallery-grid-4 gallery mfp-gallery "
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            {/* Render filtered images */}
            {filterData.map((item, index) => (
              <div
                className="Art card-container col-lg-3 col-md-6 col-sm-6 wow zoomIn"
                key={index}
              >
                <div className="dlab-box  m-b30">
                  <div className="dlab-thum dlab-img-overlay1">
                    <img
                      src={`${baseUrl}${item.image}`}
                      alt=""
                      style={{
                        maxHeight: "200px",
                        width: "100%",
                        textAlign: "center",
                      }}
                    />
                    <div className="overlay-bx">
                      <div className="overlay-icon">
                        {/* Pass imageToOpen prop */}
                        <Iconimage imageToOpen={`${baseUrl}${item.image}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filterData.length == 0 && (
                 <div
                 className="Art card-container col-lg-12 col-sm-6 wow zoomIn"
               >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="card activity-card">
                  <div className="card-body">
                    <img
                      src="/images/nodata.jpg"
                      alt=""
                      className="activity-img"
                    />
                  </div>
                </div>
              </div>
              </div>

            )}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
}

// TagLi component
const TagLi = ({
  name,
  handlesettag,
  tagActive,
}: {
  name: any;
  handlesettag: Function;
  tagActive: boolean;
}) => {
  return (
    <li
      className={`tag ${tagActive ? "btn active" : "btn"}`}
      onClick={() => handlesettag(name)}
    >
      <input type="radio" />
      <a>
        <span>{name.label}</span>
      </a>
    </li>
  );
};

const ParentComponent = () => {
  const [activitiesData, setActivitiesData] = useState<ActivitiesData[]>([]);

  useEffect(() => {
    axiosInstance
      .get(`api/customer/v1/gallery/getAllImages`)
      .then((response) => {
        const sortedData = response.data.data.rows.sort(
          (a: ActivitiesData, b: ActivitiesData) => {
            return parseInt(a.id) - parseInt(b.id); // Sort by id
          }
        );
        setActivitiesData(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching Activities:", error);
      });
  }, []);

  return <FilterTab branchData={null} activitiesData={activitiesData} />;
};

export default ParentComponent;
