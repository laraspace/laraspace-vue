<template>
    <div class="error-box">
        <div class="row">
            <div class="col-sm-12 text-sm-center">
                <h1>404</h1>
                <h5>Whoops! You got Lost!</h5>
                <router-link class="btn btn-lg bg-yellow" to="/"><i class="fa fa-arrow-left"></i> Go Home </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            setLayoutClasses(){
                let body = $('body');
                body.addClass('page-error-404')
            }
        },
        mounted() {
            this.setLayoutClasses()
        },
        destroyed(){
            $('body').removeClass('page-error-404')
        }
    }
</script>