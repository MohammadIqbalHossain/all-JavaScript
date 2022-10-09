// 1:
setTimeout(() => time = console.log('Hello'), 3500);

// 2:
const addFunc = () => {
    const addNum = prompt('please give a number');
    const adding = parseInt(addNum)+ 200;
    alert(adding)

}

// 3:
const locationShow = () => {
    const askToShow = confirm('Do you want to see the location?')
    if(askToShow){
        console.log(location.href)
    }
}

// 4:
// cookies is a thing i used to js to keep track to the user, if a user is loged in the site, they keep a track and send it to the server, if the user came again in the site, It don't ask for log in again. it's used for personalization. making a smooth user experiance.  cookies help the website remember you. it's vulnarable for the security. but cookies is very useful to the developer.


// 5:
// difference between localStornge and sessionStorage.
// 1. if data saved in the local storage it never romove unless user delete or developer, but seeion storage data is for just that tab, if tab is closed data will be vanised.

// 2. lcoal storage give the storage for keep something in the  browser, it's cn seen as an improvemnt of cookie, it's gives more storage than a cookie. it is similar for session storage also.

//3.Local storage data not send in the server, for http request or images etc, it's reduce traffic from server to site. 

// 4. local storage data will be cleaed when sombody explicitly remove it, seesion storage data will be clened when tab is

function asyncFunc() {
    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime())
    console.log(9859);
}

asyncFunc()