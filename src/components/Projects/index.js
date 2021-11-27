import react, { components } from "react";
import nationalpark from '../../images/homePage.png'
import bingo from '../../images/bingo.png'
import workday from '../../images/demo.png'
import quiz from '../../images/quiz-demo.png'


function Project() {
    return (
        <>
            <div class="container" id="project">
      <div class="row secondary">
        <h2 class="text-3xl secondary">Portfolio</h2>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="card">
          <img class="card-img-top" src={nationalpark} alt="National Park Searcher"/>
            <div class="card-body primary">

              <h5 class="card-title">National Park Searcher</h5>
              <p class="card-text">This is my first Group Project. We utlizied our knowledge to make easy to use National Park Searcher with added forecast</p>
              <a href="https://github.com/Cumar-khalif/U.S.-National-Parks" class="btn secondary">Travel to page</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img class="card-img-top" src={workday} alt="Workday Scheduler"/>
            <div class="card-body primary">

              <h5 class="card-title">Workday Scheduler</h5>
              <p class="card-text">In this project I utlizied the local storage and getTime() method to make a workday scheduler that you can save events throughout the day
              </p>
              <a href="https://github.com/pepsi1397/Work_Day_Scheduler" class="btn secondary">Travel to page</a>

            </div>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="card">
            <img class="card-img-top" src={quiz} alt="Card image cap"/>
            <div class="card-body primary">

              <h5 class="card-title">Pixar Quiz</h5>
              <p class="card-text">Get prepared to take the Pixar quiz. In here I have utilized the local storage and for loops to prompt question and keep score.</p>
              <a href="https://github.com/pepsi1397/quiz" class="btn secondary">Travel to page</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img class="card-img-top" src={bingo} alt="Card image cap"/>
            <div class="card-body primary">

              <h5 class="card-title">Online Bingo</h5>
              <p class="card-text">Join a game of intense bingo online with your friends. Create lobby then start bingo!</p>
              <a href="https://github.com/kabaothao/Bingo" class="btn secondary">Travel to page</a>

            </div>
          </div>
        </div>
      </div>
    </div>
            </>
            )
}

export default Project