function scrollHorizontal(event)
{
	event.preventDefault();
	window.scroll(
	{
		left: window.scrollX + event.deltaY * 7,
		behavior: 'smooth',
	});
	// window.scroll(window.scrollX + event.deltaY, window.scrollX);
}

/* Listener on window once we start scrolling, we run our function 💨 */
window.addEventListener('wheel', scrollHorizontal, { passive: false });
