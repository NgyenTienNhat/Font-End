let items = document.querySelectorAll('li');
    items.forEach(li => {
        li.addEventListener('click', function (e) {
            console.log(e.target)
            document.getElementById('action').style.left = e.target.offsetLeft + 'px';
            items.forEach(li_hide => {
                li_hide.classList.remove('active');
            })
            this.classList.add('active');
        })
    })

// console.log("item: ", items)