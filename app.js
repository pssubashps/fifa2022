Vue.createApp({
  
    data() {
        return {
           matches: []
        };
    },
    created(){
        console.log(this.$el);
        this.loadData();
    },
    mounted(){
        //if(this.$refs)
        const dt = new Date();
        const s = dt.toDateString();
        const ele = s.split(' ')[2];
        if(this.$refs[ele]) {
            this.$refs[ele][0].scrollIntoView({ behavior: 'smooth' })
        }
        
       // this.$el.querySelector(".25").scrollIntoView();
    },
    methods: {
        showDetails() {
            this.isShowExp = !this.isShowExp;
        },
        loadData() {
           const matchList = [{"matchno":"1","team1":"qat","team2":"ecu","group":"A","matchtime":"2022-11-20T21:30"},{"matchno":"2","team1":"SEN","team2":"NED","group":"A","matchtime":"2022-11-20T21:30"},{"matchno":"3","team1":"eng","team2":"irn","group":"B","matchtime":"2022-11-21T21:30"},{"matchno":"4","team1":"USA","team2":"WAL","group":"B","matchtime":"2022-11-22T00:30"},{"matchno":"5","team1":"fra","team2":"aus","group":"D","matchtime":"2022-11-23T00:30"},{"matchno":"6","team1":"DEN","team2":"TUN","group":"D","matchtime":"2022-11-22T18:30"},{"matchno":"7","team1":"MEX","team2":"POL","group":"C","matchtime":"2022-11-22T21:30"},{"matchno":"8","team1":"ARG","team2":"KSA","group":"C","matchtime":"2022-11-22T15:30"},{"matchno":"9","team1":"BEL","team2":"CAN","group":"F","matchtime":"2022-11-24T00:30"},{"matchno":"10","team1":"ESP","team2":"CRC","group":"E","matchtime":"2022-11-23T21:30"},{"matchno":"11","team1":"GER","team2":"JPN","group":"E","matchtime":"2022-11-23T18:30"},{"matchno":"12","team1":"MAR","team2":"CRO","group":"F","matchtime":"2022-11-23T15:30"},{"matchno":"13","team1":"SUI","team2":"CMR","group":"G","matchtime":"2022-11-24T15:30"},{"matchno":"14","team1":"URU","team2":"KOR","group":"H","matchtime":"2022-11-24T15:30"},{"matchno":"15","team1":"POR","team2":"GHA","group":"H","matchtime":"2022-11-24T21:30"},{"matchno":"16","team1":"BRA","team2":"SRB","group":"G","matchtime":"2022-11-25T21:30"},{"matchno":"17","team1":"WAL","team2":"IRN","group":"B","matchtime":"2022-11-25T21:30"},{"matchno":"18","team1":"QAT","team2":"SEN","group":"A","matchtime":"2022-11-25T18:30"},{"matchno":"19","team1":"NED","team2":"ECU","group":"A","matchtime":"2022-11-25T21:30"},{"matchno":"20","team1":"ENG","team2":"USA","group":"B","matchtime":"2022-11-26T00:30"},{"matchno":"21","team1":"TUN","team2":"AUS","group":"D","matchtime":"2022-11-26T00:30"},{"matchno":"22","team1":"POL","team2":"KSA","group":"C","matchtime":"2022-11-26T00:30"},{"matchno":"23","team1":"FRA","team2":"DEN","group":"D","matchtime":"2022-11-26T00:30"},{"matchno":"24","team1":"ARG","team2":"MEX","group":"C","matchtime":"2022-11-26T00:30"},{"matchno":"25","team1":"JPN","team2":"CRC","group":"E","matchtime":"2022-11-26T00:30"},{"matchno":"26","team1":"BEL","team2":"MRA","group":"F","matchtime":"2022-11-26T00:30"},{"matchno":"27","team1":"CRO","team2":"BAN","group":"D","matchtime":"2022-11-26T00:30"},{"matchno":"28","team1":"ESP","team2":"GER","group":"E","matchtime":"2022-11-26T00:30"},{"matchno":"29","team1":"CMR","team2":"SRB","group":"G","matchtime":"2022-11-26T00:30"},{"matchno":"30","team1":"KOR","team2":"GHA","group":"H","matchtime":"2022-11-26T00:30"},{"matchno":"31","team1":"BRA","team2":"SUI","group":"G","matchtime":"2022-11-26T00:30"},{"matchno":"32","team1":"POR","team2":"URU","group":"H","matchtime":"2022-11-26T00:30"},{"matchno":"33","team1":"WAL","team2":"ENG","group":"B","matchtime":"2022-11-26T00:30"},{"matchno":"34","team1":"IRN","team2":"USA","group":"B","matchtime":"2022-11-26T00:30"},{"matchno":"35","team1":"ECU","team2":"SEN","group":"A","matchtime":"2022-11-26T00:30"},{"matchno":"36","team1":"NED","team2":"QAT","group":"A","matchtime":"2022-11-26T00:30"},{"matchno":"37","team1":"AUS","team2":"DEN","group":"D","matchtime":"2022-11-26T00:30"},{"matchno":"38","team1":"TUN","team2":"FRA","group":"D","matchtime":"2022-11-26T00:30"},{"matchno":"39","team1":"POL","team2":"ARG","group":"C","matchtime":"2022-11-26T00:30"},{"matchno":"40","team1":"KSA","team2":"MEX","group":"C","matchtime":"2022-11-26T00:30"},{"matchno":"41","team1":"CRO","team2":"BEL","group":"F","matchtime":"2022-11-26T00:30"},{"matchno":"42","team1":"CAN","team2":"MAR","group":"F","matchtime":"2022-11-26T00:30"},{"matchno":"43","team1":"JPN","team2":"ESP","group":"E","matchtime":"2022-11-26T00:30"},{"matchno":"44","team1":"CRC","team2":"GER","group":"E","matchtime":"2022-11-26T00:30"},{"matchno":"45","team1":"GHA","team2":"URU","group":"H","matchtime":"2022-11-26T00:30"},{"matchno":"46","team1":"KOR","team2":"POR","group":"H","matchtime":"2022-11-26T00:30"},{"matchno":"47","team1":"SRB","team2":"SUI","group":"G","matchtime":"2022-11-26T00:30"},{"matchno":"48","team1":"CMR","team2":"BRA","group":"G","matchtime":"2022-11-26T00:30"},{"matchno":"49","team1":"1A","team2":"2B","group":"Pre Quarter","matchtime":"2022-12-03T20:30"},{"matchno":"50","team1":"1C","team2":"2D","group":"Pre Quarter","matchtime":"2022-12-04T00:30"},{"matchno":"51","team1":"1B","team2":"2A","group":"Pre Quarter","matchtime":"2022-12-05T00:30"},{"matchno":"52","team1":"1D","team2":"2C","group":"Pre Quarter","matchtime":"2022-12-04T20:30"},{"matchno":"53","team1":"1E","team2":"2F","group":"Pre Quarter","matchtime":"2022-12-05T20:30"},{"matchno":"54","team1":"1G","team2":"2H","group":"Pre Quarter","matchtime":"2022-12-06T00:30"},{"matchno":"55","team1":"1F","team2":"2E","group":"Pre Quarter","matchtime":"2022-12-06T20:30"},{"matchno":"56","team1":"1H","team2":"2G","group":"Pre Quarter","matchtime":"2022-12-07T00:30"},{"matchno":"57","team1":"W49","team2":"W50","group":"Quarter Finals","matchtime":"2022-12-10T00:30"},{"matchno":"58","team1":"W53","team2":"W54","group":"Quarter Finals","matchtime":"2022-12-09T20:30"},{"matchno":"59","team1":"W51","team2":"W52","group":"Quarter Finals","matchtime":"2022-12-11T00:30"},{"matchno":"60","team1":"W55","team2":"W56","group":"Quarter Finals","matchtime":"2022-12-10T20:30"},{"matchno":"61","team1":"W57","team2":"W58","group":"Semi Finals","matchtime":"2022-12-14T00:30"},{"matchno":"62","team1":"W59","team2":"W60","group":"Semi Finals","matchtime":"2022-12-15T00:30"},{"matchno":"64","team1":"W61","team2":"W62","group":"Finals","matchtime":"2022-12-18T20:30"}];
           matchList.forEach((m,i) => {
            matchList[i].matchDateTime = new Date(m.matchtime);
           });
           matchList.sort((a,b) => {
            return a.matchDateTime - b.matchDateTime;
          });
           console.log(this.$el);
           this.matches = matchList;
          
         // document.querySelector('.25').scrollIntoView();
        },
        addExp() {
            console.log(this.company, this.startDate, this.endDate);
            const startArr = this.startDate.split('-');
            const endDateArr = this.endDate.split('-');
            this.startDate = `${startArr[1]}-${startArr[2]}-${startArr[0]}`;
            this.endDate = `${endDateArr[1]}-${endDateArr[2]}-${endDateArr[0]}`;
            const temp = {
                company: this.company,
                startDate: this.startDate,
                endDate: this.endDate
            };
            if(this.index === false) {
                this.exp.push(temp);
            }else{
                this.exp[this.index] = temp;
            }
           
            this.company = '';
            this.startDate = '';
            this.endDate = '';
            this.index = false;
            console.table(this.exp);
            this.showExp();
            localStorage.setItem("expData",JSON.stringify(this.exp));
           
            
        },
        deleteExp(index) {
            this.exp.splice(index, 1);
            localStorage.setItem("expData",JSON.stringify(this.exp));
            this.showExp();

        },
        editExp(index) {
            this.index = index;
            console.log( this.exp[index]);
            const startArr = this.exp[index].startDate.split('-');
            const endDateArr = this.exp[index].endDate.split('-');
            this.company = this.exp[index].company;
            this.startDate = `${startArr[2]}-${startArr[0]}-${startArr[1]}`;
            this.endDate = `${endDateArr[2]}-${endDateArr[0]}-${endDateArr[1]}`;
            this.$refs.company.focus()
        },
        showExp() {
            let totalExpTime = [];
            this.exp.forEach(e => {
                const d1 = new Date(e.startDate);
                const d2 = new Date(e.endDate);
                compExptime = this.totalExp(d1, d2);
                totalExpTime.push({ comapny: e.company, compExptime });
            });
            totalExpTime.forEach(t => {
                t.msg = this.calculate(t.compExptime);
            });
            let overall = 0;
            totalExpTime.forEach(t=>{
                overall = overall+t.compExptime;
             });
            const f =  this.calculate(overall);
            this.total = f[2];
            this.totalMonth = f[1];
        },
        totalExp(date1, date2) {
            return date2.getTime() - date1.getTime();
        },
        calculate(time) {
            const diff = time;
            // var secs = Math.floor(diff/1000);
            // var mins = Math.floor(secs/60);
            //  var hours = Math.floor(mins/60);
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            console.log('days'+days);
          //  let months = Math.floor(days / 31);
            const years = Math.floor(days / 365.25);
            const remaingDays = Math.floor(days % 365.25);
           const  months = Math.floor(remaingDays / 31);
            days = Math.floor(days % 31);
            // hours = Math.floor(hours%24);
            // mins = Math.floor(mins%60);
            // secs = Math.floor(secs%60); 
            let message = `${days} days ${months} months  ${years} years `;

            return [days, months, years];
        }
    }
}).mount('#app');


let beforeInstallPrompt = null;
window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

function eventHandler(event){
    console.log('event triggered');
    beforeInstallPrompt = event;        
}
function errorHandler(e){
    console.log('error: ' + e);
}
