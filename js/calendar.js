document.addEventListener('DOMContentLoaded',()=>
{
	const calendarEl = document.getElementById('calendar');
	const options =
	{
		defaultView: 'listWeek',
		locale: 'de'
	}
	const calendar = new FullCalendar.Calendar(calendarEl,options);
	calendar.render();
});
