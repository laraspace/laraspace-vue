<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Nestable Lists</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Components</a></li>
                <li class="breadcrumb-item active">Nestable List</li>
            </ol>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="caption">
                    <h6>Serialised Output</h6>
                </div>
                <div class="actions">
                    <button class="btn btn-info btn-sm" type="button" data-action="expand-all">
                        Expand All
                    </button>
                    <button class="btn btn-warning btn-sm" type="button" data-action="collapse-all">
                        Collapse All
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <textarea id="nestable-output" class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <textarea id="nestable2-output" class="form-control"></textarea>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Nestable Lists</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="dd" id="nestable">
                            <h5 class="section-semi-title">List Default</h5>
                            <ol class="dd-list">
                                <li class="dd-item" data-id="1">
                                    <div class="dd-handle">Item 1</div>
                                </li>
                                <li class="dd-item" data-id="2">
                                    <div class="dd-handle">Item 2</div>
                                    <ol class="dd-list">
                                        <li class="dd-item" data-id="3">
                                            <div class="dd-handle">Item 3</div>
                                        </li>
                                        <li class="dd-item" data-id="4">
                                            <div class="dd-handle">Item 4</div>
                                        </li>
                                        <li class="dd-item" data-id="5">
                                            <div class="dd-handle">Item 5</div>
                                            <ol class="dd-list">
                                                <li class="dd-item" data-id="6">
                                                    <div class="dd-handle">Item 6</div>
                                                </li>
                                                <li class="dd-item" data-id="7">
                                                    <div class="dd-handle">Item 7</div>
                                                </li>
                                                <li class="dd-item" data-id="8">
                                                    <div class="dd-handle">Item 8</div>
                                                </li>
                                            </ol>
                                        </li>
                                        <li class="dd-item" data-id="9">
                                            <div class="dd-handle">Item 9</div>
                                        </li>
                                        <li class="dd-item" data-id="10">
                                            <div class="dd-handle">Item 10</div>
                                        </li>
                                    </ol>
                                </li>
                                <li class="dd-item" data-id="11">
                                    <div class="dd-handle">Item 11</div>
                                </li>
                                <li class="dd-item" data-id="12">
                                    <div class="dd-handle">Item 12</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="dd nestable-light" id="nestable2">
                            <h5 class="section-semi-title">List Light</h5>
                            <ol class="dd-list">
                                <li class="dd-item" data-id="13">
                                    <div class="dd-handle">Item 13</div>
                                </li>
                                <li class="dd-item" data-id="14">
                                    <div class="dd-handle">Item 14</div>
                                </li>
                                <li class="dd-item" data-id="15">
                                    <div class="dd-handle">Item 15</div>
                                    <ol class="dd-list">
                                        <li class="dd-item" data-id="16">
                                            <div class="dd-handle">Item 16</div>
                                        </li>
                                        <li class="dd-item" data-id="17">
                                            <div class="dd-handle">Item 17</div>
                                        </li>
                                        <li class="dd-item" data-id="18">
                                            <div class="dd-handle">Item 18</div>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="dd" id="nestable3">
                            <h5 class="section-semi-title mt-4">List with Draggable Handles</h5>
                            <ol class="dd-list">
                                <li class="dd-item dd3-item" data-id="13">
                                    <div class="dd-handle dd3-handle">Drag</div>
                                    <div class="dd3-content">Item 13</div>
                                </li>
                                <li class="dd-item dd3-item" data-id="14">
                                    <div class="dd-handle dd3-handle">Drag</div>
                                    <div class="dd3-content">Item 14</div>
                                </li>
                                <li class="dd-item dd3-item" data-id="15">
                                    <div class="dd-handle dd3-handle">Drag</div>
                                    <div class="dd3-content">Item 15</div>
                                    <ol class="dd-list">
                                        <li class="dd-item dd3-item" data-id="16">
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">Item 16</div>
                                        </li>
                                        <li class="dd-item dd3-item" data-id="17">
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">Item 17</div>
                                        </li>
                                        <li class="dd-item dd3-item" data-id="18">
                                            <div class="dd-handle dd3-handle">Drag</div>
                                            <div class="dd3-content">Item 18</div>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'nestable/jquery.nestable';

    export default {

        mounted() {
            let vm = this;
            let NestableLists = function () {
                return {
                    //main function to initiate the module
                    init: function () {
                        vm.handleLists();
                        vm.handleOutput();
                        vm.handleOutputActions();
                    }
                };
            }();
            this.$nextTick(() => {
                NestableLists.init();
            });
        },
        methods: {
            updateOutput(e) {
                let list = e.length ? e : $(e.target), output = list.data('output');

                if (window.JSON) {
                    output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
                } else {
                    output.val('JSON browser support required for this demo.');
                }
            },

            handleLists() {
                // activate Nestable for list 1
                $('#nestable').nestable({group: 1}).on('change', this.updateOutput);

                // activate Nestable for list 2
                $('#nestable2').nestable({group: 1}).on('change', this.updateOutput)

                // Draggable
                $('#nestable3').nestable();
            },

            handleOutput() {
                this.updateOutput($('#nestable').data('output', $('#nestable-output')));
                this.updateOutput($('#nestable2').data('output', $('#nestable2-output')));
            },

            handleOutputActions() {
                $('.actions').on('click', function (e) {
                    let target = $(e.target), action = target.data('action');

                    if (action === 'expand-all') {
                        $('.dd').nestable('expandAll');
                    }
                    if (action === 'collapse-all') {
                        $('.dd').nestable('collapseAll');
                    }
                });
            }
        }
    }
</script>
