let thumb = slider.querySelector(".thumb");

//console.log(slider.offsetWidth);

thumb.onmousedown = function () {
    event.preventDefault();
    let shiftX = event.clientX - thumb.getBoundingClientRect().left; //в каком месте ползунка курсор
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let elemNow = event.clientX - shiftX - slider.getBoundingClientRect().left;
        //console.log(`elemNow: ${elemNow}`);

        if (elemNow > slider.offsetWidth - thumb.offsetWidth) {
            elemNow = slider.offsetWidth - thumb.offsetWidth;
        }
        if (elemNow < 0) {
            elemNow = 0;
        }
        thumb.style.left = elemNow + 'px';

        //console.log(slider.offsetWidth - shiftX);
    }

    function onMouseUp(){
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}
thumb.ondragstart = function() {
      return false;
}

////////////////////////////////////////////////////

let liArr = Array.from(list.querySelectorAll(".developer"));
liArr.forEach(function(item, index) {
    item.setAttribute('data-id', index)
    item.setAttribute('onmousemove', `moveElem(${index})`)
})

let area = document.querySelector(".area-color");

function moveElem(index){
    let nameDev = document.querySelector(`[data-id = "${index}"]`);
    nameDev.onmousedown = function () {
        event.preventDefault();

        let shiftX = event.clientX - nameDev.getBoundingClientRect().left;
        let shiftY = event.clientY - nameDev.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        
        let currentDroppable = null;
        
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);

            function moveAt(pageX, pageY) {
                nameDev.style.left = pageX - shiftX + 'px';
                nameDev.style.top =  pageY - shiftY + 'px';
            }

            nameDev.style.position = 'absolute';
            nameDev.style.zIndex = 5;
                
            nameDev.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            nameDev.hidden = false;

            if (!elemBelow) return;
            let droppableBelow = elemBelow.closest('.droppable');
            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    enterDroppable(currentDroppable);
                    moveAt(event.pageX, event.pageY);
                    area.style.background = 'yellowgreen';
                }
            }
        }

        function onMouseUp() {
            if (currentDroppable) {
                nameDev.style.position = 'absolute'; 
            } else {
                nameDev.style.position = 'static';
            }
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }
    function enterDroppable(elem) {
        elem.style.background = 'yellowgreen';
    }
    function leaveDroppable(elem) {
        elem.style.background = '';
    }
    nameDev.ondragstart = function () {
        return false;
    }
}
