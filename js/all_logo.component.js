let allTag = `<div class="col-sm-3 md-2" style="margin-bottom: 1%;">
                    <img :src="link.image" class="img-responsive" style="width:100%" alt="Image">
                       <a href="">
                                <img src="./assets/facebook.png" class='img-responsive'  style='width:35px;height:33px;float:left' >
                        </a>
                        <a href="">
                            <img src="./assets/twitter.png" class='img-responsive'  style='width:35px;height:35px;float:left'>
                        </a>
                    <button v-if='link.liked==false' type="button" @click='changeStatus' class="btn btn-default glyphicon glyphicon-heart-empty col-sm-2"></button>
                    <button v-if='link.liked==true' type="button" @click='changeStatus' class="btn btn-danger glyphicon glyphicon-heart-empty col-sm-2"></button>
                    
                    <button type="button" class="btn btn-primary "   style='float: right;width:148px'>Download</button>
                </div>`

Vue.component('all-logo',{
    props:['link','tag'],
    template:allTag,
    methods:{
        changeStatus: function(){
            this.$emit('status',this.link)
        }
    }
})