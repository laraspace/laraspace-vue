<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Star Ratings</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Components</a></li>
                <li class="breadcrumb-item"><a href="#">Ratings</a></li>
                <li class="breadcrumb-item active">Star</li>
            </ol>
        </div>
        <div class="rating">
            <div class="row">
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>Default</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-default" class="star-rating"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>Read Only</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-readonly" class="star-rating"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>Start with Score</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-score" class="star-rating"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>Number of Stars</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-number" class="star-rating"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>Half Star</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-half" class="star-rating"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>Cancel Button</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-cancel" class="star-rating"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>Custom Icons</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-custom" class="star-rating"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>With Target</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-target" class="star-rating"></div>
                            <div id="target" class="star-rating-hint"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>With Percentage</h6>
                        </div>
                        <div class="card-block">
                            <div id="star-percentage" class="star-rating"></div>
                            <div id="target-percentage" class="star-rating-hint"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    import "raty-js/lib/jquery.raty";
    import "raty-js/lib/jquery.raty.css";

    export default {
        mounted() {
            let vm=this;
            let StarRating = function () {
                return {
                    //main function to initiate the module
                    init: function () {
                        vm.handleDefaults();
                        vm.handleReadOnly();
                        vm.handleWithScore();
                        vm.handleWithNumberOfStars();
                        vm.handleHalfStars();
                        vm.handleCancelButton();
                        vm.handleCustomIcons();
                        vm.handleWithTarget();
                        vm.handleWithPercentage();
                    }
                };
            }();
            this.$nextTick(() => {
                StarRating.init();
            });

        },

        methods: {
            handleDefaults() {
                $.fn.raty.defaults.starOn = 'fa fa-fw fa-star color-orange';
                $.fn.raty.defaults.starOff = 'fa fa-fw fa-star-o';
                $.fn.raty.defaults.starHalf = 'fa fa-fw fa-star-half-o color-orange';
                $.fn.raty.defaults.cancelOff = 'fa fa-fw fa-minus-square-o';
                $.fn.raty.defaults.cancelOn = 'fa fa-fw fa-minus-square';
                $.fn.raty.defaults.starType = 'i';

                $('#star-default').raty();
            },
            handleReadOnly() {
                $('#star-readonly').raty({
                    readOnly: true
                });
            },
            handleWithScore() {
                $('#star-score').raty({
                    score: 2,
                });
            },
            handleWithNumberOfStars() {
                $('#star-number').raty({
                    number: 10
                });
            },
            handleHalfStars() {
                $('#star-half').raty({
                    half: true
                });
            },
            handleCancelButton() {
                $('#star-cancel').raty({
                    cancel: true
                });
            },
            handleCustomIcons() {
                $('#star-custom').raty({
                    starOn: 'fa fa-fw fa-heart color-red',
                    starOff: 'fa fa-fw fa-heart-o'
                });
            },

            handleWithTarget() {
                $('#star-target').raty({
                    target: '#target',
                    targetKeep: true
                });
            },

            handleWithPercentage() {
                $('#star-percentage').raty({
                    number: 10,
                    hints: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
                    target: '#target-percentage',
                    targetText: '0',
                    targetKeep: true
                });
            }
        }
    }

    //
</script>