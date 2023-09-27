<body style="background: #232124; font-family: 'Public Sans', sans-serif">
    <nav class="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark"
        style="background-color: #ffffff00 !important">
        <div class="container">
            <a class="navbar-brand" href="#"><span class="brand-name">Flowfocus</span><span
                    class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
                    style="background: rgba(13, 110, 253, 0)"><i class="fa fa-bell"
                        style="height: 24px; width: 24px; font-size: 24px"></i><svg xmlns="http://www.w3.org/2000/svg"
                        width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-dot"
                        style="color: #114eec; position: absolute; font-size: 65px; transform: translateX(5px) translateY(-7px)">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                    </svg></span></a>
            <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-5"><span
                    class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-5">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><button class="btn btn-primary nav-btn" type="button">?</button></li>
                    <li class="nav-item"><button class="btn btn-primary nav-btn" type="button" onclick="openSettings()">
                            Settings</button></li>
                    <li class="nav-item"><button class="btn btn-primary nav-btn" type="button">Status</button></li>
                    <li class="nav-item"><button class="btn btn-primary nav-btn" type="button"
                            onclick="openLoginModal()">Login</button></li>
                    <!-- <button class="login-button">Login</button> -->
                </ul>
            </div>
        </div>
    </nav>
    <!-- Login Modal -->
    <div class="modal-container" id="loginModal">
        <div class="modal-contentis">
            <span class="close" onclick="closeLoginModal()">&times;</span>
            <!-- Login form goes here -->
            <form>
                <h2 id="loginheading">Flowfocus</h2>
                <div class="centerthefields">
                    <div class="input-holder">
                        <label class="loginpagelabel" for="username">Username:</label>
                        <input class="loginpageinput" style="font-size:25px; padding-left:20px;" type="text"
                            id="username" name="username" required />
                    </div>
                    <div class="input-holder">
                        <label class="loginpagelabel" for="password">Password:</label>
                        <input class="loginpageinput" style="font-size:25px; margin-left: 5px;padding-left:20px;"
                            type="password" id="password" name="password" required />
                    </div>
                    <button class="thebtnforlogin" type="submit">Login</button>
                </div>
                <div class="forget-pass">
                    <a>Forgot password ?</a>
                </div>

                <div style="
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;">
                    <div class="line"></div>
                    <h2 style="
                        color: #fff;
                        font-family: Public Sans ,sans-serif;
                        font-size: 30px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;">
                        OR
                    </h2>
                    <div class="line"></div>
                </div>
            </form>
            <button id="loginwithgoogle" class="thebtnforlogin"><i class="fab fa-google"></i> Login with Google</button>
            <div class="signupdiv">
                <h1 class="signupmsg" style="font-family: Public Sans ,sans-serif">
                    Don't have an Account? <span class="signupmsg" style="font-family: Public Sans ,sans-serif;"><a
                            href="" style="text-decoration: none; color: #7C8CDE;">Sign Up</a></span>
                </h1>
            </div>
        </div>
    </div>










    <div class="modal-container" id="settings">

        <div class="settings-container">
            <span class="close" onclick="closeSettings()">&times;</span>
            <div class="settings-container-btns">
                <button class="btn btn-primary setting-options" type="button" data-target="summary"
                    style="font-family: 'Public Sans', sans-serif;">Summary</button>
                <button class="btn btn-primary setting-options" type="button" data-target="ranking">Ranking</button>
                <button class="btn btn-primary setting-options" type="button" data-target="friends">Friends</button>
            </div>
            <div class="table-settings-div">
                <div class="table-responsive" style="width: 700px;">
                    <table class="table table-striped table-hover table-borderless">
                        <thead>
                            <tr>
                                <th class="setting-table-cell">Column 1</th>
                                <th class="setting-table-cell"
                                    style="border-right: 1px solid rgb(0,0,0);border-left: 1px solid rgba(0,0,0);">
                                    Column 2</th>
                                <th class="setting-table-cell">Column 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="setting-table-cell"
                                    style="border-right-style: solid;border-right-color: rgb(0,0,0);">Cell 1</td>
                                <td class="setting-table-cell"
                                    style="border-right: 1px solid rgb(0,0,0);border-left: 1px solid rgba(0,0,0);">Cell
                                    2</td>
                                <td class="setting-table-cell">Cell 3</td>
                            </tr>
                            <tr>
                                <td class="setting-table-cell">Cell 1</td>
                                <td class="setting-table-cell"
                                    style="border-right: 1px solid rgb(0,0,0);border-left: 1px solid rgba(0,0,0);">Cell
                                    2</td>
                                <td class="setting-table-cell">Cell 3</td>
                            </tr>
                            <tr>
                                <td class="setting-table-cell">Cell 1</td>
                                <td class="setting-table-cell"
                                    style="border-right: 1px solid rgb(0,0,0);border-left: 1px solid rgba(0,0,0);">Cell
                                    2</td>
                                <td class="setting-table-cell">Cell 3</td>
                            </tr>
                            <tr>
                                <td class="setting-table-cell">Cell 3</td>
                                <td class="setting-table-cell"
                                    style="border-right: 1px solid rgb(0,0,0);border-left: 1px solid rgba(0,0,0);">Cell
                                    4</td>
                                <td class="setting-table-cell">Cell 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>









    <div class="container mt-5">
        <div class="row" style="width: 100%">
            <div class="col-md-6 timer-holder">
                <div class="circle-container">
                    <div id="app">
                        <div class="base-timer">
                            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <g class="base-timer__circle">
                                    <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                                    <path id="base-timer-path-remaining" stroke-dasharray="283"
                                        class="base-timer__path-remaining arc"
                                        d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"></path>
                                </g>
                            </svg>
                            <button class="btn btn-primary theplay" id="theplaypause" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                    viewBox="0 0 16 16" class="bi bi-play-fill"
                                    style="font-size: 2.5rem; height: 94px; width:94px">
                                    <path
                                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z">
                                    </path>
                                </svg>
                            </button>
                            <div id="lable_timer_count">
                                <span id="base-timer-label" class="base-timer__label"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reloaddiv">
                    <svg class="bi bi-arrow-counterclockwise" xmlns="http://www.w3.org/2000/svg" width="1em"
                        height="1em" fill="currentColor" viewBox="0 0 16 16"
                        style="font-size: 33px; color: rgb(255, 255, 255)">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z">
                        </path>
                        <path
                            d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z">
                        </path>
                    </svg>
                </div>
                <div class="stpbtns">
                    <button onclick="start()" class="start" id="start">Start</button>
                    <button onclick="stop()" class="stop" id="stop">Pause</button>
                </div>
            </div>
            <div class="col-md-6 task-holder buttons sd sdpbtns" style="
    padding: 40px;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                        viewBox="0 0 16 16" class="bi bi-play-circle-fill"
                        style="width: 87px; height: 87px; flex-shrink: 0; color: #ff9d07;">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                        </path>
                    </svg>
                    <h1
                        style="color: #fff; font-family: 'Public Sans'; font-size: 50px; font-style: normal; font-weight: 700; line-height: normal;">
                        Tasks</h1>
                </div>
                <div class="task-separtor">
                    <a href="#" style="color: #ffffff; text-decoration: none">On Progress</a><a href="#"
                        style="color: #ffffff; text-decoration: none">Completed</a>
                </div>
                <div class="task-modder">
                    <h3 class="task-head">Growbdo</h3>
                    <div class="dropdown" style="border: none">
                        <button class="btn btn-primary" aria-expanded="false" data-bs-toggle="dropdown" type="button"
                            style="border: none; background-color: rgba(35, 35, 35, 0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                viewBox="0 0 16 16" class="bi bi-three-dots-vertical"
                                style="position: relative; font-size: 23px">
                                <path
                                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
                                </path>
                            </svg>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second
                                Item</a><a class="dropdown-item" href="#">Third Item</a>
                        </div>
                    </div>
                    <small style="font-size: 18px" class="ms-4 mb-0 mt-0">&nbsp; &nbsp; &nbsp;<span>Total
                            Time:</span>&nbsp; 266hr</small>
                    <input type="checkbox" class="checkbox-round ms-2" style="height: 32px; width: 32px"
                        data-bs-theme="light" />
                </div>
                <div class="task-modder">
                    <h3 class="task-head">Growbdo</h3>
                    <div class="dropdown" style="border: none">
                        <button class="btn btn-primary" aria-expanded="false" data-bs-toggle="dropdown" type="button"
                            style="border: none; background-color: rgba(35, 35, 35, 0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                viewBox="0 0 16 16" class="bi bi-three-dots-vertical" style="font-size: 23px">
                                <path
                                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
                                </path>
                            </svg>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">First Item</a><a class="dropdown-item" href="#">Second
                                Item</a><a class="dropdown-item" href="#">Third Item</a>
                        </div>
                    </div>
                    <small style="font-size: 18px" class="ms-4 mb-0 mt-0">&nbsp; &nbsp; &nbsp;<span>Total
                            Time:</span>&nbsp; 266hr</small>
                    <input type="checkbox" class="checkbox-round ms-2" style="height: 32px; width: 32px"
                        data-bs-theme="light" />
                </div>
                <div class="task-holder-btn"
                    style="width: 100%; height: 100%; display: flex; align-items: stretch; justify-content: center;">
                    <button class="btn btn-primary task-btn" type="button" style="width: 100%">Add Task</button>
                </div>
            </div>
            <div class="col">
                <div class="col d-xl-flex flex-column justify-content-xl-start align-items-xl-start gap-4 mb-5 mt-5">
                    <div>
                        <h1 style="color: #FFF;font-family: 'Public Sans';font-size: 32px;font-style: normal;font-weight: 500;line-height: normal;"
                            class="m-3">Flowtime Journal</h1>
                    </div>
                    <div class="flowtime-journal-btns">
                        <div class="dropdown"><button class="btn btn-primary dropdown-toggle flowjor-drop"
                                aria-expanded="false" data-bs-toggle="dropdown" type="button">Today </button>
                            <div class="dropdown-menu"><a class="dropdown-item" href="#">First Item</a><a
                                    class="dropdown-item" href="#">Second Item</a><a class="dropdown-item"
                                    href="#">Third Item</a></div>
                        </div><input class="date-flowjor" type="date"><input class="date-flowjor" type="date">
                    </div>
                </div>
                <div class="col-xl-lg-md-12">
                    <div>
                        <div class="table-responsive">
                            <table class="table table-dark table-bordered">
                                <thead style="border-top-left-radius: 48px;">
                                    <tr>
                                        <th><i class="fa fa-book"
                                                style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;"></i>Column
                                            1</th>
                                        <th style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                fill="currentColor" viewBox="0 0 16 16" class="bi bi-stopwatch"
                                                style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;">
                                                <path
                                                    d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z">
                                                </path>
                                                <path
                                                    d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z">
                                                </path>
                                            </svg>Column 2</th>
                                        <th style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                fill="currentColor" viewBox="0 0 16 16" class="bi bi-stopwatch"
                                                style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;">
                                                <path
                                                    d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z">
                                                </path>
                                                <path
                                                    d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z">
                                                </path>
                                            </svg>Column 3</th>
                                        <th style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;"><svg
                                                xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24"
                                                width="1em" fill="currentColor"
                                                style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;">
                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                <path
                                                    d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z">
                                                </path>
                                                <path d="M0 24V0" fill="none"></path>
                                            </svg>Column 3</th>
                                        <th style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                fill="currentColor" viewBox="0 0 16 16" class="bi bi-person-workspace"
                                                style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;">
                                                <path
                                                    d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z">
                                                </path>
                                                <path
                                                    d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z">
                                                </path>
                                            </svg>Column 3</th>
                                        <th style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                fill="currentColor" viewBox="0 0 16 16" class="bi bi-clock-history"
                                                style="transform: translateY(-2px);margin-left: 0px;margin-right: 5px;">
                                                <path
                                                    d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z">
                                                </path>
                                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z">
                                                </path>
                                                <path
                                                    d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z">
                                                </path>
                                            </svg>Column 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cell 1</td>
                                        <td>Cell 2</td>
                                        <td>Cell 3</td>
                                        <td>Cell 3</td>
                                        <td>Cell 3</td>
                                        <td>Cell 3</td>
                                    </tr>
                                    <tr>
                                        <td>Cell 3</td>
                                        <td>Cell 4</td>
                                        <td>Cell 3</td>
                                        <td>Cell 3</td>
                                        <td>Cell 3</td>
                                        <td>Cell 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style="width: 100%;text-align: center;">
                        <h1
                            style="padding: 30px;color: #FFF;font-family: 'Public Sans';font-size: 32px;font-style: normal;font-weight: 500;line-height: normal;">
                            Flowshare History</h1>
                    </div>
                </div>
            </div>

        </div>


    </div>
 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="./js/circle.js"></script>
</body> 