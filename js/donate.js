
function inputForm(id) {
    const inputAmount = document.getElementById(id).value;
    const amount = parseFloat(inputAmount);
 

    if (isNaN(inputAmount) || inputAmount === "") {
        alert("Please enter a valid number.");
        return null;
    }

    if(amount >=1 ){
        return amount;

    }
    else{
        alert ("donation can not be less than $1 ")
        return null;
    }
   
}

function inputValue(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputValueNum = parseFloat(inputValue);
    return inputValueNum;
}

function totalDonation(inputFromId, inputValueId) {
    const totalDonation = (inputForm(inputFromId) + inputValue(inputValueId)).toFixed(2);

  
    return totalDonation;
}



//function for history added 

function addHistory (id, titleId){
    const totalDonation = document.getElementById(id).innerText;
    const title = document.getElementById(titleId).innerText;
    const date = new Date();

    const div = document.createElement('div');
    div.className = 'border  bg-green-100 boder-6 p-6 mb-10 mt-10';
    div.innerHTML = `
        <p>${totalDonation} Dollar is donated for ${title}</p>
        <p>${date}</p>
        
    `;
    document.getElementById('historyAdded').appendChild(div);
}


//noyakhali donation
document.getElementById('btn-donate-noyakhali').addEventListener('click', function () {
    const inputFormValue = inputForm('donate-noyakhali');
    if(inputFormValue===null){
        return
    }
    const inputValueValue = inputValue('total-donation-noyakhali');

  
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

    
    if (totalBalance >= inputFormValue) {
       

        
        const totalDonationGiven = totalDonation('donate-noyakhali', 'total-donation-noyakhali');
        console.log(totalDonationGiven);

      
        document.getElementById('total-donation-noyakhali').innerText = totalDonationGiven;

        
        const totalBalanceDisplay = (totalBalance - inputFormValue).toFixed(2);
        document.getElementById('total-balance').innerText = totalBalanceDisplay;

        
        document.getElementById('donate-noyakhali').value = '';
        alert("Success");

        addHistory('total-donation-noyakhali', 'noyakhali-title');

    } else {
        alert('This time cannot donate. Insufficient balance.');
        document.getElementById('donate-noyakhali').value = '';
    }

   

    // document.getElementById('btn-history').addEventListener('click', function(){
    //     const totalDonation =document.getElementById('total-donation-noyakhali').innerText;
    //     const title = document.getElementById('noyakhali-title').innerText;
    //     console.log("total donatoioo " + totalDonation)
    //     const date = new Date();
    //     const div = document.createElement('div');
    //     div.className='border border-solid bg-green-100 boder-2'
    //     div.innerHTML = `
    //     <p> ${totalDonation} Dollar is ${title}</p>
    //     <p>${date} </p>

    //     `
    //   const historyElement =  document.getElementById('historyAdded').appendChild(div);
    //   console.log(historyElement)
    // })


   



});
//noyakhali donation end

//feni donation 
document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const inputFormValue = inputForm('donate-feni');
    if(inputFormValue===null){
        return
    }
    const inputValueValue = inputValue('total-donation-feni');

  
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

    
    if (totalBalance >= inputFormValue) {
        alert("Success");

        
        const totalDonationGiven = totalDonation('donate-feni', 'total-donation-feni');
        console.log(totalDonationGiven);

      
        document.getElementById('total-donation-feni').innerText = totalDonationGiven;

        
        const totalBalanceDisplay = (totalBalance - inputFormValue).toFixed(2);
        document.getElementById('total-balance').innerText = totalBalanceDisplay;

        
        document.getElementById('donate-feni').value = '';

        addHistory('total-donation-feni', 'feni-title');
    } else {
        alert('This time cannot donate. Insufficient balance.');
        document.getElementById('donate-feni').value = '';
    }
});


//feni donation end

//qouta donation

document.getElementById('btn-donate-qouta').addEventListener('click', function () {
    const inputFormValue = inputForm('donate-qouta');
    if(inputFormValue===null){
        return
    }
    const inputValueValue = inputValue('total-donation-quota');

  
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);

    
    if (totalBalance >= inputFormValue) {
       
        
        const totalDonationGiven = totalDonation('donate-qouta', 'total-donation-quota');
        console.log(totalDonationGiven);

      
        document.getElementById('total-donation-quota').innerText = totalDonationGiven;

        
        const totalBalanceDisplay = (totalBalance - inputFormValue).toFixed(2);
        document.getElementById('total-balance').innerText = totalBalanceDisplay;

        
        document.getElementById('donate-qouta').value = '';
        alert("Success");
        addHistory('total-donation-quota', 'quota-title');

    } 
    
    
    
    else {
        alert('This time cannot donate. Insufficient balance.');
        document.getElementById('donate-qouta').value = '';
    }
});

















document.getElementById('btn-donate').addEventListener('click', function(){
    document.getElementById("donate").classList.remove('hidden');
    document.getElementById("history").classList.add('hidden');
        document.getElementById("btn-history").classList.remove('bg-green-500', 'text-white')
        document.getElementById("btn-donate").classList.add('bg-green-500', 'text-white')
        

})

document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById("history").classList.remove('hidden');
    document.getElementById("donate").classList.add('hidden');
    document.getElementById("btn-donate").classList.remove('bg-green-500', 'text-white')
    document.getElementById("btn-history").classList.add('bg-green-500', 'text-white')



})