let cl = console.log;

//condition  >>> scrollTop  + clientHeight >>> = scrollHeight - 300

window.addEventListener('scroll', () => {
    cl(`scrollTop ${document.documentElement.scrollTop}
        clientHeight ${document.documentElement.clientHeight}
        scrollHeight ${document.documentElement.scrollHeight}`)

    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight =  document.documentElement.scrollHeight;
    if(scrollTop +  clientHeight  >= scrollHeight - 300){
        let section = document.createElement('section');
       section.innerHTML = 'on the fly section element'
        for (let i = 0; i < 6; i++) {
            main.append(section)            
        }
    }
})