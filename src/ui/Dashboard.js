import React, { useState } from "react";
import Jane from "../fashionImages/jane.jpg";
import GirlHat from "../fashionImages/girl_hat.jpg";
import Avatar from "../fashionImages/avatar_girl2.jpg";
import AvatarSmoke from "../fashionImages/avatar_smoke.jpg";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from  "../redux/store/slice/counterSlice"

const Dashboard = () => {
  const [count, setCount] = useState(0);

  const count1 = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [timeListValue,settimeListValue] = useState("")
  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" },
  ];

  const filterByTerm = () => {
    var obj = { id: 3, url: "https://www.link3.dev" };
    console.log("object", obj);
    setCount(count + 1);
    return obj;
  };
  const handlechange = (e) => {
  settimeListValue(e.target.value)
  };

  return (
    <div>
      <header>
        <div className="headerSection">
          <div className="headerLeftSection">
            <label>Insta</label>
            <label>Facebook</label>
            <label>Whatsapp</label>
            <label>{count1}</label>
            <select id="dropdown" onChange={handlechange} value={timeListValue}>
              {input.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.url}
                  </option>
                );
              })}
            </select>{" "}
          </div>
          <div>
            <label>Login</label>
          </div>
        </div>
      </header>
      <body>
        <div>
          <div className="displayFlexColumn kingHeader">
            <h1>King BLOGLIFE</h1>
            <h4>Welcome to the blog of janes world.</h4>
          </div>

          <div className="divRelative">
            <img src={Jane} alt="jane" />
            <div className="divAbsolute">
              <h3 style={{ marginBottom: "1rem" }}>King's </h3>
              <h2>Fashion Blog</h2>
              <button id="filterButton" onClick={()=>{dispatch(increment())}}>
                Subscribe
              </button>
            </div>
          </div>

          <div className="displayFlexMediaQuery subSectionDesign">
            <div className="displayTitleBox">
              <div className="displayFlexColumn justContentAndAlignCenter">
                <h6 data-testid="title">Title Heading</h6>

                <h6>Title Description,May 2,2016.</h6>
              </div>

              <img src={GirlHat} alt="hat"></img>
              <p>
                More Hats! I am crazy about hats these days. Some text about
                this blog entry. Fashion fashion and mauris neque quam,
                fermentum ut nisl vitae, convallis maximus nisl. Sed mattis this
                blog entry. Fashion fashion and mauris neque quam, fermentum ut
                nisl vitae, convallis maximus nisl. Sed mattis
              </p>
              <p>
                More Hats! I am crazy about hats these days. Some text about
                this blog entry. Fashion fashion and mauris neque quam,
                fermentum ut nisl vitae, convallis maximus nisl. Sed mattis this
                blog entry. Fashion fashion and mauris neque quam, fermentum ut
                nisl vitae, convallis maximus nisl. Sed mattis
              </p>
            </div>
            <div className="displayFlexWith3columns ">
              <div className="displayFlexColumn">
                <img src={Avatar} alt="hat"></img>
                <div className="titleName">
                  <h5>My Name</h5>
                  <h5>
                    Just me, myself and I, exploring the universe of uknownment.
                    I have a heart of love and a interest of lorem ipsum and
                    mauris neque quam blog. I want to share my world with you.
                  </h5>
                </div>
              </div>

              <div
                className="displayFlexColumn"
                style={{ paddingTop: "1rem", margin: 0, width: "100%" }}
              >
                <div className="titleName">
                  <h5>My Popular post</h5>
                </div>
                <div class="displayFlex" style={{ padding: 5 }}>
                  <div class="image">
                    <img
                      src={AvatarSmoke}
                      alt="avatar"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div
                    className="displayFlexColumn"
                    style={{
                      marginLeft: "1em",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <h5 style={{ margin: 0 }}>Denim</h5>
                    <h5 style={{ margin: 0 }}>Sed mattis nunc</h5>
                  </div>
                </div>

                <hr className="solid" />

                <div class="displayFlex" style={{ padding: 5 }}>
                  <div class="image">
                    <img
                      src={AvatarSmoke}
                      alt="avatar"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div
                    className="displayFlexColumn"
                    style={{
                      marginLeft: "1em",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <h5 style={{ margin: 0 }}>Denim</h5>
                    <h5 style={{ margin: 0 }}>Sed mattis nunc</h5>
                  </div>
                </div>

                <hr className="solid" />

                <div class="displayFlex" style={{ padding: 5 }}>
                  <div class="image">
                    <img
                      src={AvatarSmoke}
                      alt="avatar"
                      width="70"
                      height="70"
                    />
                  </div>
                  <div
                    className="displayFlexColumn"
                    style={{
                      marginLeft: "1em",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <h5 style={{ margin: 0 }}>Denim</h5>
                    <h5 style={{ margin: 0 }}>Sed mattis nunc</h5>
                  </div>
                </div>

                <hr className="solid" />
              </div>

              <div
                className="displayFlexColumn"
                style={{
                  paddingTop: "1rem",
                  margin: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="titleName">
                  <h5>My Popular post</h5>
                </div>
                <div
                  className="box"
                  style={{
                    height: "100%",
                    width: "auto",
                    backgroundColor: "grey",
                    border: "15px solid #f1f1f1",
                    padding: "30%",
                    margin: "0px",
                  }}
                >
                  <label style={{ display: "flex", justifyContent: "center" }}>
                    Your ad here.
                  </label>
                  {/* <div className="centerBox" style={{width:"80%" ,height:"80%",padding:"3rem" , backgroundColor:"red",margin:"0px" }}>
</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Dashboard;
