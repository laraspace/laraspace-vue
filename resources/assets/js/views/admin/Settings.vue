<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Settings</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active"><a href="#">Settings</a></li>
            </ol>
        </div>
        <div class="card">
            <div class="card-header">
                <h6>Easy Site Settings API</h6>
            </div>
            <div class="card-block">
                <p>Laraspace provides easy way to store and retrieve your Site Settings</p>
                <p><code>Setting::setSetting('key','value')</code></p>
                <p><code>Setting::getSetting('key')</code></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h6>Example Social Settings</h6>
                    </div>
                    <div class="card-block">
                        <form action="/admin/settings/social" method="post">
                            <div class="form-body">
                                <div class="form-group row">
                                    <label class="col-md-4 col-lg-2 form-control-label">Facebook Page URL</label>
                                    <div class="col-md-8 col-lg-10">
                                        <div class="input-icon">
                                            <i class="fa fa-facebook"></i>
                                            <input type="text" class="form-control" name="facebook" value="">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-4 col-lg-2 form-control-label">Google Plus URL</label>
                                    <div class="col-md-8 col-lg-10">
                                        <div class="input-icon">
                                            <i class="fa fa-google-plus"></i>
                                            <input type="text" class="form-control" name="google" value="">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-4 col-lg-2 form-control-label">Twitter URL</label>
                                    <div class="col-md-8 col-lg-10">
                                        <div class="input-icon">
                                            <i class="fa fa-twitter"></i>
                                            <input type="text" class="form-control" name="twitter" value="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
