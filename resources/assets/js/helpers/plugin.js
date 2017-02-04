export default {

    EasyPieChart(){
        var elems = $('.easy-pie-chart');

        elems.each(function (index, element) {
            var color = $(this).data('color') ? $(this).data('color') : '#ffde00';

            $(this).easyPieChart({
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
        $(".ls-select2").select2();
    },

    BootstrapSelect(){
        $(".ls-bootstrap-select").selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check',
            container: 'body'
        });
    },

    SwitchToggles(){
        var elems = $('.ls-switch');

        elems.each(function (index, element) {
            var color = $(this).data('color') ? $(this).data('color') : '#ffde00';
            var size = $(this).data('size') ? $(this).data('size') : 'default';

            var switchery = new Switchery(this, {
                color: color,
                size: size
            });
        });
    },

    TimePickers(){
        $('.ls-clockpicker').clockpicker({
            donetext: 'Done'
        });


        var elems = $('.ls-timepicker');

        elems.each(function (index, element) {
            var timeFormat = $(this).data('format') ? $(this).data('format') : 'g:ia';
            var showDuration = $(this).data('duration') ? $(this).data('duration') : false;

            $(this).timepicker({
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
        $('.ls-datepicker').datepicker();
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
    }
}