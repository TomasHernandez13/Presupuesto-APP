const user = {
    
}

let bill = 0;
let arr = [];

$(document).ready(function(){
    $("#budgetbtn").click(function(){
        user.budget = $("#budgetinp").val()
        user.balance = Number($("#budgetinp").val())

        $("#budget").text("$" + user.budget)
        $("#balance").text("$" + user.balance)
        console.log(user)
        return user
    });

    $("#billbtn").click(function(){

        user.billname = $("#billname").val()
        user.bill = Number($("#billinp").val());
        
        arr.push(user.billname, user.bill)
        console.log(arr)

        $('#tbody').append('<tr class=""><td scope="row">' + user.billname + '</th><td>$<span id="textBill">' + user.bill + '</span></td><td><button id="deletebtn" type="button" class="btn btn-danger btn-sm">X</button></td></tr>');

        bill = bill + user.bill

        user.balance = user.balance - user.bill

        $("#bill").text("$" + bill)
        $("#balance").text("$" + user.balance)

        if(user.balance <= 0){
            alert("Tu saldo se acabó!!!")
        }

        console.log(user)
        return user
    });

    $("#tbody").on("click", "#deletebtn", function() {
        let index = $(this).closest("tr").index();
        $("#tbody tr").eq(index).remove();

        let rowText = $(this).closest("tr").find("#textBill").text();
        let billAmount = Number(rowText)
        console.log(rowText);

        bill = bill - billAmount
        user.balance = user.balance + billAmount

        $("#bill").text("$" + bill)
        $("#balance").text("$" + user.balance)

        

        return user
      });

    $("#showLog").click(() => {
        for (const element of arr) {
            $("#log").text(arr.join("-"))
        }
    })
});