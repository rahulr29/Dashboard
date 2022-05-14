import "./datatable.scss"

const Datatable = () => {
  return (
    <div className="datatable">
            
            <ul>
           
            <div className="team">
            <table cellPadding="8" cellspacing="10">
                <tr>
                <td><h1 align="middle">Team Members</h1></td>
                <td><h1 align="middle">Comparison</h1></td>
            
                </tr>
                
                    <tr>
             <td> <li className="a1">
                
                <img className="a2" hspace="100"  align="left" src = "https://cdn.pixabay.com/photo/2016/11/29/04/54/photographer-1867417_960_720.jpg"/>
                Andrew Johnston
                
                </li>
                </td>
               
             <td> <li className="a1">
              <img className="a3" hspace="100" src = "https://cdn.pixabay.com/photo/2012/04/13/12/28/flag-32195_960_720.png"/>

                  United States
                  <p><hr className="hr1" /></p>
                  <p>93%</p>
                  </li></td>
                  </tr>
                  <tr>
                      <td>
              <li className="a1">
              <img className="a2" hspace="100"  src = "https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_960_720.jpg"/>

                  Mark Atkinosons</li>
                  </td>
                  <td>
              <li className="a1">
              <img className="a3" hspace="100"  src = "https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_960_720.png"/>

                  Italy
                  <p><hr className="hr2" /></p>
                  <p>73%</p>
                  
                  </li>
                  </td>
                  </tr>
                  <tr>
                      <td>
              <li className="a1">
              <img className="a2" hspace="100"  src = "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"/>

                  Mark Atkinosons</li>
                  </td>
                  <td>
              <li className="a1">
              <img className="a3" hspace="100"  src = "https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428_960_720.png"/>

                  Spain <p><hr className="hr3" /></p>
                  <p>13%</p>
                  </li>
                  
                  </td>
                  </tr>
                  <tr>
                      <td>
              <li className="a1">
              <img className="a2" hspace="100"  src = "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"/>

                  Mark Atkinosons</li>
                  </td>
  
                  </tr>
                  
              </table>

              </div>
              </ul>
           

    </div>

    
  )
}

export default Datatable