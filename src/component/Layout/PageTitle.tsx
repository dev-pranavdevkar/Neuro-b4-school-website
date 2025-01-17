import React, { Fragment } from 'react';
import Link from 'next/link';

const bnr = '/images/pattern/pattern.jpg';

interface PageTitleProps {
  motherMenu: string;
  activeMenu: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ motherMenu, activeMenu }) => {
  return (
    <Fragment>
      <div className="dlab-bnr-inr" style={{backgroundImage: `url(${bnr})`, backgroundSize: "auto"}}>
        <div className="container">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">{motherMenu}</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li><Link href={"./"}><i className="fa fa-home"></i></Link></li>
                <li>Home</li>
                <li>{activeMenu}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageTitle;
