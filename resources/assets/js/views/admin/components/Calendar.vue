<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Calendar</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Components</a></li>
                <li class="breadcrumb-item active">Calendar</li>
            </ol>
        </div>
        <div class="calendar">
            <div class="row">
                <div class="col-xl-2 calendar-event">
                    <div class="card">
                        <div class="card-header">
                            <h5>Events</h5>
                        </div>
                        <div class="card-block">
                            <ol class="fc-event-list">
                                <li><span class="fc-event-dot"></span> Default</li>
                                <li><span class="fc-event-dot fc-event-primary-dot"></span> Primary</li>
                                <li><span class="fc-event-dot fc-event-success-dot"></span> Success</li>
                                <li><span class="fc-event-dot fc-event-danger-dot"></span> Danger</li>
                                <li><span class="fc-event-dot fc-event-warning-dot"></span> Warning</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="col-xl-10">
                    <div class="card">
                        <div class="card-block">
                            <div id='calendar'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import fullCalendar from 'fullcalendar';
    import 'fullcalendar/dist/fullcalendar.css';

    export default {

        mounted(){
            let vm =this;
            this.$nextTick(() => {
                vm.handleCalendar();
            });
        },
        methods:{
            handleCalendar(){
                $('#calendar').fullCalendar({
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay,listMonth'
                    },
                    defaultDate: '2017-08-12',
                    navLinks: true, // can click day/week names to navigate views
                    businessHours: true, // display business hours
                    editable: true,
                    events: [
                        {
                            title: 'All Day Event',
                            start: '2017-08-01T13:00:00',
                            constraint: 'allDayEvent',
                            color:'#4fc47f'
                        },
                        {
                            title: 'Long Event',
                            start: '2017-08-5',
                            end: '2017-08-7',
                            constraint: 'availableForLongEvent', // defined below
                            color: '#007dcc'
                        },
                        {
                            title: 'Conference',
                            start: '2017-08-10',
                            end: '2017-08-12',
                            color:'#f35a3d'
                        },
                        {
                            title: 'Meetting',
                            start: '2017-08-10T10:30:00'
                        },
                        {
                            title: 'Lunch',
                            start: '2017-08-10T12:00:00'
                        },
                        {
                            title: 'Meetting',
                            start: '2017-08-10T14:30:00'
                        },
                        {
                            title: 'Birthday Party',
                            start: '2017-08-16T20:00:00',
                            color:'#f35a3d'
                        },
                        {
                            title: 'last day Event',
                            start: '2017-08-30T10:00:00',
                            end: '2017-08-30T19:00:00',
                            color:'#ffde00'
                        },

                        // areas where "LongEvent" must be dropped
                        {
                            id: 'availableForLongEvent',
                            start: '2017-08-6',
                            end: '2017-08-11',
                            rendering: 'background'
                        },
                        {
                            id: 'availableForLongEvent',
                            start: '2017-08-17T13:00:00',
                            end: '2017-08-22T12:00:00',
                            rendering: 'background'
                        },

                        // areas where "allDayEvent" must be dropped
                        {
                            id: 'allDayEvent',
                            start: '2017-08-1',
                            end: '2017-08-31',
                            rendering: 'background'
                        },


                        // red areas where no events can be dropped
                        {
                            start: '2017-08-26',
                            end: '2017-08-28',
                            overlap: false,
                            rendering: 'background',
                            color: '#ff9f89'
                        },
                        {
                            start: '2017-08-13',
                            end: '2017-08-16',
                            overlap: false,
                            rendering: 'background',
                            color: '#ff9f89'
                        }
                    ]
                });
            }
        }
    }
</script>