import "./widget.scss";
import { KeyboardArrowUp,PersonOutline,AccountBalanceWalletOutlined,ShoppingCartOutlined,MonetizationOnOutlined } from "@mui/icons-material";

const Widget = ({type}) =>{
let data;

const amount = 100;
const diff = 20;

switch(type){
    case "User":
        data = {
            title:type,
            isMoney:false,
            link:"See all Users",
            icon: <PersonOutline className="icon" style={{
                color:"crimson",
                backgroundColor:"rgba(255,0,0,0.2)"
            }}/>,
            
        };
        break;
    case "Order":
            data = {
                title:type,
                isMoney:false,
                link:"See all Order",
                icon: <ShoppingCartOutlined className="icon" style={{
                    color:"goldenrod",
                    backgroundColor:"rgba(218,165,32,0.2)"
                }}/>
            };
        break;
    case "Earning":
            data = {
                title:type,
                isMoney:true,
                link:"View net earning",
                icon: <MonetizationOnOutlined className="icon" style={{
                    color:"green",
                    backgroundColor:"rgba(0,128,0,0.2)"
                }}/>
            };
        break;
    case "Balance":
            data = {
                title:type,
                isMoney:true,
                link:"See details",
                icon: <AccountBalanceWalletOutlined className="icon" style={{
                    color:"purple",
                    backgroundColor:"rgba(128,0,128,0.2)"
                }}/>
            };
        break;
    default:
        break;
}

    return <div className="widget">
        
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="title">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            
            <div className="percentage positive">
            <KeyboardArrowUp/>{diff}%</div>
            {data.icon}
        </div>
    </div>
}

export default Widget;