var LaraspaceForms = function () {

   

    var handleEasyPieCharts = function(){



    };



    return {
        //main function to initiate the module
        init: function () {
            handleSelect2();
            handleBootstrapSelect();
            handleSwitchToggles();
            handleTimePickers();
            handleDatePicker();
            handleMultiSelect();
            handleEditors();
            handleEasyPieCharts();
        }
    };

}();

jQuery(document).ready(function() {
    LaraspaceForms.init();
});

