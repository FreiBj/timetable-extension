<template>
  <div class="extension">
    <h1>Hi there! 👋 Hope you're doing great!</h1>
    
    <h1>Next up: <span>{{ classes.monday.first }}</span></h1>

    <div id="tabs" class="container">
  
      <div class="tabs">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Monday</a>
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Tuesday</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Wednesday</a>
        <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">Thursday</a>
        <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">Friday</a>
      </div>
  
      <div class="content">
        
        <div v-if="activetab === 1" class="tabcontent">
          <div v-for="data in classes" class="class" v-bind:style="{ 'background-color': data.color }">
            <h1>{{ data.time }} {{ data.first }}</h1>
          </div>
        </div>
        
        <div v-if="activetab === 2" class="tabcontent">
          <div v-for="data in classes" class="class" v-bind:style="{ 'background-color': data.color }">
            <h1>{{ data.first }}</h1>
          </div>
        </div>
        
        <div v-if="activetab === 3" class="tabcontent">
          <div v-for="data in classes" class="class" v-bind:style="{ 'background-color': data.color }">
            <h1>{{ data.first }}</h1>
          </div>
        </div>
        
        <div v-if="activetab === 4" class="tabcontent">
          <div v-for="data in classes" class="class" v-bind:style="{ 'background-color': data.color }">
            <h1>{{ data.time }}</h1>
          </div>
        </div>
        
        <div v-if="activetab === 5" class="tabcontent">
          <div v-for="data in classes" class="class" v-bind:style="{ 'background-color': data.color }">
            <h1>{{ data.color }}</h1>
          </div>
        </div>
        
      </div>
    </div>
    
    <table class="myTimetable">
      <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>09:30</td>
          <td>
            <div class="subject">Maths</div>
            <div class="room">A120</div>
          </td>
          <td>
            <div class="subject">Art</div>
            <div class="room">C1</div>
          </td>
          <td>
            <div class="subject">English</div>
            <div class="room">B21</div>
          </td>
          <td>
            <div class="subject">Maths</div>
            <div class="room">A120</div>
          </td>
          <td>
            <div class="subject">Geography</div>
            <div class="room">B101</div>
          </td>
        </tr>
        <tr>
          <td>10:40</td>
          <td>
            <div class="subject">Science</div>
            <div class="room">Lab1</div>
          </td>
          <td>
            <div class="subject">History</div>
            <div class="room">B104</div>
          </td>
          <td>
            <div class="subject">Spanish</div>
            <div class="room">C17</div>
          </td>
          <td>
            <div class="subject">P.E.</div>
            <div class="room">A Gym</div>
          </td>
          <td>
            <div class="subject">Maths</div>
            <div class="room">A120</div>
          </td>
        </tr>
        <!--<tr>-->
        <!--  <td colspan="6" class="break">Break</td>-->
        <!--</tr>-->
        <tr>
          <td>11:20</td>
          <td>
            <div class="subject">I.T.</div>
            <div class="room">ICT 1</div>
          </td>
          <td>
            <div class="subject">English</div>
            <div class="room">B21</div>
          </td>
          <td>
            <div class="subject">Musique</div>
            <div class="room">C5</div>
          </td>
          <td>
            <div class="subject">English</div>
            <div class="room">B21</div>
          </td>
          <td>
            <div class="subject">PSHE</div>
            <div class="room">A24</div>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="lunch">Lunch</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>
            <div class="subject">History</div>
            <div class="room">B104</div>
          </td>
          <td>
            <div class="subject">Drama</div>
            <div class="room">C17</div>
          </td>
          <td>
            <div class="subject">Maths</div>
            <div class="room">A120</div>
          </td>
          <td>
            <div class="subject">Geography</div>
            <div class="room">B101</div>
          </td>
          <td>
            <div class="subject">P.E.</div>
            <div class="room">A Gym</div>
          </td>
        </tr>
        <tr>
          <td>13:10</td>
          <td>
            <div class="subject">Spanish</div>
            <div class="room">C17</div>
          </td>
          <td>
            <div class="subject">Science</div>
            <div class="room">Lab1</div>
          </td>
          <td>
            <div class="subject">English</div>
            <div class="room">B21</div>
          </td>
          <td>
            <div class="subject">Science</div>
            <div class="room">Lab1</div>
          </td>
          <td>
            <div class="subject">R.E.</div>
            <div class="room">B18</div>
          </td>
        </tr>
      </tbody>
    </table>

    
    <table style="width:100%">
      <tr>
        <th>Clock</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
      </tr>
      
      <tr>
        <td class="not">09:30</td>
        <td class="not">10:30</td>
        <td class="not">11:30</td>
        <td class="not">12:30</td>
        <td class="not">13:00</td>
        <td class="not">14:00</td>
      </tr>
      
      <tr v-for="data in classes">
        <td>gym</td>
        <td>dd</td>
        <td>Math</td>
        <td>Gym</td>
        <td>Physical Education</td>
        <td>Last</td>
      </tr>
      
    </table>
    
    <ul v-for-object>
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>
    
  </div>
