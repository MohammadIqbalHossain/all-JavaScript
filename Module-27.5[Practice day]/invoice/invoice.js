
document.getElementById('detail-submit-btn').addEventListener('click', function(){
    const buyerDetails = document.getElementById('buyer-details-input');
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = buyerDetails.value;
})

const tableInfo = document.getElementById('info-table');


/* <!-- <tr>
<th >1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> --> */





document.getElementById('add-details-btn').addEventListener('click', function(){
     
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    tableInfo.appendChild(tr)
    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)


    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
 
    const itemQuantity = document.getElementById('item-quantity-input');

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
    
    
    td3.classList.add('total');
    const subtotalText = document.getElementsByClassName('total');
    
   
        
        for(const total of subtotalText){
            const subTotalNum = total.innerText;
            const subTotalValue = parseInt(subTotalNum);
        
    
    
        const subtotal = document.getElementById('sub-total');
        subtotal.innerText = parseInt(subtotal.innerText) + subTotalValue;
        }

        const tax = document.getElementById('tax');
        const totalSub = document.getElementById('sub-total').innerText;
        tax.innerText = parseFloat(totalSub) * .2;

        const grandTotal = document.getElementById('grand-total');
        const taxValue = tax.innerText;
        const total = grandTotal.innerText = parseFloat(totalSub) + parseFloat(taxValue);

        document.getElementById('grand-total-2').innerText = total;


    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
    
})

