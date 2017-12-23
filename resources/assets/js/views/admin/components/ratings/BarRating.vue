<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Bar Ratings</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Home</a></li>
                <li class="breadcrumb-item"><a href="">Components</a></li>
                <li class="breadcrumb-item"><a href="">Ratings</a></li>
                <li class="breadcrumb-item active">Bar</li>
            </ol>
        </div>
        <div class="row bar-rating">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>1/10 Rating</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-number" name="rating" autocomplete="off">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7" selected="selected">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>Movie Rating</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-movie" name="rating" autocomplete="off">
                            <option value="Bad">Bad</option>
                            <option value="Mediocre">Mediocre</option>
                            <option value="Good" selected="selected">Good</option>
                            <option value="Awesome">Awesome</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row bar-rating">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>Square Rating</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-square" name="rating" autocomplete="off">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>Pill Rating</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-pill" name="rating" autocomplete="off">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row bar-rating">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>Reversed Rating</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-reversed" name="rating" autocomplete="off">
                            <option value="Strongly Agree">Strongly Agree</option>
                            <option value="Agree">Agree</option>
                            <option value="Neither Agree or Disagree" selected="selected">Neither Agree or
                                Disagree
                            </option>
                            <option value="Disagree">Disagree</option>
                            <option value="Strongly Disagree">Strongly Disagree</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>Horizontal Rating</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-horizontal" name="rating" autocomplete="off">
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1" selected="selected">1</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row bar-rating">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>Font Awesome Stars</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-fontawesome" name="rating" autocomplete="off">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h6>CSS Stars</h6>
                    </div>
                    <div class="card-body">
                        <select id="bar-css" name="rating" autocomplete="off">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    require('jquery-bar-rating/jquery.barrating');

    export default {
        mounted() {
            let vm=this;
            let BarRating = function () {
                return {
                    //main function to initiate the module
                    init: function () {
                        vm.handleNumber();
                        vm.handleMovie();
                        vm.handleSquare();
                        vm.handlePill();
                        vm.handleReversed();
                        vm.handleHorizontal();
                        vm.handleFontAwesome();
                        vm.handleCSS();
                    }
                };
            }();
            this.$nextTick(() => {
                BarRating.init();
            });
        },
        methods: {

            handleNumber() {
                jquery('#bar-number').barrating('show', {
                    theme: 'bars-1to10'
                });
            },

            handleMovie() {
                jquery('#bar-movie').barrating('show', {
                    theme: 'bars-movie'
                });

                jquery('#bar-movie').barrating('set', 'Mediocre');
            },

            handleSquare() {

                jquery('#bar-square').barrating('show', {
                    theme: 'bars-square',
                    showValues: true,
                    showSelectedRating: false
                });
            },

            handlePill() {
                jquery('#bar-pill').barrating('show', {
                    theme: 'bars-pill',
                    initialRating: 'A',
                    showValues: true,
                    showSelectedRating: false,
                    allowEmpty: true,
                    emptyValue: '-- no rating selected --',
                    onSelect: function (value, text) {
                        alert('Selected rating: ' + value);
                    }
                });
            },

            handleReversed() {
                jquery('#bar-reversed').barrating('show', {
                    theme: 'bars-reversed',
                    showSelectedRating: true,
                    reverse: true
                });
            },

            handleHorizontal() {
                jquery('#bar-horizontal').barrating('show', {
                    theme: 'bars-horizontal',
                    reverse: true,
                    hoverState: false
                });
            },

            handleFontAwesome() {
                jquery('#bar-fontawesome').barrating({
                    theme: 'fontawesome-stars',
                    showSelectedRating: false
                });
            },

            handleCSS() {
                jquery('#bar-css').barrating({
                    theme: 'css-stars',
                    showSelectedRating: false
                });
            }
        }
    }
</script>