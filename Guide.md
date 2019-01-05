Color Codes :
orange rgba(229, 52, 17, 1);

blue rgba(34, 19, 51, 1);

gray rgba(135, 127, 144, 1);

white rgba(255, 255, 255, 1);

Pinkish Red rgba(252, 8, 41, 1);

border-gray rgba(207, 207, 207, 1);

//---------------------------------------------------------------
Rulers
HTML :---------------------------------------
<div class="rule rule1"></div>
<div class="rule rule2"></div>
<div class="rule rule3"></div>
<div class="rule rule4"></div>

css :--------------------------------
.rule {
  background: grey;
  position: absolute;
}
.rule1{
  height: 100vh;
  width: 5px;
  left: 10px;
  top:0;
}
.rule2{
  height: 100vh;
  width: 5px;
  right: 50px;
  top:0;
}
.rule3{
  height: 5px;
  width: 100vw;
  top: 10px;
  left: 0;
}
.rule4{
  height: 5px;
  width: 100vw;
  bottom: 50px;
  left: 0;
}

//--------------------------------------------------------------
HTML :------------------------------------
<div class="hero" id="home">
  <h1>Citronics 2019</h1>
  <br />
  <br />
  <p>Back with a bang !<br />
     Centeral India's Biggest<br />
     TechFest</p>
  <br />
  <br />
  <div class="scrollDown">
    <img id="mouseIcon" src="images/mouse.svg" alt="mouse down"/>
    <br />
    <br />
    <i class="fa  fa-angle-double-down"></i>
  </div> <!-- scroll end -->
</div> <!-- home end -->

css :---------------------------------
#home {

  width: 100%;
  text-align: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

#mouseIcon {
  height: 30px;
}
// -------------------------------------
