const handlePaymentInfo=async (id)=>{
    const data = await fetch(`ROOMS.json`);
    const result = await data.json();
    const roomInfo=result.find(r => r._id==id)
    console.log(roomInfo)
    document.getElementById('paymentModalLevel').innerText = roomInfo.name;
    document.getElementById('exampleFormControlTextarea1').innerText = roomInfo.description
    ;
}