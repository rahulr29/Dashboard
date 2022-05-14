import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { color } from "@mui/system";

const Featured = ({type}) => {
  let data;
    //temporary
    const amount = 100;
    const diff = 20;
    switch(type){
        case "Itlay":
        data={
            title:"Italy",
            isMoney: true,
            icon: <ArrowDropUpSharpIcon
            className="Icon" 
            style={{color:"lightgreen"}} />,
        };
        break;
            case "United States":
                data={
                    title:"United States",
                    isMoney: true,
                    icon: <ArrowDropUpSharpIcon 
                    className="Icon"
                    style={{
                    color: "lightgreen"}} />
                };
                break;
                case "Canada":
                    data={
                        title:"Canada",
                        isMoney: true,
                        icon: <ArrowDropDownSharpIcon
                        className="Icon"
                        style={{color: "red"}} />,
                    };
                    break;
                    case "Spain":
                        data={
                            title:"Spain",
                            isMoney: true,
                            icon: <ArrowDropUpSharpIcon
                            className="Icon" 
                            style={{color: "lightgreen"}}
                             />,
                        };
                        break;
                        case "Japan":
                        data={
                            title:"Japan",
                            isMoney: true,
                            icon: <ArrowDropUpSharpIcon
                            className="Icon" 
                            style={{color: "lightgreen"}}/>,
                        };
                        break;
                        case "South Africa":
                        data={
                            title:"South Africa",
                            isMoney: true,
                            icon: <ArrowDropDownSharpIcon
                            className="Icon" 
                            style={{color: "red"}}/>,
                        };
                        break;
        default:
            break;
    }
    return(
        <div className="widget">

            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount} </span>
                
            </div>

            <div className="right">
                <div className="percentage positive">
                    <FileUploadIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Featured