new Vue ({
    el:'#app',
    data:{
        allLogo: [
            { image: 'https://placehold.it/150x80?text=1',liked:false},
            { image: 'https://placehold.it/150x80?text=2', liked: false},
            { image: 'https://placehold.it/150x80?text=3', liked: false},
            { image: 'https://placehold.it/150x80?text=4', liked: false},
            { image: 'https://placehold.it/150x80?text=5', liked: false},
            { image: 'https://placehold.it/150x80?text=6', liked: false},
            { image: 'https://placehold.it/150x80?text=7', liked: false},
            { image: 'https://placehold.it/150x80?text=8', liked: false},
        ]
    },
    methods:{
        isLike(img){
            if(img.liked==false){
                img.liked= true
                return img
            }
            if (img.liked == true) {
                img.liked = false
                return img
            }
            
        }
    }
    
})