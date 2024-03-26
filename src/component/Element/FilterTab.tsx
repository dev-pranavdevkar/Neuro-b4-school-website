import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, { SRLWrapper, useLightbox } from 'simple-react-lightbox'; // Combined import statement for SimpleReactLightbox

// Define image paths
const gallery1 = '/images/gallery/pic1.jpg';
const gallery2 = '/images/gallery/pic2.jpg';
const gallery3 = '/images/gallery/pic3.jpg';
const gallery4 = '/images/gallery/pic4.jpg';
const gallery5 = '/images/gallery/pic5.jpg';
const gallery6 = '/images/gallery/pic6.jpg';

// Define image data
const imageBlog = [
    { Large_img: gallery1, tag: ['Art', 'Math'] },
    { Large_img: gallery2, tag: ['Physical Education'] },
    { Large_img: gallery3, tag: ['Art', 'Physical Education'] },
    { Large_img: gallery4, tag: ['English', 'Physical Education'] },
    { Large_img: gallery5, tag: ['Art'] },
    { Large_img: gallery6, tag: ['Physical Education'] },
    { Large_img: gallery1, tag: ['English'] },
    { Large_img: gallery2, tag: ['English'] },
    { Large_img: gallery3, tag: ['Math'] },
    { Large_img: gallery4, tag: ['Math'] },
    { Large_img: gallery3, tag: ['Math'] },
    { Large_img: gallery6, tag: ['Math'] },
];

// Light Gallery Icon component
const Iconimage = ({ imageToOpen }: { imageToOpen: number | string }) => {
    const { openLightbox } = useLightbox();
    return (
        <Link href="#" onClick={() => openLightbox(Number(imageToOpen))} className="">
            <i className="fa fa-search icon-bx-xs"></i>
        </Link>
    );
};

// Masonry section options
const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

// FilterTab component
function FilterTab() {
    const [tag, setTag] = useState('Show All');
    const [filteredImages, setFilteredImages] = useState<{ Large_img: string; tag: string[]; }[]>([]);

    useEffect(() => {
        // Filter images based on selected tag
        setFilteredImages(tag === 'Show All' ? imageBlog : imageBlog.filter(image => image.tag.includes(tag)))
    }, [tag]);

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
                                    {['Show All', 'English', 'Art', 'Math', 'Physical Education'].map((name, index) => (
                                        <TagLi key={index} name={name} handlesettag={setTag} tagActive={tag === name} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SimpleReactLightbox>
                <SRLWrapper >
                    <div className="row dlab-gallery-listing gallery-grid-4 gallery mfp-gallery" data-wow-duration="2s" data-wow-delay="0.2s">
                        {/* <Masonry
                            className={'my-gallery-class'} // Masonry component
                            options={masonryOptions}
                            disableImagesLoaded={false}
                            updateOnEachImageLoad={false}
                            imagesLoadedOptions={imagesLoadedOptions}
                        > */}
                            {/* Render filtered images */}
                            {filteredImages.map((item, index) => (
                                <div className="Art card-container col-lg-3 col-md-6 col-sm-6 wow zoomIn" key={index}>
                                    <div className="dlab-box frame-box m-b30">
                                        <div className="dlab-thum dlab-img-overlay1">
                                            <img src={item.Large_img} alt="" />
                                            <div className="overlay-bx">
                                                <div className="overlay-icon">
                                                    {/* Pass imageToOpen prop */}
                                                    <Iconimage imageToOpen={item.Large_img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        {/* </Masonry> */}
                        {/* Masonry issue solved */}
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    );
}

// TagLi component
const TagLi = ({ name, handlesettag, tagActive }: { name: string; handlesettag: Function; tagActive: boolean }) => {
    return (
        <li className={`tag ${tagActive ? 'btn active' : 'btn'}`} onClick={() => handlesettag(name)}>
            <input type="radio" />
            <a><span>{name}</span></a>
        </li>
    );
};

export default FilterTab;
