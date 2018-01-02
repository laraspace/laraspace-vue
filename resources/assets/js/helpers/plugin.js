export default {

    EasyPieChart(){
        var elems = $('.easy-pie-chart');

        elems.each(function (index, element) {
            var color = $(this).data('color') ? $(this).data('color') : '#ffde00';

            let myBarChart = new EasyPieChart(element, {
                scaleColor: false,
                barColor: color,
                trackColor: '#f8f8f8',
                size: 80,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
    },

    MetisMenu(){
        $("#menu").metisMenu();
    },

    Select2(){
        jquery(".ls-select2").select2();
    },

    SwitchToggles(){

        var elems = $('.ls-switch');

        elems.each(function(index,element) {

            var color = $(this).data('color') ? $(this).data('color') : '#ffde00';
            var size = $(this).data('size') ? $(this).data('size') : 'default';

            var switchery = new Switchery(this, {
                color : color,
                size : size,
            });
        });
    },

    TimePickers(){
        window.$('.ls-clockpicker').clockpicker({
            donetext: 'Done'
        });


        var elems = $('.ls-timepicker');

        elems.each(function (index, element) {
            var timeFormat = $(this).data('format') ? $(this).data('format') : 'g:ia';
            var showDuration = $(this).data('duration') ? $(this).data('duration') : false;

            window.jquery(this).timepicker({

                timeFormat: timeFormat,
                showDuration: showDuration,
                minTime: '2:00pm',
                maxTime: '11:30pm'
            });
        });
        
    },

    MultiSelect(){
        $('.ls-multi-select').multiSelect()
    },

    DatePicker(){
        jquery('.ls-datepicker').datepicker();
    },

    Editors(){
        $('.ls-summernote').summernote();

        var editor = $('.ls-simplemde')[0];

        if (editor) {
            var simplemde = new SimpleMDE({element: editor});
        }

    },

    initPlugins(plugins){
        plugins.forEach((plugin) => {
            if(this.isFunction(this[plugin])){
                this[plugin]();
            }
        })
    },

    isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    },
    CustomScrollBars() {

        // setTimeout(function(){
        //     $(".scroll-pane").mCustomScrollbar({theme:"minimal-dark"});
        // },1000);

        jquery(".scroll-pane").mCustomScrollbar({theme: "minimal-dark"});
    },

    DataTables(){

        jquery('#default-datatable').DataTable();

        jquery('#responsive-datatable').DataTable({
            responsive: true
        });
    }

}