import {useState,useEffect} from "react";
import axios from "axios";
// <Home> => HTML을 호출 (return값을 받아서 출력)
function Home() {
    const [locations, setLocations] = useState([]);
    const [shops, setShops] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost/main_react")
        .then((res)=>{
            setLocations(res.data.list1);
            setShops(res.data.list2);
            setFoods(res.data.list3);
        })
    },[]) // deps : 변수가 있는 경우 : 변수값이 변경될때마다 함수 호출 / 없는 경우 최초 1회만 수행
    // 출력 준비
    return (
        <div className="container">
            <div className="row">
                <h3 className={"text-center"}>명소</h3>
                {
                    locations.map((loc) =>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="#">
                                    <img src={loc.poster} style={{"width":"230px","height":"130px"}}/>
                                    <div className="caption">
                                        <p>{loc.title}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
            <hr/>
            <div className="row">
                <h3 className={"text-center"}>음식</h3>
                {
                    foods.map((food) =>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="#">
                                    <img src={food.poster} style={{"width":"230px","height":"130px"}}/>
                                    <div className="caption">
                                        <p>{food.title}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
            <hr/>
            <div className="row">
                <h3 className={"text-center"}>쇼핑</h3>
                {
                    shops.map((shop) =>
                        <div className="col-md-3">
                            <div className="thumbnail">
                                <a href="#">
                                    <img src={shop.poster} style={{"width":"230px","height":"130px"}}/>
                                    <div className="caption">
                                        <p>{shop.title}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Home;