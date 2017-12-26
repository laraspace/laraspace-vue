<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Image Cropper</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Components</a></li>
                <li class="breadcrumb-item active">Image Croppers</li>
            </ol>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="image-cropper">
                            <div class="row">
                                <div class="col-8 img-cropper-col">
                                    <!-- Demo -->
                                    <div class="img-container">
                                        <img id="image" src="/assets/img/avatars/avatar-lg.png"
                                             alt="Picture">
                                    </div>
                                </div>
                                <div class="col">
                                    <!-- Preview -->
                                    <div class="docs-preview clearfix">
                                        <div class="img-preview preview-lg"></div>
                                        <div class="img-preview preview-md"></div>
                                        <div class="img-preview preview-sm"></div>
                                        <div class="img-preview preview-xs"></div>
                                    </div>

                                    <!-- Data -->
                                    <div class="docs-data">
                                        <div class="input-group input-group-sm">
                                            <label class="input-group-addon" for="dataX">X</label>
                                            <input type="text" class="form-control" id="dataX" placeholder="x">
                                            <span class="input-group-addon">px</span>
                                        </div>
                                        <div class="input-group input-group-sm">
                                            <label class="input-group-addon" for="dataY">Y</label>
                                            <input type="text" class="form-control" id="dataY" placeholder="y">
                                            <span class="input-group-addon">px</span>
                                        </div>
                                        <div class="input-group input-group-sm">
                                            <label class="input-group-addon" for="dataWidth">Width</label>
                                            <input type="text" class="form-control" id="dataWidth" placeholder="width">
                                            <span class="input-group-addon">px</span>
                                        </div>
                                        <div class="input-group input-group-sm">
                                            <label class="input-group-addon" for="dataHeight">Height</label>
                                            <input type="text" class="form-control" id="dataHeight" placeholder="height">
                                            <span class="input-group-addon">px</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="docs-set">
                                <div class="row">
                                    <div class="col docs-buttons">
                                        <h5 class="section-semi-title">Modes:</h5>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="setDragMode"
                                                    data-option="move" title="Move">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="jquery().cropper(&quot;setDragMode&quot;, &quot;move&quot;)"> <span
                                                    class="icon-fa icon-fa-arrows"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="setDragMode"
                                                    data-option="crop" title="Crop">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)"> <span
                                                    class="icon-fa icon-fa-crop"></span>
                                            </span>
                                            </button>
                                        </div>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="zoom"
                                                    data-option="0.1" title="Zoom In">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;zoom&quot;, 0.1)"> <span
                                                    class="icon-fa icon-fa-search-plus"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="zoom"
                                                    data-option="-0.1" title="Zoom Out">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;zoom&quot;, -0.1)"> <span
                                                    class="icon-fa icon-fa-search-minus"></span>
                                            </span>
                                            </button>
                                        </div>
                                        <div class="btn-group">
                                            <label class="btn btn-primary btn-upload" for="inputImage"
                                                   title="Upload image file">
                                                <input type="file" class="sr-only" id="inputImage" name="file"
                                                       accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff">
                                                <span class="docs-tooltip" data-toggle="tooltip"
                                                      title="Import image with Blob URLs">
                                                    <span class="icon-fa icon-fa-upload"></span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col docs-buttons">
                                        <h5 class="section-semi-title">Transform:</h5>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="move"
                                                    data-option="-10" data-second-option="0" title="Move Left">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                              title="$().cropper(&quot;move&quot;, -10, 0)">
                                                <span class="icon-fa icon-fa-arrow-left"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="move"
                                                    data-option="10" data-second-option="0" title="Move Right">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;move&quot;, 10, 0)"> <span
                                                    class="icon-fa icon-fa-arrow-right"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="move"
                                                    data-option="0" data-second-option="-10" title="Move Up">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;move&quot;, 0, -10)"> <span
                                                    class="icon-fa icon-fa-arrow-up"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="move"
                                                    data-option="0" data-second-option="10" title="Move Down">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;move&quot;, 0, 10)"> <span
                                                    class="icon-fa icon-fa-arrow-down"></span>
                                            </span>
                                            </button>
                                        </div>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="rotate"
                                                    data-option="-45" title="Rotate Left">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;rotate&quot;, -45)">
                                                <span class="icon-fa icon-fa-rotate-left"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="rotate"
                                                    data-option="45" title="Rotate Right">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;rotate&quot;, 45)">
                                                <span class="icon-fa icon-fa-rotate-right"></span>
                                            </span>
                                            </button>
                                        </div>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="scaleX"
                                                    data-option="-1" title="Flip Horizontal">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;scaleX&quot;, -1)">
                                                <span class="icon-fa icon-fa-arrows-h"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="scaleY"
                                                    data-option="-1" title="Flip Vertical">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;scaleY&quot;, -1)">
                                              <span class="icon-fa icon-fa-arrows-v"></span>
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col docs-buttons">
                                        <h5 class="section-semi-title">Reset Plugins:</h5>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="crop" title="Crop">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;crop&quot;)">
                                              <span class="icon-fa icon-fa-check"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="clear" title="Clear">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;clear&quot;)">
                                              <span class="icon-fa icon-fa-remove"></span>
                                            </span>
                                            </button>
                                        </div>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="disable"
                                                    title="Disable">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;disable&quot;)">
                                              <span class="icon-fa icon-fa-lock"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="enable"
                                                    title="Enable">
                                        <span class="docs-tooltip" data-toggle="tooltip"
                                              title="$().cropper(&quot;enable&quot;)">
                                            <span class="icon-fa icon-fa-unlock"></span>
                                        </span>
                                            </button>
                                        </div>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-primary" data-method="reset" title="Reset">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;reset&quot;)">
                                                <span class="icon-fa icon-fa-refresh"></span>
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="destroy"
                                                    title="Destroy">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;destroy&quot;)">
                                                <span class="icon-fa icon-fa-power-off"></span>
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col docs-buttons">
                                        <h5 class="section-semi-title">Get Canvas:</h5>
                                        <div class="btn-group btn-group-crop">
                                            <button type="button" class="btn btn-primary" data-method="getCroppedCanvas">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;getCroppedCanvas&quot;)">
                                                  Get Cropped Canvas
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="getCroppedCanvas"
                                                    data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;getCroppedCanvas&quot;,
                                                   { width: 160, height: 90 })">
                                                160&times;90
                                            </span>
                                            </button>
                                            <button type="button" class="btn btn-primary" data-method="getCroppedCanvas"
                                                    data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;getCroppedCanvas&quot;,
                                                   { width: 320, height: 180 })">
                                                320&times;180
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col docs-toggles">
                                        <h5 class="section-semi-title">Aspect Ratio:</h5>
                                        <div class="btn-group btn-group-justified" data-toggle="buttons">
                                            <label class="btn btn-primary active">
                                                <input type="radio" class="sr-only" id="aspectRatio0" name="aspectRatio"
                                                       value="1.7777777777777777">
                                                <span class="docs-tooltip" data-toggle="tooltip"
                                                      title="aspectRatio: 16 / 9">
                                                16:9
                                            </span>
                                            </label>
                                            <label class="btn btn-primary">
                                                <input type="radio" class="sr-only" id="aspectRatio1" name="aspectRatio"
                                                       value="1.3333333333333333">
                                                <span class="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 4 / 3">
                                                4:3
                                            </span>
                                            </label>
                                            <label class="btn btn-primary">
                                                <input type="radio" class="sr-only" id="aspectRatio2" name="aspectRatio"
                                                       value="1">
                                                <span class="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 1 / 1">
                                                1:1
                                            </span>
                                            </label>
                                            <label class="btn btn-primary">
                                                <input type="radio" class="sr-only" id="aspectRatio3" name="aspectRatio"
                                                       value="0.6666666666666666">
                                                <span class="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 2 / 3">
                                                2:3
                                            </span>
                                            </label>
                                            <label class="btn btn-primary">
                                                <input type="radio" class="sr-only" id="aspectRatio4" name="aspectRatio"
                                                       value="NaN">
                                                <span class="docs-tooltip" data-toggle="tooltip" title="aspectRatio: NaN">
                                                Free
                                            </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col docs-toggles">
                                        <h5 class="section-semi-title">View Modes:</h5>
                                        <div class="btn-group btn-group-justified" data-toggle="buttons">
                                            <label class="btn btn-primary active">
                                                <input type="radio" class="sr-only" id="viewMode0" name="viewMode" value="0"
                                                       checked>
                                                <span class="docs-tooltip" data-toggle="tooltip" title="View Mode 0">
                                                VM0
                                            </span>
                                            </label>
                                            <label class="btn btn-primary">
                                                <input type="radio" class="sr-only" id="viewMode1" name="viewMode"
                                                       value="1">
                                                <span class="docs-tooltip" data-toggle="tooltip" title="View Mode 1">
                                                VM1
                                            </span>
                                            </label>
                                            <label class="btn btn-primary">
                                                <input type="radio" class="sr-only" id="viewMode2" name="viewMode"
                                                       value="2">
                                                <span class="docs-tooltip" data-toggle="tooltip" title="View Mode 2">
                                                VM2
                                            </span>
                                            </label>
                                            <label class="btn btn-primary">
                                                <input type="radio" class="sr-only" id="viewMode3" name="viewMode"
                                                       value="3">
                                                <span class="docs-tooltip" data-toggle="tooltip" title="View Mode 3">
                                              VM3
                                            </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <!-- Show the cropped image in modal -->
                                <div class="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true"
                                     aria-labelledby="getCroppedCanvasTitle" role="dialog" tabindex="-1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="getCroppedCanvasTitle">Cropped</h4>
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                                    &times;
                                                </button>
                                            </div>
                                            <div class="modal-body"></div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close
                                                </button>
                                                <a class="btn btn-primary" id="download" href="javascript:void(0);"
                                                   download="cropped.jpg">Download</a>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- /.modal -->
                                <h5 class="section-semi-title">Get Data:</h5>
                                <div class="row">
                                    <div class="col-xl-4 docs-buttons">
                                        <div class="input-group input-group-sm">
                                            <button type="button" class="btn btn-primary input-group-addon"
                                                    data-method="setData" data-target="#putData1">
                                              <span class="docs-tooltip" data-toggle="tooltip"
                                                    title="$().cropper(&quot;setData&quot;, data)">
                                                Set Data
                                              </span>
                                            </button>
                                            <button type="button" class="btn btn-primary input-group-addon"
                                                    data-method="getData" data-option data-target="#putData1">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;getData&quot;)">
                                                Get Data
                                            </span>
                                            </button>
                                            <input type="text" class="form-control" id="putData1" placeholder="Get data ">
                                        </div>
                                    </div>
                                    <div class="col-xl-4 docs-buttons">
                                        <div class="input-group input-group-sm">
                                            <button type="button" class="btn btn-primary input-group-addon"
                                                    data-method="getImageData" data-option data-target="#putData2">
                                             <span class="docs-tooltip" data-toggle="tooltip"
                                                   title="$().cropper(&quot;getImageData&quot;)">
                                                Get Image Data
                                            </span>
                                            </button>
                                            <input type="text" class="form-control" id="putData2" placeholder="Get data ">
                                        </div>
                                    </div>
                                    <div class="col-xl-4 docs-buttons">
                                        <div class="input-group input-group-sm">
                                            <button type="button" class="btn btn-primary input-group-addon"
                                                    data-method="getContainerData" data-option data-target="#putData3">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;getContainerData&quot;)">
                                                Get Container Data
                                            </span>
                                            </button>
                                            <input type="text" class="form-control" id="putData3" placeholder="Get data ">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6 docs-buttons">
                                        <div class="input-group input-group-sm">
                                            <button type="button" class="btn btn-primary  input-group-addon"
                                                    data-method="getCanvasData" data-option data-target="#putData4">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;getCanvasData&quot;)">
                                                Get Canvas Data
                                            </span>
                                            </button>
                                            <input type="text" class="form-control" id="putData4" placeholder="Get data ">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 docs-buttons">
                                        <div class="input-group input-group-sm">
                                            <button type="button" class="btn btn-primary input-group-addon"
                                                    data-method="getCropBoxData" data-option data-target="#putData5">
                                            <span class="docs-tooltip" data-toggle="tooltip"
                                                  title="$().cropper(&quot;getCropBoxData&quot;)">
                                                Get Crop Box Data
                                            </span>
                                            </button>
                                            <input type="text" class="form-control" id="putData5" placeholder="Get data ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'cropper/dist/cropper';

    export default {

        methods: {
            handleImageCropper(){

                var console = window.console || { log: function () {} };
                var $image = jquery('#image');
                var $download = jquery('#download');
                var $dataX = jquery('#dataX');
                var $dataY = jquery('#dataY');
                var $dataHeight = jquery('#dataHeight');
                var $dataWidth = jquery('#dataWidth');
                var $dataRotate = jquery('#dataRotate');
                var $dataScaleX = jquery('#dataScaleX');
                var $dataScaleY = jquery('#dataScaleY');
                var options = {
                    aspectRatio: 16 / 9,
                    preview: '.img-preview',
                    crop: function (e) {
                        $dataX.val(Math.round(e.x));
                        $dataY.val(Math.round(e.y));
                        $dataHeight.val(Math.round(e.height));
                        $dataWidth.val(Math.round(e.width));
                        $dataRotate.val(e.rotate);
                        $dataScaleX.val(e.scaleX);
                        $dataScaleY.val(e.scaleY);
                    }
                };

                // Tooltip
                $('[data-toggle="tooltip"]').tooltip();


                // Cropper
                $image.on({
                    'build.cropper': function (e) {
                        console.log(e.type);
                    },
                    'built.cropper': function (e) {
                        console.log(e.type);
                    },
                    'cropstart.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'cropmove.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'cropend.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'crop.cropper': function (e) {
                        console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
                    },
                    'zoom.cropper': function (e) {
                        console.log(e.type, e.ratio);
                    }
                }).cropper(options);


                // Buttons
                if (!$.isFunction(document.createElement('canvas').getContext)) {
                    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
                }

                if (typeof document.createElement('cropper').style.transition === 'undefined') {
                    $('button[data-method="rotate"]').prop('disabled', true);
                    $('button[data-method="scale"]').prop('disabled', true);
                }

                // Download
                if (typeof $download[0].download === 'undefined') {
                    $download.addClass('disabled');
                }

                // Options
                $('.docs-toggles').on('change', 'input', function () {
                    var $this = $(this);
                    var name = $this.attr('name');
                    var type = $this.prop('type');
                    var cropBoxData;
                    var canvasData;

                    if (!$image.data('cropper')) {
                        return;
                    }

                    if (type === 'checkbox') {
                        options[name] = $this.prop('checked');
                        cropBoxData = $image.cropper('getCropBoxData');
                        canvasData = $image.cropper('getCanvasData');

                        options.built = function () {
                            $image.cropper('setCropBoxData', cropBoxData);
                            $image.cropper('setCanvasData', canvasData);
                        };

                    } else if (type === 'radio') {
                        options[name] = $this.val();
                    }
                    $image.cropper('destroy').cropper(options);
                });


                // Methods
                $('.docs-buttons').on('click', '[data-method]', function () {
                    var $this = $(this);
                    var data = $this.data();
                    var $target;
                    var result;

                    if ($this.prop('disabled') || $this.hasClass('disabled')) {
                        return;
                    }

                    if ($image.data('cropper') && data.method) {
                        data = $.extend({}, data); // Clone a new one

                        if (typeof data.target !== 'undefined') {
                            $target = $(data.target);

                            if (typeof data.option === 'undefined') {
                                try {
                                    data.option = JSON.parse($target.val());
                                } catch (e) {
                                    console.log(e.message);
                                }
                            }
                        }

                        if (data.method === 'rotate') {
                            $image.cropper('clear');
                        }

                        result = $image.cropper(data.method, data.option, data.secondOption);

                        if (data.method === 'rotate') {
                            $image.cropper('crop');
                        }

                        switch (data.method) {
                            case 'scaleX':
                            case 'scaleY':
                                $(this).data('option', -data.option);
                                break;

                            case 'getCroppedCanvas':
                                if (result) {

                                    // Bootstrap's Modal
                                    $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

                                    if (!$download.hasClass('disabled')) {
                                        $download.attr('href', result.toDataURL('image/jpeg'));
                                    }
                                }
                                break;
                        }

                        if ($.isPlainObject(result) && $target) {
                            try {
                                $target.val(JSON.stringify(result));
                            } catch (e) {
                                console.log(e.message);
                            }
                        }

                    }
                });

                // Keyboard
                $(document.body).on('keydown', function (e) {

                    if (!$image.data('cropper') || this.scrollTop > 300) {
                        return;
                    }

                    switch (e.which) {
                        case 37:
                            e.preventDefault();
                            $image.cropper('move', -1, 0);
                            break;

                        case 38:
                            e.preventDefault();
                            $image.cropper('move', 0, -1);
                            break;

                        case 39:
                            e.preventDefault();
                            $image.cropper('move', 1, 0);
                            break;

                        case 40:
                            e.preventDefault();
                            $image.cropper('move', 0, 1);
                            break;
                    }
                });


                // Import image
                var $inputImage = $('#inputImage');
                var URL = window.URL || window.webkitURL;
                var blobURL;

                if (URL) {
                    $inputImage.change(function () {
                        var files = this.files;
                        var file;

                        if (!$image.data('cropper')) {
                            return;
                        }
                        if (files && files.length) {
                            file = files[0];

                            if (/^image\/\w+$/.test(file.type)) {
                                blobURL = URL.createObjectURL(file);
                                $image.one('built.cropper', function () {

                                    // Revoke when load complete
                                    URL.revokeObjectURL(blobURL);
                                }).cropper('reset').cropper('replace', blobURL);
                                $inputImage.val('');
                            } else {
                                window.alert('Please choose an image file.');
                            }
                        }
                    });
                } else {
                    $inputImage.prop('disabled', true).parent().addClass('disabled');
                }
            }
        },
        mounted(){
            let vm = this;
            this.$nextTick(() => {
                vm.handleImageCropper();
            });
        },
    }
</script>