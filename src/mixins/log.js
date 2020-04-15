export default {
    created(){
        console.log('I am logging that the app has been created')
    },
    data() {
        return {
            myPrivateInfo: "Daiane"
        }
    },
    methods: {
        logNow(){
            console.log("Logging now")
        }
    }
}