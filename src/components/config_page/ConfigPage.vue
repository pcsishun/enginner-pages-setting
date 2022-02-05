<template>
    <div class="config-container">
        <div class="config-content">
            <div class="set-config-title">
                <h4>Setting Environment Container
                    <span><button class="btn btn-outline-danger" @click="haddleLogout">logout</button></span>
                </h4>
            </div>
            <div class="config-body-container">
                <div class="on-setting-container">
                    <div class="set-title">
                        <h5>Flood setting:</h5>
                    </div>
                    <div class="set-setting">
                        <div class="setting-content">
                            <div class="setting-duration">
                                <label><h6>Duration flood per second: </h6></label>
                            </div>
                            <div class="setting-period">
                                <input class="set-input" v-model="dutationFlood" />
                                <span class="unit-controll"> /sec</span>
                            </div>
                        </div>
                        <div class="setting-content">
                            <div class="setting-duration">
                                <label><h6>Period flood per hours: </h6></label>
                            </div>
                            <div class="setting-period">
                                <input class="set-input" v-model="periodFlood"/>
                                <span class="unit-controll"> /hrs</span>
                            </div>
                        </div>
                        <div class="setting-content">

                        </div>
                    </div>
                </div>
                <hr>
                <div class="on-setting-container">
                    <div class="set-title">
                        <h5>Ventilate setting:</h5>
                    </div>
                    <div class="set-setting">
                        <div class="setting-content">
                            <div class="setting-duration">
                                <label><h6>Duration Fan per second: </h6></label>
                            </div>
                            <div class="setting-period">
                                <input class="set-input" v-model="dutationFan"/>
                                <span class="unit-controll"> /sec</span>
                            </div>
                        </div>
                        <div class="setting-content">
                            <div class="setting-duration">
                                <label><h6>Period Fan per hours: </h6></label>
                            </div>
                            <div class="setting-period">
                                <input class="set-input" v-model="periodFan"/>
                                <span class="unit-controll"> /hrs</span>
                            </div>
                        </div>
                        <div class="setting-content">

                        </div>
                    </div>
                </div>
                <hr>
                <div class="on-setting-container">
                    <div class="set-title">
                        <h5>Brightness setting:</h5>
                    </div>
                    <div class="set-setting">
                        <div class="setting-content">
                            <div class="setting-duration">
                                <label><h6>Duration light per second: </h6></label>
                            </div>
                            <div class="setting-period">
                                <input class="set-input" v-model="dutationLight" />
                                <span class="unit-controll"> /sec</span>
                            </div>
                        </div>
                        <div class="setting-content">
                            <div class="setting-duration">
                                <label><h6>Period light per hours: </h6></label>
                            </div>
                            <div class="setting-period">
                                <input class="set-input" v-model="periodLight"/>
                                <span class="unit-controll"> /hrs</span>
                            </div>
                            
                        </div>
                        <div class="setting-content">
                            <div class="setting-duration">
                                <label><h6>Light brightness <span class="set-show-bri">{{ percentOfBrightness }}% </span>: </h6></label>
                            </div>
                            <div class="setting-brightness">
                                <input class="set-range" type="range" v-model="percentOfBrightness" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="on-setting-container">
                    <button type="button" class="btn btn-primary" @click="haddleUpdate" data-toggle="modal" data-target="#modal-notic">update</button>
                
                    <div class="modal fade" id="modal-notic" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Comfirm to update</h5>
                                </div>
                                <div class="modal-body">
                                    <div class="set-content-modal">
                                        <span class="set-label-modal"><h6>Duration flood per second:</h6></span>
                                        <span class="set-data-modal" v-if="dutationFlood !== ''"><h6>{{ dutationFlood }} sec</h6> </span>
                                        <span class="set-data-modal" v-if="dutationFlood === ''"><h6 style="color: red">{{ emptyMsg }}</h6> </span>
                                    </div>
                                    <div class="set-content-modal">
                                        <span class="set-label-modal"><h6>Period flood per hours:</h6></span>
                                        <span class="set-data-modal" v-if="periodFlood !== ''"> <h6>{{ periodFlood }} hrs</h6> </span>
                                        <span class="set-data-modal" v-if="periodFlood === ''"><h6 style="color: red">{{ emptyMsg }}</h6> </span>
                                    </div>
                                    <div class="set-content-modal">
                                        <span class="set-label-modal"><h6>Duration Fan per second:</h6></span>
                                        <span class="set-data-modal" v-if="dutationFan !== ''"><h6>{{ dutationFan }} sec</h6> </span>
                                        <span class="set-data-modal" v-if="dutationFan === ''"><h6 style="color: red">{{ emptyMsg }}</h6> </span>
                                    </div>
                                    <div class="set-content-modal">
                                        <span class="set-label-modal"><h6>Period Fan per hours:</h6></span>
                                        <span class="set-data-modal" v-if="periodFan !== ''"><h6>{{ periodFan }} hrs</h6> </span>
                                        <span class="set-data-modal" v-if="periodFan === ''"><h6 style="color: red">{{ emptyMsg }}</h6> </span>
                                    </div>
                                    <div class="set-content-modal">
                                        <span class="set-label-modal"><h6>Duration light per second:</h6></span>
                                        <span class="set-data-modal" v-if="dutationLight !== ''"><h6>{{ dutationLight }} sec</h6> </span>
                                        <span class="set-data-modal" v-if="dutationLight === ''"><h6 style="color: red">{{ emptyMsg }}</h6> </span>
                                    </div>
                                    <div class="set-content-modal">
                                        <span class="set-label-modal"><h6>Period light per hours:</h6></span>
                                        <span class="set-data-modal" v-if="periodLight !== ''"><h6>{{ periodLight }} hrs</h6> </span>
                                         <span class="set-data-modal" v-if="periodLight === ''"><h6 style="color: red">{{ emptyMsg }}</h6> </span>
                                    </div>
                                    <div class="set-content-modal">
                                        <span class="set-label-modal"><h6>Light brightness</h6></span>
                                        <span class="set-data-modal"  v-if="percentOfBrightness !== ''"><h6>{{ percentOfBrightness }} % or color {{ convertPercent }}</h6> </span>
                                        <span class="set-data-modal" v-if="percentOfBrightness === ''"><h6 style="color: red">{{ emptyMsg }}</h6> </span>
                                    </div>
                                </div>
                                <div class="error-msg" v-if="errorMsg !== ''">
                                    <h4>{{ errorMsg }}</h4>
                                </div>
                                <hr>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" @click="sendSetting">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dutationFlood: '',
            periodFlood: '',
            dutationFan: '',
            periodFan:'',
            dutationLight: '',
            periodLight: '',
            percentOfBrightness: '',
            convertPercent:'',
            emptyMsg: "Empty value!",
            errorMsg: '',
            isFirstTime: true
        }

    },
    methods:{
        haddleUpdate(){
            this.convertPercent = (this.percentOfBrightness / 100) * 255
            this.errorMsg = ""
        },
        sendSetting(){
            if(this.dutationFlood === '' || this.periodFlood === '' || this.dutationFan === '' || this.periodFan === '' || this.dutationLight === '' || this.periodLight === '' || this.percentOfBrightness === ''){
                this.errorMsg = "All value must not be empty!"
            }else{

                alert('Update')
            }
        },
        haddleLogout(){
            this.$root.state.isLogin = '',
            this.$router.push('./')
        }
    },
    created(){
        if(this.$root.state.isLogin !== true){
            this.$router.push('./')
        }
    }
}
</script>

<style scoped>
.config-container{
    text-align: center;
    margin-top: 50px;
    
    color: rgb(138, 138, 138)
}
.set-config-title{
    margin-bottom: 30px;
}
.set-config-title > h4 > span{
    margin-left:10px;
}
.config-body-container{
    width: 70%;
    margin: auto;
    border: 1px solid rgb(184, 184, 184);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.set-title{
    text-align: left;
    padding-left: 1rem;
    margin-top: 1rem;
}
.set-setting{
    margin-top: 30px;
}
.setting-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 65%;
    margin: auto;
}
.set-show-bri{
    color: rgb(82, 82, 82);;
    font-weight: bold;
}
.setting-duration{
    margin-bottom: 1rem;
    text-align: left;
}
.set-input{
    width: 50%;
}
.set-range{
    width: 65%;
}
.setting-period > span{
    margin-left:10px;
}
.on-setting-container > button{
    margin-bottom: 20px;
}
.set-content-modal{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.set-content-modal > .set-data-modal{
    text-align: center;
}

.set-content-modal > .set-label-modal{
    text-align: left;
}
.error-msg{
    text-align: center;
    color: red;
}
.modal-footer{
    border: none;
    margin: auto;
}
.footer{
    height: 100px;
}

</style>