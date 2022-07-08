
var tween=gsap.from(".homeimg", {opacity:0,duration: 2, y: -100});

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    navigation:true,
    paddingTop: '60px',
    anchors:['about', 'projects', 'contact'],
    keyboardScrolling: true,
    lazyLoading: true,
    afterLoad: function(origin, destination, direction){
        tween.play();
    },
 
});
var hometxt=document.querySelector('.hometext').children
for (let index = 0; index < hometxt.length; index++) {
    const element = hometxt[index];
    if(index<4)
    {
    gsap.from(element, {opacity:0,duration: 0.7,delay:index/2, x: -100});
    }
    else 
    {
        gsap.from(element.children[0], {opacity:0,duration: 0.7,delay:index/2, y: 100});
        gsap.from(element.children[1], {opacity:0,duration: 0.7,delay:index/2+0.4, y: 100});

    }

}