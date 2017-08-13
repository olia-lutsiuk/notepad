(function () {

    initLocalClocks();

    moveSecondHands();

    setUpMinuteHands();
})();
function moveSecondHands() {
    var containers = document.querySelectorAll('.clock .seconds-container');
    setInterval(function () {
        for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
                containers[i].angle = 12;
            } else {
                containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
            containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
        }
    }, 1000);
    for (var i = 0; i < containers.length; i++) {

        var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        containers[i].style.transitionDelay = '0.0' + randomOffset + 's';
    }
}

function setUpMinuteHands() {

    var containers = document.querySelectorAll('.minutes-container');
    var secondAngle = containers[containers.length - 1].getAttribute('data-second-angle');

    if (secondAngle > 0) {

        var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;

        setTimeout(function () {
            moveMinuteHands(containers);
        }, delay);
    }
}


function moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.webkitTransform = 'rotateZ(6deg)';
        containers[i].style.transform = 'rotateZ(6deg)';
    }

    setInterval(function () {
        for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
                containers[i].angle = 12;
            } else {
                containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
            containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
        }
    }, 60000);
}


function initLocalClocks() {

    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var hands = [
        {
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
    },
        {
            hand: 'minutes',
            angle: (minutes * 6)
    },
        {
            hand: 'seconds',
            angle: (seconds * 6)
    }
  ];

    for (var j = 0; j < hands.length; j++) {
        var elements = document.querySelectorAll('.' + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
            elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';

            if (hands[j].hand === 'minutes') {
                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            }
        }
    }
}
var text = document.getElementById("clone"),
    alineJustify = document.getElementById("alineJustify"),
    alineLeft = document.getElementById("alineLeft"),
    alineRight = document.getElementById("alineRight"),
    alineCenter = document.getElementById("alineCenter"),
    Bold = document.getElementById("bold"),
    Italic = document.getElementById("italic"),
    Underline = document.getElementById("underline"),
    table = document.getElementById("table"),
    textHeight = document.getElementById("textHeight"),
    ul = document.getElementById("ul"),
    window = document.getElementById("window");




alineJustify.onclick = function textAlineJustify() {
    if (text.style.textAlign !== "justify") {
        text.style.textAlign = "justify";
    } else {
        text.style.textAlign = "initial";
    }

};
alineLeft.onclick = function textAlineLeft() {
    if (text.style.textAlign !== "left") {
        text.style.textAlign = "left";
    } else {
        text.style.textAlign = "initial";
    }

};
alineRight.onclick = function textAlineRight() {
    if (text.style.textAlign !== "right") {
        text.style.textAlign = "right";
    } else {
        text.style.textAlign = "initial";
    }

};

alineCenter.onclick = function textAlineCenter() {
    if (text.style.textAlign !== "center") {
        text.style.textAlign = "center";
    } else {
        text.style.textAlign = "initial";
    }

};
Bold.onclick = function textBold() {
    if (text.style.fontWeight !== "bold") {
        text.style.fontWeight = "bold";
    } else {
        text.style.fontWeight = "normal";
    }
   
};
Italic.onclick = function textItalic() {
    if (text.style.fontStyle !== "italic") {
        text.style.fontStyle = "italic";
    } else {
        text.style.fontStyle = "normal";
    }

};
Underline.onclick = function textUnderline() {
    if (text.style.textDecoration !== "underline") {
        text.style.textDecoration = "underline";
    } else {
        text.style.textDecoration = "none";
    }
};


textHeight.onclick = function textHeight() {
    var size = +prompt("Enter size of text (pt)");
    text.style.fontSize = size + "pt";
};

function cloneTextDel(){
    text.innerHTML=document.getElementById('text').value;
}
function cloneText(){
    text.innerHTML=text.innerHTML+document.getElementById('text').value;
}

function show() {
    document.getElementById('window').style.display = 'block';
    document.getElementById('wrap').style.display = 'block';
}

function generateInput() {
    var input = document.createElement('input');
    input.style.marginTop = '10px';
    document.getElementById("listId").appendChild(input);
};

function generateList() {
     document.getElementById("window").style.display = 'none';
    document.getElementById('wrap').style.display = 'none';
    var ul = document.createElement('UL');
    var count = document.getElementById('listId').childNodes.length;
    text.appendChild(ul);
    for (var i = 0; i < count; i++) {
        var li = document.createElement('LI');
         var sel=document.getElementById('typeList');
         li.style.listStyle=sel.options[sel.selectedIndex].value;
        var textInput = document.getElementById('listId').getElementsByTagName('input')[i].value;
        var t = document.createTextNode(textInput);
        li.appendChild(t);
        ul.appendChild(li);
    }
};

table.onclick=function showTable(){
     document.getElementById('windowTable').style.display = 'block';
    document.getElementById('wrap').style.display = 'block';
};

function generateTable() {
     document.getElementById('windowTable').style.display = 'none';
    document.getElementById('wrap').style.display = 'none';
    var rows = document.getElementById('tableId').getElementsByTagName('input')[0].value;
    var cols = document.getElementById('tableId').getElementsByTagName('input')[1].value;
    var width =document.getElementById('tableId').getElementsByTagName('input')[2].value;
    var height = document.getElementById('tableId').getElementsByTagName('input')[3].value;
    if(rows==''||cols==''||width==''||height=='' ){
        alert("Please, enter all information")
    }
else {
        var table = document.createElement('table');
        document.getElementById("clone").appendChild(table);
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < cols; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
                var textarea = document.createElement('textarea');
                textarea.style.width = width;
                textarea.style.height = height;
                textarea.style.resize = 'none';
                textarea.style.background = '#BEBEBE';
                td.appendChild(textarea);
            }
            table.appendChild(tr);
        }
    }
}
