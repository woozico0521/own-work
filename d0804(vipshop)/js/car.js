new Vue({
    el:'#app',
    data:{
        
        productList:[
            {
                'pic':'images/89070422-7f11-4013-937a-9495ab5d7385_t_235x297_90.jpg',
                'shop':'自营',
                'res':'乐町女装时尚风暴节 - 两侧绑带针织开衫',
                'size':'S',
                'dPrice':219,
                'dePrice':459,
                'rPrice':175.2,
                'sPrice':43.8,
                'num':1,

            },
            {
                'pic':'images/f3974450-62a5-40ed-95a7-e05bc0c136a3_5t_235x297_90.jpg',
                'shop':'自营',
                'res':'乐町女装时尚风暴节 - 格纹翻领西装',
                'size':'S',
                'dPrice':329,
                'dePrice':609,
                'rPrice':263.2,
                'sPrice':65.8,
                'num':1,
            
            },
            {
                'pic':'images/d27d9dfb-5a8d-458e-aaad-9551a6d021ec_5t_235x297_90.jpg',
                'shop':'自营',
                'res':'飞利浦Philips口腔护理专场-【魔力触控感应手柄】飞利浦电吹风',
                'size':'均码',
                'dPrice':399,
                'dePrice':569,
                'rPrice':339,
                'sPrice':60,
                'num':1,
            },
        ],
        //sPrice:0,

    },
    methods:{
        minus(index){
            if(this.productList[index].num>1){
                this.productList[index].num--;
            }else{
                this.productList[index].num=1;
            }
        },
        add(index){
            this.productList[index].num++;
        },
        sum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.dPrice*val.num;
            })
            return sum;
        },
        sSum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.sPrice*val.num;
            })
            return sum;
        },
        rSum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.rPrice*val.num;
            })
            return sum;
        },
        sNum(){
            let sum = 0;
            this.productList.forEach(function(val,index){
                sum += val.num;
            })
            return sum;
        },
        del(index){
            let a = this.productList.splice(index,1);
            console.log(a);
        }


    },
})