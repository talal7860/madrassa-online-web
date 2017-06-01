import React from 'react';


class Breadcrumbs extends React.Component {
  render() {
		 return (
  <div className="row bg-title">
    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
      <h4 className="page-title">Dashboard</h4> </div>
    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
      <a href="https://wrappixel.com/templates/ampleadmin/" target="_blank" className="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Upgrade to Pro</a>
      <ol className="breadcrumb">
        <li><a href="#">Dashboard</a></li>
      </ol>
    </div>

  </div>
		 );
  }
}

export default Breadcrumbs;
