var game = {
    init: () => {
        game.ready()
    },
    ready: function () {
        var preload = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif", "colon.gif", "dot.gif"]
        function preloadImage(p) {
            for (let i = 0; i < preload.length; i++) {
                var img = new Image();
                img.src = p[i]
            }
        }
        preloadImage(preload)
        var tabOfPictures = ["pokoj.jpg", "samsung2.jpg", "obraz2.jpg"]
        var indexOfTabOfPictures = 0
        currentPicture = "pokoj2.jpg"
        var fRight = function fRight() {
            arrow.removeEventListener("click", fLeft)
            arrow2.removeEventListener("click", fRight)
            var toMove = document.getElementById("wzor")
            var move = setInterval(move2, 20)
            var help = Math.ceil(toMove.scrollLeft)
            console.log(help)
            var counter2OfMoves = 0
            function move2() {
                console.log("-------")
                console.log(help)
                help += 5
                toMove.scrollLeft = help
                counter2OfMoves += 1
                if (counter2OfMoves == 50) {
                    clearInterval(move)
                    arrow.addEventListener("click", fLeft)
                    arrow2.addEventListener("click", fRight)
                }
            }

            indexOfTabOfPictures = ((indexOfTabOfPictures + 1) % 3)
            if (tabOfPictures[indexOfTabOfPictures] == "pokoj.jpg") {
                currentPicture = "pokoj2.jpg"
            }
            else if (tabOfPictures[indexOfTabOfPictures] == "samsung2.jpg") {
                currentPicture = "samsung.jpg"
            }
            else if (tabOfPictures[indexOfTabOfPictures] == "obraz2.jpg") {
                currentPicture = "obraz.jpg"
            }
            if (help == 750) {
                help = 0
                toMove.scrollLeft = help
            }
        }
        var fLeft = function fLeft() {
            arrow.removeEventListener("click", fLeft)
            arrow2.removeEventListener("click", fRight)
            var toMove = document.getElementById("wzor")
            var help = toMove.scrollLeft
            var move = setInterval(move2, 20)
            var counter2OfMoves = 0
            function move2() {
                help += -5
                toMove.scrollLeft = help
                counter2OfMoves += 1
                if (counter2OfMoves == 50) {
                    clearInterval(move)
                    arrow.addEventListener("click", fLeft)
                    arrow2.addEventListener("click", fRight)
                }
            }
            indexOfTabOfPictures = ((indexOfTabOfPictures - 1) % 3)
            if (indexOfTabOfPictures < 0) {
                indexOfTabOfPictures = (indexOfTabOfPictures * -1)
                indexOfTabOfPictures = (3 - indexOfTabOfPictures)
            }
            if (tabOfPictures[indexOfTabOfPictures] == "pokoj.jpg") {
                currentPicture = "pokoj2.jpg"
            }
            else if (tabOfPictures[indexOfTabOfPictures] == "samsung2.jpg") {
                currentPicture = "samsung.jpg"
            }
            else if (tabOfPictures[indexOfTabOfPictures] == "obraz2.jpg") {
                currentPicture = "obraz.jpg"
            }
            if (help == 0) {
                help = 750
                toMove.scrollleft = help
            }
        }
        var arrow = document.createElement("IMG")
        arrow.style.marginTop = "25px"
        arrow.style.marginRight = "25px"
        arrow.setAttribute("src", "lewo.jpg")
        arrow.addEventListener("click", fLeft)
        var arrow2 = document.createElement("IMG")
        arrow2.style.marginTop = "25px"
        arrow2.style.marginLeft = "25px"
        arrow2.setAttribute("src", "prawo.jpg")
        arrow2.addEventListener("click", fRight)
        var picture = document.createElement("DIV")
        picture.setAttribute("id", "wzor")
        var listOfPictures = ["pokoj.jpg", "samsung2.jpg", "obraz2.jpg", "pokoj.jpg"]
        var boxForPictures = document.createElement("DIV")
        boxForPictures.setAttribute("id", "boxForPictures")
        boxForPictures.style.width = "1000px"
        boxForPictures.style.height = "250px"
        for (let i = 0; i < 4; i++) {
            var pic = document.createElement("IMG")
            pic.setAttribute("src", listOfPictures[i])
            boxForPictures.appendChild(pic)
        }
        picture.appendChild(boxForPictures)
        var boxOfAll = document.createElement("DIV")
        boxOfAll.setAttribute("id", "boxOfAll")
        boxOfAll.style.width = "700px"
        boxOfAll.style.height = "250px"
        boxOfAll.appendChild(arrow)
        boxOfAll.appendChild(picture)
        boxOfAll.appendChild(arrow2)
        document.body.appendChild(boxOfAll)
        var block = document.createElement("DIV")
        block.setAttribute("id", "buttons")
        for (let i = 3; i < 7; i++) {
            var bt = document.createElement("BUTTON")
            bt.innerText = (i + "x" + i)
            block.appendChild(bt)
        }

        document.body.appendChild(block)

        var buttons = document.querySelectorAll("button")
        var first = 0
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", () => {
                if (first > 0) {
                    clearInterval(howLong)
                    clearInterval(howLong2)
                    clearInterval(howLong3)
                    clearInterval(howLong4)
                    var toRemove3 = document.getElementById("timer")
                    toRemove3.parentNode.removeChild(toRemove3)
                    var toRemove = document.getElementById("mainBox")
                    toRemove.parentNode.removeChild(toRemove)
                    if (done == true) {
                        var toRemove2 = document.getElementById("results")
                        toRemove2.parentNode.removeChild(toRemove2)
                    }
                    var timer = document.createElement("DIV")
                    timer.setAttribute("id", "timer")
                    for (let i = 0; i < 12; i++) {
                        var number = document.createElement("DIV")
                        number.setAttribute("class", "number")
                        if (i == 2 || i == 5) {
                            number.style.backgroundImage = "url('colon.gif')"
                            number.style.width = "9px"
                        }
                        else if (i == 8) {
                            number.style.backgroundImage = "url('dot.gif')"
                            number.style.width = "9px"
                        }
                        else {
                            number.style.backgroundImage = "url('c0.gif')"
                        }
                        timer.appendChild(number)
                    }
                    document.body.appendChild(timer)
                }
                first += 1
                var howMany = 0
                if (i == 0) {
                    howMany = 9
                    a = 3
                    type = a.toString()
                }
                else if (i == 1) {
                    howMany = 16
                    a = 4
                    type = a.toString()
                }
                else if (i == 2) {
                    howMany = 25
                    a = 5
                    type = a.toString()
                }
                else {
                    howMany = 36
                    a = 6
                    type = a.toString()
                }
                this.spacing(howMany, a)
            })
        }
        var timer = document.createElement("DIV")
        timer.setAttribute("id", "timer")
        for (let i = 0; i < 12; i++) {
            var number = document.createElement("DIV")
            number.setAttribute("class", "number")
            if (i == 2 || i == 5) {
                number.style.backgroundImage = "url('colon.gif')"
                number.style.width = "9px"
            }
            else if (i == 8) {
                number.style.backgroundImage = "url('dot.gif')"
                number.style.width = "9px"
            }
            else {
                number.style.backgroundImage = "url('c0.gif')"
            }
            timer.appendChild(number)
        }
        document.body.appendChild(timer)
    },

    time: function () {
        TIME = []
        howLong = setInterval(t, 1)
        var d = new Date()
        n = d.getTime()
        function t() {
            var d2 = new Date()
            var n2 = d2.getTime()
            var difference = (n2 - n)
            var differenceEnd = (difference % 1000)
            differenceEnd = differenceEnd.toString()
            differenceEnd2 = differenceEnd.split("")
            for (let i = 0; i < differenceEnd2.length; i++) {
                if (differenceEnd2.length != 3) {
                    if (differenceEnd2.length == 2) {
                        differenceEnd2.unshift("0")
                    }
                    else if (differenceEnd2.length == 1) {
                        differenceEnd2.unshift("0")
                        differenceEnd2.unshift("0")
                    }
                    else {
                        differenceEnd2.unshift("0")
                        differenceEnd2.unshift("0")
                        differenceEnd2.unshift("0")
                    }
                }
            }
            var nameOfPicture0 = ("url(" + "c" + differenceEnd2[0] + ".gif" + ")")
            var nameOfPicture1 = ("url(" + "c" + differenceEnd2[1] + ".gif" + ")")
            var nameOfPicture2 = ("url(" + "c" + differenceEnd2[2] + ".gif" + ")")
            var list = document.getElementsByClassName("number")
            for (let i = 9; i < list.length; i++) {
                if (i == 9) {
                    list[i].style.backgroundImage = nameOfPicture0
                }
                else if (i == 10) {
                    list[i].style.backgroundImage = nameOfPicture1
                }
                else {
                    list[i].style.backgroundImage = nameOfPicture2
                }
            }
        }
        howLong2 = setInterval(t2, 1000)
        function t2() {
            n3 = Math.floor(n / 1000) // czas poczatkowy w sekundach
            var d2 = new Date()
            var n2 = d2.getTime()
            n2 = Math.floor(n2 / 1000) // czas aktualny w sekundach
            var second = Math.round((Math.floor((n2 - n3) / 10)))
            var first = ((n2 - n3) % 10)
            if (second >= 6) {
                second = ((second - 1) % 5)
            }
            var nameOfPicture0 = ("url(" + "c" + first + ".gif" + ")")
            var nameOfPicture1 = ("url(" + "c" + second + ".gif" + ")")
            var list = document.getElementsByClassName("number")
            for (let i = 6; i < list.length; i++) {
                if (i == 7) {
                    list[i].style.backgroundImage = nameOfPicture0
                }
                else if (i == 6) {
                    list[i].style.backgroundImage = nameOfPicture1
                }
            }
        }
        howLong3 = setInterval(t3, 60000)
        function t3() {
            n3 = Math.floor((n / 1000) / 60) // czas poczatkowy w minutach
            var d2 = new Date()
            var n2 = d2.getTime()
            n2 = Math.floor((n2 / 1000) / 60) // czas aktualny w minutach
            var second = Math.round((Math.floor((n2 - n3) / 10)))
            var first = ((n2 - n3) % 10)
            if (second >= 6) {
                second = ((second - 1) % 5)
            }
            var nameOfPicture0 = ("url(" + "c" + first + ".gif" + ")")
            var nameOfPicture1 = ("url(" + "c" + second + ".gif" + ")")
            var list = document.getElementsByClassName("number")
            for (let i = 3; i < list.length; i++) {
                if (i == 4) {
                    list[i].style.backgroundImage = nameOfPicture0
                }
                else if (i == 3) {
                    list[i].style.backgroundImage = nameOfPicture1
                }
            }
        }
        howLong4 = setInterval(t4, 3600000)
        function t4() {
            n3 = Math.floor(((n / 1000) / 60) / 60) // czas poczatkowy w godzinach
            var d2 = new Date()
            var n2 = d2.getTime()
            n2 = Math.floor((n2 / 1000) / 60 / 60) // czas aktualny w godzinach
            var second = Math.round((Math.floor((n2 - n3) / 10)))
            var first = ((n2 - n3) % 10)
            if (second >= 6) {
                second = ((second - 1) % 5)
            }
            var nameOfPicture0 = ("url(" + "c" + first + ".gif" + ")")
            var nameOfPicture1 = ("url(" + "c" + second + ".gif" + ")")
            var list = document.getElementsByClassName("number")
            for (let i = 0; i < list.length; i++) {
                if (i == 2) {
                    list[i].style.backgroundImage = nameOfPicture0
                }
                else if (i == 1) {
                    list[i].style.backgroundImage = nameOfPicture1
                }
            }
        }
    },
    spacing: function (howMany2, b) {
        var div2 = document.createElement("DIV")
        div2.setAttribute("id", "mainBox")
        for (let i = 0; i < howMany2; i++) {
            var div = document.createElement("DIV")
            div.className = "boxes"
            var size = (500 - (b - 1))
            div.style.width = ((size / b) + "px")
            div.style.height = ((size / b) + "px")
            div.style.backgroundImage = ("url(" + currentPicture + ")")
            div.setAttribute("id", (i + 1))
            var Y = (i / b)
            Y = Math.floor(Y)
            var X = (i % b)
            X = (X * (size / b))
            Y = (Y * (size / b))
            div.style.backgroundPosition = ("-" + X + "px " + "-" + Y + "px")
            if (i % b == 0) {
                div.style.clear = "both"
            }
            else if (i % b == (b - 1)) {
                div.style.borderRight = "none"
            }
            if (i == (howMany2 - 1)) {
                div.style.background = "black"
            }
            div2.appendChild(div)
        }
        document.body.appendChild(div2)
        dataAboutPosition = []
        var allDivs = document.getElementsByClassName("boxes")
        for (let i = 0; i < allDivs.length; i++) {
            var Now = allDivs[i].style.backgroundPosition
            dataAboutPosition.push(Now)
        }
        this.mix(b)
    },
    mix: function (c) {
        var amountOfMoves = (c * c * 10)
        var ID = (c * c)
        var counter = 0
        var Do = setInterval(f, 10)
        function f() {
            var helpToMakeProperFields = [(ID - c), (ID + c), (ID - 1), (ID + 1)]
            properFields = []
            var fields = []
            for (let j = 0; j < helpToMakeProperFields.length; j++) {
                if (helpToMakeProperFields[j] <= (c * c) && helpToMakeProperFields[j] > 0) {
                    var numberOfID = (Math.floor((ID - 1) / c))
                    var numberOfField = (Math.floor((helpToMakeProperFields[j] - 1) / c))
                    if (numberOfField != numberOfID) {
                        var numberOfID2 = (ID % c)
                        var numberOfField2 = (helpToMakeProperFields[j] % c)
                        if (numberOfField2 != numberOfID2) {
                            continue
                        }
                        else {
                            fields.push(helpToMakeProperFields[j])
                        }
                    }
                    else {
                        fields.push(helpToMakeProperFields[j])
                    }

                }
            }
            for (let i = 0; i < fields.length; i++) {
                var now = document.getElementById(fields[i])
                properFields.push(now)
            }
            var theChoosenOne = Math.floor(Math.random() * properFields.length)
            var B = document.getElementById(ID)
            var color = properFields[theChoosenOne]
            var color2 = color.style.backgroundPosition
            B.style.background = ""
            B.style.backgroundImage = ("url(" + currentPicture + ")")
            B.style.backgroundPosition = color2
            color.style.background = "black"
            ID = parseInt(color.id)
            counter = (counter + 1)

            if (counter == amountOfMoves) {
                function myStopFunction() {
                    clearInterval(Do)
                    game.time()
                }
                myStopFunction()
                var helpObject = {
                    all: function (ID, c) {
                        var helpToMakeProperFields = [(ID - c), (ID + c), (ID - 1), (ID + 1)]
                        properFields = []
                        var fields = []
                        for (let j = 0; j < helpToMakeProperFields.length; j++) {
                            if (helpToMakeProperFields[j] <= (c * c) && helpToMakeProperFields[j] > 0) {
                                var numberOfID = (Math.floor((ID - 1) / c))
                                var numberOfField = (Math.floor((helpToMakeProperFields[j] - 1) / c))
                                if (numberOfField != numberOfID) {
                                    var numberOfID2 = (ID % c)
                                    var numberOfField2 = (helpToMakeProperFields[j] % c)
                                    if (numberOfField2 != numberOfID2) {
                                        continue
                                    }
                                    else {
                                        fields.push(helpToMakeProperFields[j])
                                    }
                                }
                                else {
                                    fields.push(helpToMakeProperFields[j])
                                }
                            }
                        }
                        for (let i = 0; i < fields.length; i++) {
                            var now = document.getElementById(fields[i])
                            properFields.push(now)
                        }
                    }
                }
                helpObject.all(ID, c)
                game.play(ID, c, helpObject)
            }
        }
        nick = window.prompt("Podaj nick")
    },
    play: function (ID, c, helpObject) {
        done = false
        function stopTime() {
            clearInterval(howLong)
            clearInterval(howLong2)
            clearInterval(howLong3)
            clearInterval(howLong4)
            var currentNumbers = document.getElementsByClassName("number")
            var names = []
            var num = []
            for (let i = 0; i < currentNumbers.length; i++) {
                if (i != 2 && i != 5 && i != 8) {
                    var currentName = currentNumbers[i].style.backgroundImage
                    names.push(currentName)
                }
            }
            for (let i = 0; i < names.length; i++) {
                names[i] = names[i].split("")
                var nu = names[i][6]
                num.push(nu)
            }
            var del = document.getElementById("6")
            var del2 = document.getElementById("8")
            del.removeEventListener("click", f1)
            del2.removeEventListener("click", f1)
            var stringVersion = ""
            for (let i = 0; i < num.length; i++) {
                stringVersion += num[i]
                if (i % 2 == 1 && i < (num.length - 3))
                    stringVersion += ":"
            }
            var dd = new Date()
            var ddd = dd.getTime()
            document.cookie = ddd + "=type:" + type + ". " + "time:" + stringVersion + ". " + "nick:" + nick + ";" + "expires=Thu, 9 Dec 2100 12:00:00 UTC" + ";"
            var cookies = document.cookie
            var cookiesArray = cookies.split(";")
            var tabOfResults = []
            for (let i = 0; i < cookiesArray.length; i++) {
                var cookiesArray2 = cookiesArray[i].split(". ")
                var whichType = cookiesArray2[0].split(":")
                var properWhichType = whichType[1]
                var whichTime = cookiesArray2[1].split(":")
                var properTime = []
                for (let i = 1; i < whichTime.length; i++) {
                    properTime.push(whichTime[i])
                }
                var properTime2 = properTime.join("")
                var properNick = cookiesArray2[2].split(":")
                var properNick2 = properNick[1]
                var objOfResults = {
                    t: properWhichType,
                    clock: properTime2,
                    nick: properNick2,
                }
                tabOfResults.push(objOfResults)
            }
            var tabOfResults3 = []
            var tabOfResults4 = []
            var tabOfResults5 = []
            var tabOfResults6 = []
            for (let i = 0; i < tabOfResults.length; i++) {
                if (tabOfResults[i].t == 3) {
                    tabOfResults3.push(tabOfResults[i])
                }
                else if (tabOfResults[i].t == 4) {
                    tabOfResults4.push(tabOfResults[i])
                }
                else if (tabOfResults[i].t == 5) {
                    tabOfResults5.push(tabOfResults[i])
                }
                else {
                    tabOfResults6.push(tabOfResults[i])
                }
            }
            tabOfResults3.sort(function (a, b) {
                return a.clock - b.clock
            })
            tabOfResults4.sort(function (a, b) {
                return a.clock - b.clock
            })
            tabOfResults5.sort(function (a, b) {
                return a.clock - b.clock
            })
            tabOfResults6.sort(function (a, b) {
                return a.clock - b.clock
            })
            var res = document.createElement("DIV")
            res.setAttribute("id", "results")
            var tabOf3 = document.createElement("TABLE")
            var tabOf4 = document.createElement("TABLE")
            var tabOf5 = document.createElement("TABLE")
            var tabOf6 = document.createElement("TABLE")
            var len3 = tabOfResults3.length
            if (len3 > 10) {
                len3 = 10
            }
            var len4 = tabOfResults4.length
            if (len4 > 10) {
                len4 = 10
            }
            var len5 = tabOfResults5.length
            if (len5 > 10) {
                len5 = 10
            }
            var len6 = tabOfResults6.length
            if (len6 > 10) {
                len6 = 10
            }
            for (let i = 0; i < len3; i++) {
                var tr = document.createElement("TR")
                var td = document.createElement("TD")
                var formatedResult = tabOfResults3[i].clock.split("")
                var properFormatedResult = (formatedResult[0] + formatedResult[1] + ":" + formatedResult[2] + formatedResult[3] + ":" + formatedResult[4] + formatedResult[5] + "." + formatedResult[6] + formatedResult[7] + formatedResult[8])
                td.innerText = (i + 1) + ". " + properFormatedResult + " - " + tabOfResults3[i].nick
                tr.appendChild(td)
                tabOf3.appendChild(tr)
            }
            for (let i = 0; i < len4; i++) {
                var tr = document.createElement("TR")
                var td = document.createElement("TD")
                var formatedResult = tabOfResults4[i].clock.split("")
                var properFormatedResult = (formatedResult[0] + formatedResult[1] + ":" + formatedResult[2] + formatedResult[3] + ":" + formatedResult[4] + formatedResult[5] + "." + formatedResult[6] + formatedResult[7] + formatedResult[8])
                td.innerText = (i + 1) + ". " + properFormatedResult + " - " + tabOfResults4[i].nick
                tr.appendChild(td)
                tabOf4.appendChild(tr)
            }
            for (let i = 0; i < len5; i++) {
                var tr = document.createElement("TR")
                var td = document.createElement("TD")
                var formatedResult = tabOfResults5[i].clock.split("")
                var properFormatedResult = (formatedResult[0] + formatedResult[1] + ":" + formatedResult[2] + formatedResult[3] + ":" + formatedResult[4] + formatedResult[5] + "." + formatedResult[6] + formatedResult[7] + formatedResult[8])
                td.innerText = (i + 1) + ". " + properFormatedResult + " - " + tabOfResults5[i].nick
                tr.appendChild(td)
                tabOf5.appendChild(tr)
            }
            for (let i = 0; i < len6; i++) {
                var tr = document.createElement("TR")
                var td = document.createElement("TD")
                var formatedResult = tabOfResults6[i].clock.split("")
                var properFormatedResult = (formatedResult[0] + formatedResult[1] + ":" + formatedResult[2] + formatedResult[3] + ":" + formatedResult[4] + formatedResult[5] + "." + formatedResult[6] + formatedResult[7] + formatedResult[8])
                td.innerText = (i + 1) + ". " + properFormatedResult + " - " + tabOfResults6[i].nick
                tr.appendChild(td)
                tabOf6.appendChild(tr)
            }
            var title3 = document.createElement("P")
            title3.innerText = "Najlepsi zawodnicy 3x3"
            var title4 = document.createElement("P")
            title4.innerText = "Najlepsi zawodnicy 4x4"
            var title5 = document.createElement("P")
            title5.innerText = "Najlepsi zawodnicy 5x5"
            var title6 = document.createElement("P")
            title6.innerText = "Najlepsi zawodnicy 6x6"
            var box3 = document.createElement("DIV")
            box3.setAttribute("id", "box3")
            box3.className = "box"
            box3.appendChild(title3)
            box3.appendChild(tabOf3)
            var box4 = document.createElement("DIV")
            box4.setAttribute("id", "box4")
            box4.className = "box"
            box4.appendChild(title4)
            box4.appendChild(tabOf4)
            var box5 = document.createElement("DIV")
            box5.setAttribute("id", "box5")
            box5.className = "box"
            box5.appendChild(title5)
            box5.appendChild(tabOf5)
            var box6 = document.createElement("DIV")
            box6.setAttribute("id", "box6")
            box6.className = "box"
            box6.appendChild(title6)
            box6.appendChild(tabOf6)
            res.appendChild(box3)
            res.appendChild(box4)
            res.appendChild(box5)
            res.appendChild(box6)
            document.body.appendChild(res)
            setTimeout(function () {
                window.alert("Wygrałeś \n" + num[0] + num[1] + ":" + num[2] + num[3] + ":" + num[4] + num[5] + "." + num[6] + num[7] + num[8])
            }, 50)
            done = true
        }
        var f1 = function func1() {
            var toChange = this
            var black = document.getElementById(ID)
            var pic = toChange.style.backgroundPosition
            black.style.background = ""
            black.style.backgroundImage = ("url(" + currentPicture + ")")
            black.style.backgroundPosition = pic
            toChange.style.background = "black"
            ID = parseInt(toChange.id)
            for (let i = 0; i < properFields.length; i++) {
                properFields[i].removeEventListener("click", f1)
            }
            var dataAboutCurrentPosition = []
            var allDivs2 = document.getElementsByClassName("boxes")
            for (let i = 0; i < allDivs2.length; i++) {
                var Now2 = allDivs2[i].style.backgroundPosition
                dataAboutCurrentPosition.push(Now2)
            }
            var counter2 = 0
            for (let i = 0; i < dataAboutCurrentPosition.length; i++) {
                if (dataAboutCurrentPosition[i] == dataAboutPosition[i]) {
                    counter2 = (counter2 + 1)
                }
                if (counter2 == (c * c)) {
                    stopTime()
                    return false
                }
            }
            helpObject.all(ID, c)
            game.play(ID, c, helpObject)
        }
        for (let i = 0; i < properFields.length; i++) {
            properFields[i].addEventListener("click", f1)
        }
    }
}
document.addEventListener("DOMContentLoaded", game.init)