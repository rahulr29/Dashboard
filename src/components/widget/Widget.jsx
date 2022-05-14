import "./widget.scss"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MoneyIcon from '@mui/icons-material/Money';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
const Widget = ({ type }) => {
    let data;
    //temporary
    const amount = 100;
    const a1 =299;
    const diff = 20;
    switch(type){
        case "user":
        data={
            title:"BALANCE",
            isMoney: true,
            icon: <AccountBalanceWalletIcon
            className="Icon" 
            style={{color:"crimson",backgroundColor: "rgba(255, 0, 0, 0.2)"}} />,
        };
        break;
            case "order":
                data={
                    title:"PROFITS",
                    isMoney: true,
                    icon: <MoneyIcon 
                    className="Icon"
                    style={{backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod"}} />
                };
                break;
                case "earning":
                    data={
                        title:"LOSSES",
                        isMoney: true,
                        icon: <SentimentNeutralIcon 
                        className="Icon"
                        style={{backgroundColor: "rgba(0, 128, 0, 0.2)"}} />,
                    };
                    break;
                    case "balance":
                        data={
                            title:"CURRENCIES",
                            isMoney: false,
                            icon: <AccountBalanceWalletOutlinedIcon 
                            className="Icon" 
                            style={{backgroundColor: "rgba(128, 0, 128, 0.2)", 
                            color: "purple"}}
                             />,
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

export default Widget