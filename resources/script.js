let info = {
	canvas: null,
	context: null,

}

window.onload = () => {
    alert('YIK')
    info.canvas = document.querySelector('myCanvas');
    info.context = info.canvas.getContext('2d');
    
}