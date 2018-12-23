document.addEventListener('DOMContentLoaded',()=>
{
	const calendarEl = document.getElementById('calendar');
	const options =
	{
		height: 'auto',
		header:
		{
			left: 'prev,next today',
			center: 'title',
			right: 'day,month,listWeek'
		},
		defaultView: 'listWeek',
		locale: 'de',
		googleCalendarApiKey: 'AIzaSyDE3COJLnCpJ2uqL9WlvU2bcX-oj3OgNaA',//TCG Warehouse, for testing. Integrate or show multiple calendars at once later.
		eventSources:
		[
			'8m4pqn7179m8vof6qjvq8o3eag@group.calendar.google.com',	// TCG Warehouse
			't2k7qiv3s455pcapd7g4otqji0@group.calendar.google.com'	//	reya.de
		]
	};
	const calendar = new FullCalendar.Calendar(calendarEl,options);
	calendar.render();
});
