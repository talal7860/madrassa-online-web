import React from 'react';

class DataWidget extends React.Component{
	render(){
		 return(
		   	<div className="row">
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Total Visit</h3>
                            <ul className="list-inline two-part">
                                <li>
                                    <div id="sparklinedash"></div>
                                </li>
                                <li className="text-right"><i className="ti-arrow-up text-success"></i> <span className="counter text-success">659</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Total Page Views</h3>
                            <ul className="list-inline two-part">
                                <li>
                                    <div id="sparklinedash2"></div>
                                </li>
                                <li className="text-right"><i className="ti-arrow-up text-purple"></i> <span className="counter text-purple">869</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Unique Visitor</h3>
                            <ul className="list-inline two-part">
                                <li>
                                    <div id="sparklinedash3"></div>
                                </li>
                                <li className="text-right"><i className="ti-arrow-up text-info"></i> <span className="counter text-info">911</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
		 )
	}
}

export default DataWidget;