</template>

<script>
const browser = require("webextension-polyfill");

export default {
  data() {
    return {
      currentColor: "#FFF",
      currentPopupColor: "#FFF",
      message: "Hello, Vue!",
      activetab: 1,
      
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      
      classes: {
        monday: {first:"Engelsk", time:"12 30", color:"darkseagreen"},
        tuesday: {first:"Matte", time:"10 30", color:"darkgoldenrod"},
        wednesday: {first:"Naturfag", time:"10 30", color:"darkmagneta"},
        thursday: {first:"Gym", time:"10 30", color:"navy"},
        friday: {first:"UV", time:"10 30", color:"green"}
        
      }
    };
  },
  computed: {
    bodyColor: {
      get() {
        return this.$data.currentColor;
      },
      set(val) {
        this.$data.currentColor = val;

        // Once `bodyColor` changes it sends a
        // message that content script will be listening
        browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
          browser.tabs.sendMessage(tabs[0].id, {
            msg: { action: "change_body_color", value: val }
          });
        });
      }
    },

    popupBodyColor: {
      get() {
        return this.$data.currentPopupColor;
      },
      set(val) {
        // Once `popupBodyColor` changes, we change the popup
        // body color to the new value, no need to send message,
        // it's the same context
        this.$data.currentPopupColor = val;
        document.body.style.background = val;
      }
    }
  },

  methods: {
    // method called once popup button is clicked, at that moment sends a
    // message that content script will be listening and will do some action there
    writeInConsole() {
      browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        browser.tabs
          .sendMessage(tabs[0].id, { msg: { action: "print_in_console" } })
          .then(() => {
            alert(
              "Open the browser's console to see the magic. Need to have at least one tab in some page."
            );
          });
      });
    },
    greet: function(event) {
      alert(100);
    }
  }
};
</script>

<style>
@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
  width:700px;
  /*height:100px;*/
  /*margin:1em 1em;*/
  padding:0;
  
  font-family: "San Francisco" !important;
  font-size:1.5em;
  background-color: white;
  /*color:black;*/
  
  /*display:flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*flex-wrap:wrap;*/
  /*align-content: center;*/
  /*align-items: center;*/
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:black;
}
span { font-weight:200;}
button {color:black;}

div.class {
  width:100%;
  display:flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: darkmagenta;
  padding:1.5em;
}
  
table:not(.today-view) {
  border-collapse: collapse;
  width: 100%;
  display:none;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

h1 {
  text-align: center;
  font-family: "San Francisco";
  font-size:1.3em;
  font-weight: bold;
}

p {
  font-family: "San Francisco";
}

.myTimetable {
  width:100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.myTimetable tbody {
  background-color: #AAAAFF;
}

.myTimetable td {
  border: 1px solid black;
  padding: 6px;
  text-align: center;
}
.myTimetable tbody tr td:first-child {
  background-color: #FF0066;
  font-weight: bold;
}

.break, .lunch {
  background-color: #FF0066 !important;
}

.subject {
  font-size: 12pt;
  margin-bottom:4px;
}

.room {
  font-size: 10pt;
  font-style: italic;
}

/*Start new css*/
* {
  box-sizing: border-box;
}
.container {
  /*max-width: 620px;*/
  /*min-width: 420px;*/
  /*margin: 40px auto;*/
  /*font-family: Arial, Helvetica, sans-serif;*/
  font-size: 0.9em;
}

.tabs {
  overflow: hidden;
  width:60vw;
  display:flex;
  /*justify-content:space-evenly;*/
/*   margin-left: 20px; */
/*   margin-bottom: -2px; */
}

.tabs ul {
  list-style-type: none;
  /*margin-left: 20px;*/
}

.tabs a {
/*   float: left; */
  cursor: pointer;
  padding: 4px;
  transition: background-color 0.2s;
/*   border: 1px solid #ccc; */
  border-right: none;
  font-family:"San Francisco";
  font-weight:bolder;
/*   background-color: #f1f1f1; */
/*   border-radius: 10px 10px 0 0; */
  font-size:1.5em;
  flex:1;
  color:lightgray;
}

.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

.tabs a.active {
  background-color: #fff;
  color: black;
  /*border-bottom: 2px solid #fff;*/
  cursor: default;
  flex:2;
  display:flex;
  justify-content: flex-start;
}

.tabcontent {
  /*padding: 15px;*/
  /*border: 1px solid #ccc;*/
  /*border-radius: 10px;*/
  /*box-shadow: 3px 3px 6px #e1e1e1*/
}

</style>
