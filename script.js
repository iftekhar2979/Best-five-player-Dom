const getNode = function getElements(e) {
  return document.getElementById(e);
};
const calculateButton=getNode('calculate_Budget')
const inputBudget=getNode('budget')
const orderList = getNode('order_list');
const select = document.querySelectorAll('.btn.btn-primary');

for (let i = 0; i < select.length; i++) {
  select[i].addEventListener('click', function (e) {  
    let selectedElement = e.target.parentNode.children[1].children[0].innerText;
    let selection = document.createElement('li');
    selection.classList.add('text-light');
    orderList.appendChild(selection);
    selection.innerText = selectedElement;
    ///making array of orderlist player
    let orderListArr = [];
    if (orderList.children.length === 5) {
      alert("Be careful !! It's above five Players.");

    }
    let playerName = orderList.children;
    for (let player of playerName) {
      let playersOrder = player.childNodes[0].nodeValue;
      orderListArr.push(playersOrder);
    }
    //removing the warning
    if(orderList.children.length===1){
      getNode('selections').removeChild(getNode('warning'))
    }
    select[i].setAttribute('disabled', 'disabled'); //disabling funtionality   
  });
}
//some functions used for code readability
function makingArrayOfPlayers(){
    return orderList.children.length
}

function values(selector){ 
    return selector.value;
}

//calculation of budget
calculateButton.addEventListener('click',function(){
    let perPlayerBudget= inputBudget.value
    if(perPlayerBudget==''){
      alert('Provide the Budget for Players')
    }
    if(perPlayerBudget<0){
        alert('Please input the Budget')
    }else{
        let needBudget= perPlayerBudget*makingArrayOfPlayers()
        let playerExpences=getNode('player_Expences')
        playerExpences.innerText=needBudget
    }
    inputBudget.value=''
})
//Total Calculation of Budget
getNode('total_calculation').addEventListener('click',function(){
    let managerExp= values(getNode('manager_expenses'))
    let couchExp= values(getNode('coach_expenses'))
    let playerExpences=getNode('player_Expences').innerText
    if(managerExp=='' || couchExp==''){
      alert('Please add the Budget for Manger and Coach')
    }else{
      let total=Number(playerExpences)+Number(managerExp)+Number(couchExp)
      getNode('total').innerText=total
  
    }
    values(getNode('manager_expenses'))=''
    values(getNode('coach_expenses'))=''
    
})
