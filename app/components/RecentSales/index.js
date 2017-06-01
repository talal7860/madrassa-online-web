import React from 'react';


class RecentSales extends React.Component {
  render() {
		 return (
  <div className="row">
    <div className="col-md-12 col-lg-12 col-sm-12">
      <div className="white-box">
        <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
          <select className="form-control pull-right row b-none">
            <option>March 2017</option>
            <option>April 2017</option>
            <option>May 2017</option>
            <option>June 2017</option>
            <option>July 2017</option>
          </select>
        </div>
        <h3 className="box-title">Recent sales</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="txt-oflo">Elite admin</td>
                <td>SALE</td>
                <td className="txt-oflo">April 18, 2017</td>
                <td><span className="text-success">$24</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td className="txt-oflo">Real Homes WP Theme</td>
                <td>EXTENDED</td>
                <td className="txt-oflo">April 19, 2017</td>
                <td><span className="text-info">$1250</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td className="txt-oflo">Ample Admin</td>
                <td>EXTENDED</td>
                <td className="txt-oflo">April 19, 2017</td>
                <td><span className="text-info">$1250</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td className="txt-oflo">Medical Pro WP Theme</td>
                <td>TAX</td>
                <td className="txt-oflo">April 20, 2017</td>
                <td><span className="text-danger">-$24</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td className="txt-oflo">Hosting press html</td>
                <td>SALE</td>
                <td className="txt-oflo">April 21, 2017</td>
                <td><span className="text-success">$24</span></td>
              </tr>
              <tr>
                <td>6</td>
                <td className="txt-oflo">Digital Agency PSD</td>
                <td>SALE</td>
                <td className="txt-oflo">April 23, 2017</td>
                <td><span className="text-danger">-$14</span></td>
              </tr>
              <tr>
                <td>7</td>
                <td className="txt-oflo">Helping Hands WP Theme</td>
                <td>MEMBER</td>
                <td className="txt-oflo">April 22, 2017</td>
                <td><span className="text-success">$64</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
		 );
  }
}

export default RecentSales;
