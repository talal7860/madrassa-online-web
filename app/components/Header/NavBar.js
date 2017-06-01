import styled from 'styled-components';

export default styled.div`
  
  .header{
   height:50px;
   background-color: #2c3742;
}

.header .logo h1{
   font-size:30px;
   margin:0px;
   padding:10px 0px;
}

.header .logo h1 a{
   color:#fff;
   font-family: 'Open Sans Condensed', sans-serif;
}

.header .logo h1 a:hover{
   color:#fff;
   text-decoration:none;
   border:0px;
}

.header .form{
   margin-top:10px;
   width:100%;
   max-width:300px;
   margin:10px auto;
}

.header .navbar *{
   box-shadow:none !important;
}

.header .navbar .label{
   font-size:12px;
   padding:4px 8px;
   margin:0px 2px;
   border-radius:15px !important;
}

.header .navbar{
   background:none !important;
   border:0px !important;
}

.header .navbar i{
   margin-right:3px;
}

.header .navbar .nav > li > a{
   color:#fff !important;
   font-size:13px !important;
   border-bottom:0px !important;
   margin-top:0px !important;
   font-weight:bold;
}

.header .navbar-nav>.open>a,.header  .navbar-nav>.open>a:hover,.header  .navbar-nav>.open>a:focus {
   background:none !important;
}

.header .navbar-collapse{
   border:0px !important;
}

.header .navbar-header{
   width:43px;
   margin:0 auto;
}

.header .navbar-header button{
   color:#fff !important;
   padding:5px 10px;
}

.header .navbar-toggle{
   background-color: #1dc1da !important;
   border:1px solid #0fa6bc !important;
}

.header .navbar-toggle:hover, .header .navbar-toggle:focus {
   background-color: #0fa6bc !important;
   border:1px solid #0fa6bc !important;
}

.header .dropdown-menu{
   border-radius:6px !important;
   background:#fff !important;
}

.header .dropdown-menu li{
   font-size:13px;
   padding:6px 15px;
   border-bottom:1px dashed #f3f3f3;
}

.header .dropdown-menu li a {
   color:#888;
   padding-left:0px !important;
}

.header .dropdown-menu li:last-child{
   border:0px;
}

.header .dropdown-menu li a:hover{
   background:none !important;
   color:#666 !important;
   border:0px !important;
}

.header .dropdown-big{
   min-width:300px;
}

.header .dropdown-big .dropdown-head{
   padding:7px 15px;
   background:#fcfcfc;
   border-bottom:1px solid #ddd;
   margin-top:-5px;
   border-top-left-radius:5px;
   border-top-right-radius:5px;
}

.header .dropdown-big .dropdown-title{
   font-size:13px;
   font-weight:bold;
   color:#999;
}

.header .dropdown-big .dropdown-body{
   background:#fff;
}

.header .dropdown-big .dropdown-foot{
   padding:7px 15px;
   background:#fcfcfc;
   border-top:1px solid #ddd;
   margin-bottom:-5px;
   border-bottom-left-radius:5px;
   border-bottom-right-radius:5px;
   font-size:12px;
}

.header .dropdown-big .dropdown-foot a{
   color:#888;
}

.header .dropdown-big .dropdown-foot a:hover{
   color:#555;
   border-bottom:0px;
}

.header .navbar-nav .caret{
   border-top-color:#fff !important;
   border-bottom-color:#fff !important;
}

.header .navbar-nav>.open>a .caret,.header  .navbar-nav>.open>a:hover .caret,.header  .navbar-nav>.open>a:focus .caret {
   border-top-color: #fff !important;
   border-bottom-color: #fff !important;
}

`;
