// import React from "react";
// 376737,52,03/19/2022,09/22/59,100577.30,100565.08,0.32,1.33,1.01,4.93,28.59,7.01,-7.854390,110.338107,68.32,-7.773757,110.376417,159.40,1,-15.78,189.54,530.52,1,Yes
export var isibagi;
export var raw_data = [];
let RawData = ()=>{

function rand(){
    return((Math.random()*4000 - 500).toFixed(2) - 0);
}

let gps1_latitude = -7.759029;
let gps1_longitude = 110.373108;
// let gps1_altitude = rand();
let gps2_latitude = -7.759029;
let gps2_longitude = 110.373108;
// let gps2_altitude = rand();


let i=360;
let j=360;
let k=1;
let packet = 0;
let team_id = 376737;
    setInterval(function(){ 
        i+=10;
        k+=1;
        var today = new Date();
        var date = String(today.getMonth() + 1).padStart(2, '0')+'/'+String(today.getDate()).padStart(2, '0')+'/'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+';'+time;
        let pressure1 = rand();
        let pressure2 = rand();
        let altitude1 = rand();
        let altitude2 = rand();
        let altitudediff = Math.abs(altitude1 - altitude2).toFixed(2);
        let descent = rand();
        let temp = rand();
        let voltage = rand();
        gps1_latitude -=0.0001;
        gps1_latitude.toFixed(6);
        gps1_longitude -= 0.0001;
        gps1_longitude.toFixed(6);
        let gps1_altitude = rand();
        gps2_latitude += 0.0001;
        gps2_latitude.toFixed(6);
        gps2_longitude += 0.0001;
        gps1_longitude.toFixed(6);
        let gps2_altitude = rand();
        let status = k;
        let pitch = j;
        let roll = i;
        let yaw = j;
        let spinrate = rand();
        let video_transfer="Yes";
        let contoh = team_id+","+packet+','+dateTime+','+pressure1+","+pressure2+","+altitude1+","+altitude2+","+altitudediff+","+descent+","+temp+","+voltage+","+gps1_latitude.toFixed(6)+","+gps1_longitude.toFixed(6)+","+gps1_altitude.toFixed(6)+","+gps2_latitude.toFixed(6)+","+gps2_longitude.toFixed(6)+","+gps2_altitude.toFixed(6)+","+status+","+pitch+","+roll+","+yaw+","+spinrate+","+video_transfer;
        packet++;
        const bagi = contoh.split(",");
         isibagi = {
            // dateTime = date+','+time;
            pressure1 : Number(bagi[3]),
            pressure2 : Number(bagi[4]),
            altitude1 : Number(bagi[5]),
            altitude2 : Number(bagi[6]),
            altitudediff : Number(bagi[7]),
            descent : Number(bagi[8]),
            temp : Number(bagi[9]),
            voltage : Number(bagi[10]),
            gps1_latitude : Number(bagi[11]),
            gps1_longitude : Number(bagi[12]),
            gps1_altitude : Number(bagi[13]),
            gps2_latitude : Number(bagi[14]),
            gps2_longitude : Number(bagi[15]),
            gps2_altitude : Number(bagi[16]),
            statusnow : Number(bagi[17]),
            pitch : Number(bagi[18]),
            roll : Number(bagi[19]),
            yaw : Number(bagi[20]),
            spinrate : Number(bagi[21]),
            video_transfer: bagi[22],
        };
        contoh.toString();
        raw_data.push(contoh+" ");  
    }, 1000);
   
    return(isibagi);
}

setInterval(function(){
    
    if(isibagi.statusnow>1){
        document.getElementById("standby-c").className="ellipse-container-active";
        document.getElementById("standby-p").className="ellipse-payload-active";
    }
    if(isibagi.statusnow>10){
        document.getElementById("ascent-c-garis").className="garis-container-active";
        document.getElementById("ascent-c-dot").className="ellipse-container-active";
    }
    if(isibagi.statusnow>20){
        document.getElementById("released-c-garis").className="garis-container-active";
        document.getElementById("released-c-dot").className="ellipse-container-active";
    }
    if(isibagi.statusnow>30){
        document.getElementById("separated-c-garis").className="garis-container-active";
        document.getElementById("separated-c-dot").className="ellipse-container-active";
    }
    if(isibagi.statusnow>40){
        document.getElementById("descent-c-garis").className="garis-container-active";
        document.getElementById("descent-c-dot").className="ellipse-container-active";
    }
    if(isibagi.statusnow>50){
        document.getElementById("landed-c-garis").className="garis-container-active";
        document.getElementById("landed-c-dot").className="ellipse-container-active";
    }
    //payload
    if(isibagi.statusnow>30){
        document.getElementById("released-p-garis").className="garis-payload-active";
        document.getElementById("released-p-dot").className="ellipse-payload-active";
    }
    if(isibagi.statusnow>40){
        document.getElementById("hovering-p-garis").className="garis-payload-active";
        document.getElementById("hovering-p-dot").className="ellipse-payload-active";
    }
    if(isibagi.statusnow>50){
        document.getElementById("descent-p-garis").className="garis-payload-active";
        document.getElementById("descent-p-dot").className="ellipse-payload-active";
    }
    if(isibagi.statusnow>60){
        document.getElementById("landed-p-garis").className="garis-payload-active";
        document.getElementById("landed-p-dot").className="ellipse-payload-active";
    }
    


},1000);

export default RawData;


