
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Datatable from "../../components/datatable/Datatable";


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar />
       <div className="widgets">
         <Widget type="user"/>
         <Widget type="order"/>
         <Widget type="earning"/>
         <Widget type="balance"/>
       </div>
       <div className="featured">
         <Featured type="Itlay"/>
         <Featured type="United States"/>
         <Featured type="Canada"/>
         <Featured type="Spain"/>
         <Featured type="Japan"/>
         <Featured type="South Africa"/>
       </div>
        <div className="datatable">
          <Datatable/>
        </div>
       <div className="charts">
 
       </div>
      </div>
    </div>
  );
};

export default Home;